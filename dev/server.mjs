import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Depo kökünü servis eder (index.html ana sayfadır).
const ROOT = normalize(join(dirname(fileURLToPath(import.meta.url)), ".."));
const TYPES = { ".html": "text/html; charset=utf-8", ".md": "text/markdown; charset=utf-8", ".mjs": "text/javascript", ".json": "application/json", ".mARkdown": "text/plain; charset=utf-8" };

createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p === "/") p = "/index.html";
    const file = normalize(join(ROOT, p));
    if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
    const buf = await readFile(file);
    const ext = file.slice(file.lastIndexOf("."));
    res.writeHead(200, { "content-type": TYPES[ext] || "application/octet-stream" });
    res.end(buf);
  } catch {
    res.writeHead(404); res.end("not found");
  }
}).listen(8452, "127.0.0.1", () => console.log("rihle-site on 8452"));
