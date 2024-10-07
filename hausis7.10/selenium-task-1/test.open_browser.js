import {Builder, By, Key, until} from 'selenium-webdriver'
import { expect } from 'chai'
import { afterEach, beforeEach, describe, it } from 'mocha'

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

describe('Wir testen die example.com website', function() {
    this.timeout(30000)

    let driver

    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
    })

    afterEach(async function() {
        await driver.quit()
    })

    it('visit example.com ans get the title', async function() {
        await driver.get('https://www.example.com')
        await sleep(2000)
    })
})
