import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

// Loggt jede Anfrage
app.use((req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFileSync("logs.txt", log); //Anhängen an die Logdatei
  next();
});

// Test-Route
app.get("/", (req, res) => {
  res.send("Hello, from Ilona!");
});

// Test-Route für Fehler
app.get("/error", (req, res) => {
  const errorLog = `${new Date().toISOString()} ERROR Something went wrong!\n`;
  fs.appendFileSync("logs.txt", errorLog); // Fehler direkt loggen
  res.status(500).send("Server Error");
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
