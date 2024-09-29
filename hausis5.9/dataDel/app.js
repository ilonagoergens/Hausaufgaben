import fs from "fs"

try {
  fs.rmSync("obsolete.txt")
  console.log("Datei erfolgreich entfernt")
} catch (err) {
  console.error("Fehler beim entfernen der Datei", err)
}

