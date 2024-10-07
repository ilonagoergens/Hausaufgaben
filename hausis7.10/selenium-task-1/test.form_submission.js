import { Builder, By, Key, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { afterEach, beforeEach, describe, it } from 'mocha';

let driver;

describe('Wir testen verschiedene Webseiten', function() {
    this.timeout(30000); 

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it('öffnet die Login-Seite, gibt die Anmeldedaten ein und sendet das Formular ab', async function () {
        await driver.get('https://the-internet.herokuapp.com/login');

        const usernameField = await driver.wait(until.elementLocated(By.id('username')), 10000);
        await usernameField.sendKeys('tomsmith'); 

        const passwordField = await driver.wait(until.elementLocated(By.id('password')), 10000);
        await passwordField.sendKeys('SuperSecretPassword!'); 

        const loginButton = await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);
        await loginButton.click();

        const successMessage = await driver.wait(until.elementLocated(By.css('.flash.success')), 10000);
        const messageText = await successMessage.getText();

        console.log('Erfolgsmeldung:', messageText);
        expect(messageText).to.include('You logged into a secure area!');
    });
});