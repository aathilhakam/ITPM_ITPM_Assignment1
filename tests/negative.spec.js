const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 - Unit of measurement formatting issue 1', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Ippo current illathathunaala naanga room-la irukka mudiyama terrace-ku porom.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('current room terrace');

  expect(value).toContain('கரண்ட்');
  expect(value).toContain('ரூம்'); 
  expect(value).toContain('டெர்ரஸ்'); 
}); 

test('Neg_Fun_0001 - Unit of measurement formatting issue 2', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('instagram la like potten');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('instagram like');

  expect(value).toContain('இன்ஸ்டாகிராம்');
  expect(value).toContain('லைக்'); 
}); 

test('Neg_Fun_0001 - Unit of measurement formatting issue 3', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('mouse ondruin price Rs.2000');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('mouse price Rs.2000');
  expect(value).toContain('மவுசு');
  expect(value).toContain('ப்ரிஸ்');
  expect(value).toContain('ரஸ்.௨௦௦௦');
});

test('Neg_Fun_0001 - Unit of measurement formatting issue 4', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Pasum paal 1L vaanganum');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('1L');
  expect(value).toContain('௧ல்');  
});

test('Neg_Fun_0001 - Unit of measurement formatting issue 5', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Unnoda office location enga?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('office location');
  expect(value).toContain('ஆபீஸ்');
  expect(value).toContain('லொகேஷன்'); 
}); 

test('Neg_Fun_0001 - Unit of measurement formatting issue 6', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('756850512');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('756850512');
  expect(value).toContain('௭௫௬௮௫௦௫௧௨');
});

test('Neg_Fun_0001 - Unit of measurement formatting issue 7', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('WhatsApp la message anuppinen');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('WhatsApp message');
  expect(value).toContain('வாட்ஸாப்ப்');
  expect(value).toContain('மெசேஜ்'); 
}); 

test('Neg_Fun_0001 - Unit of measurement formatting issue 8', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('naan pirantha thihathi 2002/12/13');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('2002/12/13');
  expect(value).toContain('௨௦௦௨/௧௨/௧௩'); // Adjust to ensure this is the correct value
});


test('Neg_Fun_0001 - Unit of measurement formatting issue 9', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Naan 30‑01‑2026 la Chennai poganum nu plan panninen. Flight 06:30 AM la start aagum. Airport ku 2 hours munnaadu reach pannalam nu check panninen. Engeyo 3 kg sugar and 2 liters milk kooda vaangi ready panninen. Weather report 15‑01‑2026 ku 28°C to 32°C nu solluthu. Chennai la evening 05:00 PM ku 60% humidity irukum nu predict pannirukanga. Train la travel panna naaluku 5 km walk pannitu bus ku join panninen. School opening 01‑06‑2026 ku irukku, so children kku uniform measurements 34 inches chest, 28 inches waist, 36 inches length nu check panninen. Office ku new chair order panninen, adhu 1.2 meters height and 0.6 meters width irukum. Room la paint finish 25 liters color paint vaithirukkom, wall height 3 meters, length 5 meters. 18‑01‑2026 ku doctor appointment irukku, time 10:30 AM. Monthly electricity meter reading 250 kWh irundhadhu, gas cylinder 12 kg remaining irundhadhu. Naan next week la library visit panninen, distance 2.5 km walk panni reach panninen.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();
}); 

test('Neg_Fun_0001 - Unit of measurement formatting issue 10', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Enaku 12kg mavu thaanga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('12kg');
  expect(value).toContain('௧௨க்க்');
});
