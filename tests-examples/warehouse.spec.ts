import { test, expect } from "@playwright/test"

test.beforeEach( async ({page})=>{
    await page.goto("https://www.thewarehouse.co.nz", { waitUntil: 'domcontentloaded' });
    // Soft Assertion, allows the test to continue even though there are failures
    await expect.soft(page).toHaveURL("https://www.thewarehouse.co.nz");
});

test("Navigating to Lunch of Warehouse website", async ({page}) => {

    var categoryRoot = await page.locator("data-test-id=category-root"); //these can be PageObjects

    categoryRoot.hover();
    // Click A/B Testing

    await expect.soft(categoryRoot).toBeVisible();

    // await page.locator('.gep-mega-menu-content >> #category-homegarden').hover();
    await page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true }).click();

    // element not visible after clicking category menu
    // wait page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true }).click();
    await expect(page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true })).toBeHidden();
    
    var title = await page.locator(".title").textContent();

    await expect(await page.locator(".title")).toHaveText("Home, Garden & Appliances");

    await expect(page).toHaveTitle("Home, Garden & Appliances - Homewares - Gardening | The Warehouse");

    // await page.close();
});

test("Navigateing to Lunch of Warehouse website +2", async ({page}) => {

    var categoryRoot = await page.locator("data-test-id=category-rootZOOMsex"); //these can be PageObjects

    categoryRoot.hover();
    // Click A/B Testing

    await expect.soft(categoryRoot).toBeVisible();

    // await page.locator('.gep-mega-menu-content >> #category-homegarden').hover();
    await page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true }).click();

    // element not visible after clicking category menu
    // wait page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true }).click();
    await expect(page.locator('gep-mega-menu-content').getByRole('link', { name: 'Home, Garden & Appliances', exact: true })).toBeHidden();
    
    var title = await page.locator(".title").textContent();

    await expect(await page.locator(".title")).toHaveText("Home, Garden & Appliances (Piel)");

    await expect(page).toHaveTitle("Home, Garden & Appliances - Homewares - Gardening | The Warehouse");

    // await page.close();
});

test.afterEach(async ({page}) => {
    await page.screenshot({path: 'screenshots/warehouse.png'});
});