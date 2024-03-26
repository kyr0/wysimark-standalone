import { test, expect } from '@playwright/test';

/*
test('works in CommonJS with React', async ({ page }) => {
  await page.goto('index-react-cjs.html');
  const benchElement = await page.waitForSelector('#bench');

  await expect(await benchElement.textContent()).toEqual('Wysimark is loaded');
});
*/

/* TODO: someone needs to implement vite server and ship the file over network 
test('works with ESM', async ({ page }) => {
  await page.goto('index-javascript-esm.html');
  const benchElement = await page.waitForSelector('#bench');

  await expect(await benchElement.textContent()).toEqual('Wysimark is loaded');
});
*/