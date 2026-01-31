const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Arulmigu kaalai vanakkam.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Arulmigu kaalai vanakkam.');
});