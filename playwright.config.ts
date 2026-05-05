import { defineConfig } from '@playwright/test';



export default defineConfig({

  fullyParallel: true, // раскомментируй, если нужно запускать тесты параллельно 
  retries: 2,
  testDir: './tests',
  testMatch: '**/*.@(test|spec).ts',
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // headless: false,        // раскомментируй, если нужно видеть браузер
    launchOptions: { 
      slowMo: 1000 
    },
  },

  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
});
