<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
=======
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
>>>>>>> 00fecffc7b2cd0906465ab73bad933957da488a1

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
<<<<<<< HEAD
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
=======
const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 1000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
>>>>>>> 00fecffc7b2cd0906465ab73bad933957da488a1
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
<<<<<<< HEAD
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
=======
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
>>>>>>> 00fecffc7b2cd0906465ab73bad933957da488a1

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
<<<<<<< HEAD
      use: { ...devices['Desktop Chrome'] },
=======
      use: {
        headless: false,
        video: 'on',
        screenshot: 'only-on-failure',
        ...devices['Desktop Chrome']
      },
>>>>>>> 00fecffc7b2cd0906465ab73bad933957da488a1
    },

    {
      name: 'firefox',
<<<<<<< HEAD
      use: { ...devices['Desktop Firefox'] },
=======
      use: {
        headless:false,
        video: 'on',
        screenshot: 'only-on-failure',
        ...devices['Desktop Firefox'],
      },
>>>>>>> 00fecffc7b2cd0906465ab73bad933957da488a1
    },

    {
      name: 'webkit',
<<<<<<< HEAD
      use: { ...devices['Desktop Safari'] },
    },
=======
      use: {
         headless:false,
         video: 'on',
        screenshot: 'only-on-failure',
        ...devices['Desktop Safari'],
      },

    },

    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     headless:false,
    //     ...devices['Desktop Edge'],
    //      channel: 'msedge' }, // or 'msedge-dev'
    // },

     /* Test against mobile viewports. */
     {
      name: 'Mobile Chrome',
      use: {
        headless:true,
        video: 'on',
        screenshot: 'only-on-failure',
         ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: {
        headless:false,
        video: 'on',
        screenshot: 'only-on-failure',
         ...devices['iPhone 12'] },
    },
    /* Test against branded browsers. */
    // {
    //   name: 'Google Chrome',
    //   use: {headless:false, ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    // },
>>>>>>> 00fecffc7b2cd0906465ab73bad933957da488a1

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
<<<<<<< HEAD
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
=======
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
>>>>>>> 00fecffc7b2cd0906465ab73bad933957da488a1
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
<<<<<<< HEAD
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
=======
    //   use: {
    //     headless:false,  
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
>>>>>>> 00fecffc7b2cd0906465ab73bad933957da488a1
