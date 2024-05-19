const { expect } = require('@playwright/test');

export async function RegistrarUsuario(page, userHelper) {
    await expect(page.locator('#form')).toContainText('New User Signup!');
        await page.getByPlaceholder('Name').click();
        await page.getByPlaceholder('Name').fill(userHelper.registrarUsuarioDto()[0].name);
        await page.getByPlaceholder('Name').press('Tab');
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(userHelper.registrarUsuarioDto()[0].email);
        await page.getByRole('button', { name: 'Signup' }).click();
        await expect(page.locator('#form')).toContainText('Enter Account Information');
        await page.getByLabel(userHelper.registrarUsuarioDto()[0].title).check();
        await page.getByLabel('Password *').click();
        await page.getByLabel('Password *').fill(userHelper.registrarUsuarioDto()[0].password);
        await page.locator('#days').selectOption(userHelper.registrarUsuarioDto()[0].day);
        await page.locator('#months').selectOption(userHelper.registrarUsuarioDto()[0].month);
        await page.locator('#years').selectOption(userHelper.registrarUsuarioDto()[0].year);
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from').check();
        await page.getByLabel('First name *').click();
        await page.getByLabel('First name *').fill(userHelper.registrarUsuarioDto()[0].fName);
        await page.getByLabel('First name *').press('Tab');
        await page.getByLabel('Last name *').fill(userHelper.registrarUsuarioDto()[0].lName);
        await page.getByLabel('Last name *').press('Tab');
        await page.getByLabel('Company', { exact: true }).fill(userHelper.registrarUsuarioDto()[0].company);
        await page.getByLabel('Address * (Street address, P.').click();
        await page.getByLabel('Address * (Street address, P.').fill(userHelper.registrarUsuarioDto()[0].address);
        await page.getByLabel('Address 2').click();
        await page.getByLabel('Address 2').fill(userHelper.registrarUsuarioDto()[0].address2);
        await page.getByLabel('Country *').selectOption(userHelper.registrarUsuarioDto()[0].country);
        await page.getByLabel('State *').click();
        await page.getByLabel('State *').fill(userHelper.registrarUsuarioDto()[0].state);
        await page.getByLabel('City *').click();
        await page.getByLabel('City *').fill(userHelper.registrarUsuarioDto()[0].city);
        await page.locator('#zipcode').click();
        await page.locator('#zipcode').fill(userHelper.registrarUsuarioDto()[0].zip);
        await page.getByLabel('Mobile Number *').click();
        await page.getByLabel('Mobile Number *').fill(userHelper.registrarUsuarioDto()[0].mobile);
        await page.getByRole('button', { name: 'Create Account' }).click();
}