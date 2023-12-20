/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs")
const path = require("path")
const util = require("util")
const exec = util.promisify(require("child_process").exec)

const svgDir = path.join(__dirname, "..", "src", "icons", "svg")
const componentsDir = path.join(__dirname, "..", "src", "icons", "components")
const indexFilePath = path.join(componentsDir, "index.ts")

function toPascalCase(str) {
  return str.replace(/([-_]\w)|^./g, (match, group1, offset) =>
    offset === 0 ? match.toUpperCase() : group1.toUpperCase()
  )
}

async function getSvgFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      await getSvgFiles(filePath, fileList)
    } else if (filePath.endsWith(".svg")) {
      fileList.push(filePath)
    }
  }
  return fileList
}

async function generateReactIcons() {
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true })
  }

  const svgFiles = await getSvgFiles(svgDir)
  let indexFileContent = ""

  for (const fullFilePath of svgFiles) {
    const file = path.relative(svgDir, fullFilePath)
    const baseName = path.basename(file, ".svg")
    const componentName = toPascalCase(baseName) + "Icon"
    const tsxFilePath = path.join(componentsDir, `${componentName}.tsx`)

    try {
      const { stdout } = await exec(
        `npx @svgr/cli --icon --typescript -- ${fullFilePath}`
      )
      const tsxContent = stdout.replace("SvgComponent", componentName)
      fs.writeFileSync(tsxFilePath, tsxContent)
      console.log(`Generated ${tsxFilePath}`)

      // Append export to index file content
      indexFileContent += `export { default as ${componentName} } from './${componentName}';\n`
    } catch (error) {
      console.error("Error generating icon component:", error)
    }
  }

  // Write the index file
  fs.writeFileSync(indexFilePath, indexFileContent)
}

generateReactIcons()
