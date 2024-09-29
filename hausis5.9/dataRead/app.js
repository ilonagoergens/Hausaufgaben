import fs from "fs"

try {
    const data = fs.readFileSync("text.txt", "utf-8")
    console.log(data)
} catch (err) {
  console.error("Datei konnte nicht gelesen werden:", err)
}

