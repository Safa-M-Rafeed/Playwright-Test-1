import { test, expect } from '@playwright/test';


const outputLocator = '#transliterateTextarea';

test('Pos_UI_0001 - na ooruku poren (Real-time)', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('textarea');
  
  await page.type('textarea', 'na ooruku poren', { delay: 300 });
  await page.waitForTimeout(4000);
  
  const output = page.locator(outputLocator);
  await expect(output).toBeVisible();
  await expect(output).not.toBeEmpty();
  await page.screenshot({ path: 'test-results/proof-ui-0001.png', fullPage: true });
});