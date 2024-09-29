import fs from "fs/promises"

const filePath = "message.txt"
const content = "Hallo Welt!"

export async function fileHandler() {
    try {
        await fs.writeFile(filePath, content, "utf8")
        console.log("Die Datei wurde erstellt und beschrieben!")

        const fileContent = await fs.readFile(filePath,"utf8")
        console.log("Inhalt der Datei:", fileContent)
    } catch (err) {
        console.error("Es gab einen Fehler beim Schreiben oder Lesen der Datei", err)
    }
}