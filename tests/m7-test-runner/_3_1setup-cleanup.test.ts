import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  console.log('BeforeEach: Страница открыта');
});

test('Test 1', async ({ page }) => {
  console.log('Test 1');
  await expect(page.getByRole('button')).toHaveCount(3);
});

test('Test 2', async ({ page }) => {
  console.log('Test 2');
  await expect(page.getByRole('checkbox')).toHaveCount(1);
});

// ✅ Правильная очистка после КАЖДОГО теста
test.afterEach(async ({ page }) => {
  console.log('AfterEach: Очистка после теста');
  // Здесь можно очистить localStorage, cookies и т.д.
  await page.evaluate(() => localStorage.clear());
  await page.context().clearCookies();
});

// Если очень нужно сделать что-то ОДИН раз после ВСЕХ тестов:
test.afterAll(async ({ browser }) => {
  console.log('AfterAll: Финальная очистка');
  const context = await browser.newContext();
  const page = await context.newPage();
  // ... делаешь что нужно
  await context.close();
});