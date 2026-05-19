import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
    console.log("TS spec run properly - Pass");

});

//Skip Test
test.skip('Test Skipped', async ({ page })=> {
    // This test is skipped
});

// Only run this test
test.only('focused test', async ({ page }) => {
    // Only this test runs
});

//mark as failing
test.fail('expected to fail', async ({ page }) => {
    // Test is expected to fail
});

// Slow test (3x timeout)
// test.slow('Slow Test', async ({ page } : { page: any }) => {
//     // Has extended timeout
// });

test('my test', ({ browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on the Firefox fix');
});


// Conditional skip
test('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});

test('conditional1', async ({page, browserName})=>{
test.skip(browserName === 'firefox', 'supported in chrome');
});