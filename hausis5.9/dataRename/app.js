import fs from "fs"
import path from "path"

const oldPath = 'oldfile.txt'
const newFolderPath = 'archiv'
const newFilePath = path.join(newFolderPath, 'newfile.txt')

if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath)
}

fs.rename(oldPath, newFilePath, (err) => {
    if (err) throw err
    console.log("dateiname umbenannt und in den neuen Ordner verschoben")
})
