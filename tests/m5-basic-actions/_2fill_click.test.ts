import { test, expect } from '@playwright/test';

test('Fill test', async ({page}) => {
    await page.goto('/');

    await page.getByLabel('First name').fill('Andrejs');

    await page.getByLabel('Date of birth').fill('2023-10-10');

    const btn = page.getByRole('button', { name: 'Register' });

    await btn.click();
     await btn.click();
      await btn.click();

     for (let i = 0; i < 5; i++) { 
        await btn.click();
        }

        await btn.click({clickCount: 5});

        await btn.click({button: 'right'});

});

