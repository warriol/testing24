const { expect } = require('@playwright/test');

export async function verificarInicioDeSesion(page, userHelper) {
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(await userHelper.getCorreo());
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(await userHelper.getPassword());
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#header')).toContainText('Logged in as ' + await userHelper.getUser());
}