// const {chromium} = require('@playwright/test'); //const is for JavaScript

import {chromium} from '@playwright/test'; //TypeScript

(async () => {

    //creating the browser instance

    const browser = await chromium.launch({
        headless: false
    });

    // Browser Instance
    const browserInstant = await browser.newContext();

    // Page
    const page = await browserInstant.newPage();

    await page.goto("https://google.com");

    await browser.close();

})();

