import { Builder, By, Key, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { afterEach, beforeEach, describe, it } from 'mocha';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Bestimme __dirname mit import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Wir testen verschiedene Webseiten', function () {
    this.timeout(30000);

    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it('macht einen Screenshot von der Webseite', async function () {
        await driver.get('https://www.example.com');
        await sleep(2000);

        // Screenshot erstellen
        const screenshot = await driver.takeScreenshot();

        // Speicherort für Screenshots
        const screenshotDir = path.join(__dirname, 'screenshots');
        
        // Stelle sicher, dass der Screenshot-Ordner existiert
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir);
        }

        // Name des Screenshot-Bildes
        const screenshotFileName = path.join(screenshotDir, 'example_screenshot.png');

        // Speichern des Screenshots als PNG-Datei
        fs.writeFileSync(screenshotFileName, screenshot, 'base64');

        console.log('Screenshot gespeichert:', screenshotFileName);
    });
});
