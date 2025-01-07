import fs from 'fs';

const logs = fs.readFileSync('logs.txt', 'utf-8'); // Lies die gesamte Logdatei
const errors = logs.split('\n').filter(line => line.includes('ERROR')); // Findet Zeilen mit "ERROR"

console.log('Gefundene Fehler:');
console.log(errors.join('\n'));
