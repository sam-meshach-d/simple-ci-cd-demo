const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "src", "app.js"), "utf8");

assert.match(html, /Simple CI\/CD Demo/, "homepage should include the title");
assert.match(html, /counterButton/, "homepage should include the counter button");
assert.match(app, /addEventListener\("click"/, "button should handle clicks");

console.log("Site checks passed.");
