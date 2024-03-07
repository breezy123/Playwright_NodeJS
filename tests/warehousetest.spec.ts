// const {chromium} = require('@playwright/test');
import {test} from "@playwright/test"

test("EA App Test", async ({page}) =>{

    await page.goto("http://eaapp.somee.com", {waitUntil: 'domcontentloaded'}); // waiting for the domcontent to load
    await page.locator('"text=Login", "text=Logon"');
})