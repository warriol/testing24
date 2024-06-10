const { expect } = require('@playwright/test');

export async function BorrarUsuario ( page, userHelper, N_User = 0 ) {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(userHelper.registrarUsuarioDto()[N_User].email);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(userHelper.registrarUsuarioDto()[N_User].password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  console.log('Usuario eliminado correctamente, fin del caso de borrar cuenta.');
};