const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const output = path.join(root, ".vercel", "output");
const staticOutput = path.join(output, "static");

if (!fs.existsSync(path.join(dist, "index.html"))) {
  throw new Error("Run npm run build before creating the Vercel output.");
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(staticOutput, { recursive: true });

fs.cpSync(dist, staticOutput, { recursive: true });
fs.writeFileSync(
  path.join(output, "config.json"),
  `${JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/index.html" },
      ],
    },
    null,
    2,
  )}\n`,
);

console.log("Created Vercel static output in .vercel/output/.");
