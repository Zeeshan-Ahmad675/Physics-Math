const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const srcDir = "./src";
const outDir = "./dist";
const static = "./static";

const header = fs.readFileSync("parts/_header.html", "utf8");
const footer = fs.readFileSync("parts/_footer.html", "utf8");
const parhead = fs.readFileSync("parts/_parhead.html", "utf8");
const chstyle = fs.readFileSync("parts/_chstyle.html", "utf8");
const loader = fs.readFileSync("parts/_loader.html", "utf8");

// Ensure output dir exists
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Recursively process HTML files
function processDirectory(currentSrcDir, currentOutDir) {
    fs.readdirSync(currentSrcDir, { withFileTypes: true }).forEach((entry) => {
        const srcPath = path.join(currentSrcDir, entry.name);
        const outPath = path.join(currentOutDir, entry.name);
        if (entry.isDirectory()) {
            // Create corresponding output directory
            if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });
            processDirectory(srcPath, outPath);
        } else if (entry.isFile()) {
            // console.log("Processing:", srcPath);
            if (entry.name.startsWith("_")) return;
            const currentDirName = path.basename(currentSrcDir);
            const ext = path.extname(entry.name).toLowerCase();
            if (ext === ".html") {
                let content = fs.readFileSync(srcPath, "utf8");

                const dom = new JSDOM(content);
                const document = dom.window.document;

                // Uncomment if needed for security
                // document.querySelectorAll('a[target="_blank"]').forEach((a) => {
                //     const rel = a.getAttribute("rel") || "";
                //     if (!rel.includes("noopener")) {
                //         a.setAttribute("rel", (rel + " noopener noreferrer").trim());
                //     }
                // });

                const head = document.querySelector("head");
                head.insertAdjacentHTML("beforeend", parhead);
                ["Mathematical_methods_in_physics.html","refer.html","test.html","vectors.html","credits.html","euler_angles_calculator.html"].forEach(element => {
                    if(element == entry.name){
                    head.insertAdjacentHTML("beforeend", chstyle);
                }
                });
                
                

                content = dom.serialize()
                    .replaceAll("{{header}}", header)
                    .replaceAll("{{footer}}", footer)
                    .replaceAll("{{loader}}", loader);

                fs.writeFileSync(outPath, content);
            } else {
                fs.copyFileSync(srcPath, outPath);
            }
        }
    });
}

processDirectory(srcDir, outDir);
processDirectory(static, outDir);


// console.log("✅ Site built with partials and subdirectory support in ./dist/");
