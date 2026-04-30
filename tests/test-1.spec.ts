//uncomment testMatch: '**/*.spec.ts', in playwright.config.ts to run only test-1.spec.ts
import { test, expect} from '@playwright/test';

test('Example test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('John');

  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Please enter a valid email address').click();
});