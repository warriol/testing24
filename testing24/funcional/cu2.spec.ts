import { test, expect } from '@playwright/test';

test('Test Case 2: Login User with correct email and password', {tag:'@Todos'}, async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await expect(page.locator('#form')).toContainText('Login to your account');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('warriol.game@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('test12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#header')).toContainText('Logged in as testing012024');
  await page.getByRole('link', { name: 'Delete Account' }).click();
  const frames = page.frames();
  if (frames.length > 0) {
    // Si hay algún frame, cerrarlo
    for (const frame of frames) {
      await frame.waitForLoadState('domcontentloaded');
      const closeAdButton = await frame.$('text=Close ad');
      if (closeAdButton) {
        await closeAdButton.click();
      }
    }
  }
  await expect(page.locator('b')).toContainText('Account Deleted!');
});