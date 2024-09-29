import express from "express"

const app = express()
const port = 3000
const liste = ["Ilona", "Malie", "Milan"]

app.get("/users", (req, res ) => {
    res.json(liste)
})

app.listen(port, () => console.log("server läuft auft port:", port))