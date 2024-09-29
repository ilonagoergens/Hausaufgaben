import express from "express"

const app = express()
const port = 3000
var liste = ["Ilona", "Kevin", "Nala"]

app.use(express.json())

app.get("/", (req, res ) => {
    res.send(liste)
})

app.post("/", (req, res) => {
    liste.push(req.body)
    res.send("Benutzer hinzugefügt 👍")
})

app.listen(port, () => console.log("server läuft auf port", port))