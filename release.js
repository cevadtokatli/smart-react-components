const fs = require("fs")

fs.rmdirSync("./dist", {recursive:true});
fs.mkdirSync("./dist")
fs.copyFileSync("./package.json", "dist/package.json")
fs.copyFileSync("./LICENSE", "dist/LICENSE")
fs.copyFileSync("./README.md", "dist/README.md")