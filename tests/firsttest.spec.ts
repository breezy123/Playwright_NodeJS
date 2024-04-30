// const {chromium} = require('@playwright/test');
import {test} from "@playwright/test"

test("Warehouse test", async ({page}) =>{
    await page.goto("https://www.thewarehouse.co.nz", {waitUntil: 'domcontentloaded'}); // waiting for the domcontent to load

    // Click A/B Testing
    await page.locator("data-test-id=category-root").hover();
    // await page.locator('.gep-mega-menu-content >> #category-homegarden').hover();
    await page.locator('gep-mega-menu-content').getByRole('link', { name: 'Electronics & Gaming', exact: true }).hover();

    await page.locator('gep-mega-menu-content').getByRole('link', { name: 'Electronics & Gaming', exact: true }).click();


    // CSS selector=> await page.locator("#loginlink").click()
    // Xpath => await page.locator("//a[@id='loginlink']").click();
    // Has Text option await page.click("a:has-text('Login')");
    
});