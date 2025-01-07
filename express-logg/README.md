# Express-Log-Server

Ein einfacher Express-Server, der Anfragen und Fehler in eine Logdatei schreibt. Enthält ein Skript zur Fehlersuche in den Logs.

## Features
- Loggt jede Anfrage in die Datei `logs.txt`.
- Spezielle `/error`-Route, die Fehler simuliert und ins Log schreibt.
- Skript `logs.js`, um Fehler in den Logs zu durchsuchen.

## Installation
1. Repository klonen:
   ```bash
   git clone https://github.com/deinusername/express-log-server.git

## Abhängigkeiten installieren:
npm install

## Server starten:

node server.js