import { test, expect } from '@playwright/test';

test('test: borrar cuenta', {tag:'@Todos'}, async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('prueba.warriol@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('test12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});