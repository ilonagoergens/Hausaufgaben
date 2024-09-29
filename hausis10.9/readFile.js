import fs from "fs"

const path = "./beispiel.txt"

fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
        console.log("There was an error", err)
        return
    }
    console.log("Dateiinhalt:", data)
})