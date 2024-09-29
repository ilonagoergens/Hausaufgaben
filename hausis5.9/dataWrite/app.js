import fs from "fs"

fs.appendFile("notes.txt", "hinzugefügter Text", (err) => {
    if (err) {
        console.error("fehler beim Hinzufügen:", err)
    } else {
        console.log("Text wurde hinzugefügt!");
    }
})

try {
    fs.appendFileSync("notes.txt", "Dieser Text wird hinzugefügt")
    console.log("Text erfolgreich hinzugefügt!")
} catch (err) {
    console.error("Fehler beim Hinzufügen des Textes", err)
}
