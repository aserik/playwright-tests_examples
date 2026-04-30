import { test, expect, chromium } from '@playwright/test';

test('Config of Browser / Context', async ({ }, testInfo) => {
  testInfo.setTimeout(60000);

  // Запускаем браузер вручную
  const browser = await chromium.launch({
    headless: false,
    downloadsPath: 'my-downloads',
  });

  const context = await browser.newContext({
    baseURL: 'https://www.google.com',
    timezoneId: 'Europe/Moscow',
    locale: 'ru-RU',
    geolocation: { longitude: 37.6173, latitude: 55.7558 },
    viewport: { width: 1280, height: 720 },
    javaScriptEnabled: true,
    acceptDownloads: true,
  });

  const page = await context.newPage();

  await page.goto('/');

  // ← Здесь безопасно работать
  await page.getByRole('button', { name: 'Принять все' }).click();

  // Не забудь закрыть в конце!
  await context.close();
  await browser.close();
});
