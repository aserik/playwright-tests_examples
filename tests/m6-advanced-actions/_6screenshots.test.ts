import { test, expect } from '@playwright/test';

test('Screenshot test', async ({ page }) => {
  
  await page.goto('/');

  await page.getByRole('button', { name: 'Register' }).click();

  // Простой скриншот
  await page.screenshot({
    path: 'screenshots/screenshot.png',
  });

  // Скриншот всей страницы
  await page.screenshot({
    path: 'screenshots/screenshot-advanced.png',
    fullPage: true,
  });

  // Скриншот с маскировкой элемента
  await page.screenshot({
    path: 'screenshots/screenshot-masked.png',
    fullPage: true,
    mask: await page.getByTestId('location').all(),
  });

  // Проверка
  await expect(page.locator('.invalid-feedback')).toHaveCount(3);

});