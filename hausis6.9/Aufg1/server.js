// Importiere das HTTP-Modul von Node.js
const http = require("http");
// Erstelle den Server
const server = http.createServer((req, res) => {
  // Setze den Header für JSON-Antworten
  res.setHeader("Content-Type", "application/json");
  // Überprüfe die Route
  if (req.url === "/") {
    // JSON-Antwort
    res.writeHead(200);
    res.end(
      JSON.stringify({ message: "Willkommen beim Node.js HTTP-Server!" })
    );
  } else {
    // 404 Fehler für unbekannte Routen
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route nicht gefunden" }));
  }
});
// Starte den Server auf Port 3000
server.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});
