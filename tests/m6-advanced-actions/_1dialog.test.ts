import {test, expect} from '@playwright/test';

const name = 'Sofia';

test('Dialog test - default handling is to dismiss', async ({page}) => {

    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    
    
    await page.getByRole('button', { name: 'Clear' }).click();
    await expect(input).toHaveValue(name);

});

test('Dialog test - ok or dismiss', async ({page}) => {

    page.on('dialog', dialog => dialog.accept());


    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill(name);
    
    
    await page.getByRole('button', { name: 'Clear' }).click();
    await expect(input).toHaveValue('');

});