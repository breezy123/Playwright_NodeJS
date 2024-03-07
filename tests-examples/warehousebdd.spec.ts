import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.thewarehouse.co.nz", { waitUntil: 'domcontentloaded' });
    // Soft Assertion, allows the test to continue even though there are failures
    await expect(page).toHaveURL("https://www.thewarehouse.co.nz");
});

test.describe.parallel("Test Navigation to Warehouse website", async () => {
    test("To Navigate to Home, Garden & Appliances", async ({ page, browserName }) => {

        test.skip(browserName === 'firefox','The browser does not support the feature.')
        await test.step("Hovering over category root", async () =>{

            var categoryRoot = await page.locator("data-test-id=category-root"); //these can be PageObjects

            categoryRoot.hover();

            await expect(categoryRoot).toBeVisible();
            // Click A/B Testing
        });

       await test.step("Clicking on Home, Garden & Appliances link", async () =>{
            // await page.locator('.gep-mega-menu-content >> #category-homegarden').hover();
        await page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true }).click();

        // element not visible after clicking category menu
        // wait page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true }).click();
        await expect(page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true })).toBeHidden();

       
        var title = await page.locator(".title").textContent();

        await expect(await page.locator(".title")).toHaveText("Home, Garden & Appliances");

        await expect(page).toHaveTitle("Home, Garden & Appliances - Homewares - Gardening | The Warehouse");
        });
    });

    test("Navigate to the Car Electronic Page", async ({ page, browserName }) => {

        test.skip(browserName === 'firefox','The browser does not support the feature.')

        var categoryRoot = await page.locator("data-test-id=category-root"); //these can be PageObjects
        // await page.locator("a[href='/abtest']", {hasText: 'A/B Testing'}).click();
        categoryRoot.hover();
        // Click A/B Testing
    
        await expect.soft(categoryRoot).toBeVisible();
    
        // await page.locator('.gep-mega-menu-content >> #category-homegarden').hover();
        await page.locator('gep-mega-menu-content').getByRole('link', { name: 'Electronics & Gaming', exact: true }).click();
    
        // element not visible after clicking category menu
        // wait page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true }).click();
        await expect(page.locator('gep-mega-menu-content').getByRole('link', { name: 'Electronics & Gaming', exact: true })).toBeHidden();
    
        var title = await page.locator(".title").textContent();
    
        await expect(await page.locator(".title")).toHaveText("Electronics & Gaming");
    
        await expect(page).toHaveTitle("Electronics Store NZ - Gaming Products | The Warehouse");
    
        // await page.close();
    });
});

test.afterEach(async ({ page }, testInfo) => {
    
    await page.screenshot({ path: `screenshots/${testInfo.title.trim()}.png`});
});
