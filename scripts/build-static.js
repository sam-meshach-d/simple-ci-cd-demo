const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "src"), { recursive: true });

for (const file of ["index.html", "styles.css"]) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

fs.copyFileSync(path.join(root, "src", "app.js"), path.join(dist, "src", "app.js"));

console.log("Built static site in dist/.");
