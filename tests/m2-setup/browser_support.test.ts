import {test, chromium, firefox, webkit } from "@playwright/test";

test ('browser support', async () => {
    for (const browserType of [chromium, firefox, webkit]) {
        console.log(`Testing ${browserType.name()}...`);
        const browser = await browserType.launch();
        const page = await browser.newPage();

        await page.goto('https://www.whatsmybrowser.org/');
        await page.screenshot({ path: `browser_support_${browserType.name()}.png` });

        await page.close();
        await browser.close();
    }
})