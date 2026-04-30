import { test, expect } from "@playwright/test";

test('Simple assertions', async ({ page }) => {

    expect('a').toEqual ('a');
    expect(2).toBeLessThan(3);
    expect(null).toBeFalsy();
    expect(true).toBeTruthy();

});

test('Test with simple auto-retrying Assertions', async ({ page }) => {

    await page.goto('http://localhost:3000/');

     await expect(page).toHaveTitle('Credit Association');
     await expect(page).toHaveURL('http://localhost:3000/');

});