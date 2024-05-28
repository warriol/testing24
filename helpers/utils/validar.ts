
const { expect } = require('@playwright/test');



export async function clickContactUs(page) {
    await page.getByRole('link', { name: ' Contact us' }).click();
}

export async function clickTestCases(page) {
    await page.getByRole('link', { name: ' Test Cases' }).click();
}

export async function home(page) {
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
}
export async function clickProducts(page){
    await page.getByRole('link', { name: ' Products' }).click();
}

export async function borrarCuentaRegistro(page,userHelper, N_User = 0) 
{
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(await userHelper.registrarUsuarioDto()[N_User].email);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(await userHelper.registrarUsuarioDto()[N_User].password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#header')).toContainText('Logged in as ' + await userHelper.registrarUsuarioDto()[N_User].name);
    // 21. Click 'Delete Account' button
    await page.getByRole('link', { name: 'Delete Account' }).click();
    // 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    await expect(page.locator('b')).toContainText('Account Deleted!');
    await page.getByRole('link', { name: 'Continue' }).click();
}