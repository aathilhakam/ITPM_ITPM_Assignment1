const { test, expect } = require('@playwright/test');

// 1. Convert a short daily greeting phrase
test('Pos_Fun_0001 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Arulmigu kaalai vanakkam.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Arulmigu kaalai vanakkam.');
});

// 2. Convert a short sentence
test('Pos_Fun_0002 - short sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Naan chella pogiren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Naan chella pogiren');
});

// 3. Convert a short request phrase
test('Pos_Fun_0003 - short request phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Orucup thanneer thara mudiyuma?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Orucup thanneer thara mudiyuma?');
});

// 4. Convert an Imperative word
test('Pos_Fun_0004 - Imperative word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Munnadi vandhu sariyaga utkaaru');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Munnadi vandhu sariyaga utkaaru');
});

// 5. Convert a compound sentence
test('Pos_Fun_0005 - compound sentences', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Enakku kaichel kaaranamak naan vealaiku poyavillai');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Enakku kaichel kaaranamak naan vealaiku poyavillai');
});

// 6. Convert a complex sentence
test('Pos_Fun_0006 - complex sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Nee ponal naan poividuven');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Nee ponal naan poividuven');
});

// 7. Convert a positive sentence phrase
test('Pos_Fun_0007 - positive sentence phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Nee athai suththamak seithai');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Nee athai suththamak seithai');
});

// 8. Convert an informal word
test('Pos_Fun_0008 - informal word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Ithai vandhu senju thada');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Ithai vandhu senju thada');
});

// 9. Convert a daily language word
test('Pos_Fun_0009 - daily language word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Naan naalakku punthodam poven');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Naan naalakku punthodam poven');
});

// 10. Convert a slang phrase word
test('Pos_Fun_0010 - slang phrase word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Naan kinaththuku poyee thanni edukka poren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Naan kinaththuku poyee thanni edukka poren');
});

// 11. Convert a negative pattern word
test('Pos_Fun_0011 - negative pattern word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Enakku andha prachchinai patri edhuvum theriyadhu.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Enakku andha prachchinai patri edhuvum theriyadhu.');
});

// 12. Convert a negative pattern word
test('Pos_Fun_0012 - negative pattern word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('enakku atha paththi edhuvum theriyathu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('enakku atha paththi edhuvum theriyathu');
});

// 13. Convert a multi-line word
test('Pos_Fun_0013 - multi-line word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Enakku oru sandhippu irukuthu, naan selven');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Enakku oru sandhippu irukuthu, naan selven');
});

// 14. Convert a word with punctuation
test('Pos_Fun_0014 - word with punctuation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Aiyo! Avan oru nalla munnani thalaivar');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Aiyo! Avan oru nalla munnani thalaivar');
});

// 15. Convert a multiple space word
test('Pos_Fun_0015 - multiple space word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Naan cinema paarka poren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Naan cinema paarka poren');
});

// 16. Convert a plural word
test('Pos_Fun_0016 - plural word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Avargal payanam seitharkal');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Avargal payanam seitharkal');
});

// 17. Convert a response word
test('Pos_Fun_0017 - response word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Sari naan paarthuk kolgiren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Sari naan paarthuk kolgiren');
});

// 18. Convert a greeting word
test('Pos_Fun_0018 - greeting word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Ungaludaya vaazhkai eppadi?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Ungaludaya vaazhkai eppadi?');
});

// 19. Convert a repeated word
test('Pos_Fun_0019 - repeated word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Enakku konjam konjam Ninaivirukinrathu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Enakku konjam konjam Ninaivirukinrathu');
});

// 20. Convert a word without space
test('Pos_Fun_0020 - word without space', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Avanukku ellam avan solgiraan');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  
  // Adjust the check to remove potential trailing spaces
  expect(value.trim()).not.toContain('Avanukku ellam avan solgiraan');
});

// 21. Convert a paragraph word
test('Pos_Fun_0021 - paragraph word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Netru nadaipettre kalachara vizhaavil pothumakkal, kalaignargal matrum thannaarvalargal kalandhu kondu sirandha klai nigazhchigalai paarthu, anaitthu nigazhchigalin dhanichirappai');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Netru nadaipettre kalachara vizhaavil pothumakkal');
});

// 22. Convert a word with name
test('Pos_Fun_0022 - word with name', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Enakku puthiya puththakangalai padippadhu mikavum pidikkum');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Enakku puthiya puththakangalai padippadhu mikavum pidikkum');
});

// 23. Convert Greeting conversion
test('Pos_Fun_0023 - Greeting conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Vanakkam, ungal arokkiyam eppadi irukkindrathu?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Vanakkam, ungal arokkiyam eppadi irukkindrathu?');
});

// 24. Convert Informal phrasing
test('Pos_Fun_0024 - Informal phrasing', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Deyi, romba thaamatham aaguthu, va');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Deyi, romba thaamatham aaguthu, va');
}); 
