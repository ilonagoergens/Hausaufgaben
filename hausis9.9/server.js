import express from "express"

const app = express()
const port = 3000

app.use((req, res, next) => {
    res.send("Hello, World!")
} )

app.listen(port, () => console.log("server läuft auf port", port))


