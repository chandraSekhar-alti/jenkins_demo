import { test, expect } from "@playwright/test";
const section = require("../fixtures.js");
test('TC-01', async ({ page }) => {
    const landing = new section.Landing(page, test)
    await page.goto('https://www.guru99.com/');
    await expect(landing.naveTestingtext).toBeVisible();
    await landing.naveTestingtext.click();


});
