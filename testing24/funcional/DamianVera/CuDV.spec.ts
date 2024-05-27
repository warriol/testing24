import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';
import { verificarInicioDeSesion } from '../../../helpers/utils/iniciarSesion';
import { ProductsPage } from '../../../helpers/pageObjects/productsPage';
import { RegistrarUsuario } from '../../../helpers/utils/registrarUsuario';

test.describe('Test realizados por Damian', {tag: ['@Damian', '@todos']}, () => {

  // datos para la creación de usuarios
  const userHelper = new UserHelper();
  // Arreglo de productos a verificar
  const productos = new ProductsPage().seleccionarProducto();
  // Configurar el bloqueador de anuncios
  test.beforeEach(async ({ page }) => {
      // Configura el bloqueador de anuncios antes de la navegación
      const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
      await blocker.enableBlockingInPage(page);
  });
  //Case 3

  test('Test Case 3', {tag:'@cu03'}, async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.locator('#header')).toContainText('Home');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('TestProyectoLatu2024@hotmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('8747@reP!-o.');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');
  });


  //Case 4

  test('Test Case 4', {tag:'@cu04'}, async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('Damian');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('damivera48@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.getByText('Mr.').click();
    await page.getByLabel('Name *', { exact: true }).click();
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('123456');
    await page.locator('#days').selectOption('3');
    await page.locator('#months').selectOption('12');
    await page.locator('#years').selectOption('2001');
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Damian');
    await page.getByLabel('Last name *').click();
    await page.getByLabel('Last name *').fill('Vera');
    await page.getByLabel('Company', { exact: true }).click();
    await page.getByLabel('Company', { exact: true }).fill('DamianLTDA');
    await page.getByLabel('Address * (Street address, P.').click();
    await page.getByLabel('Address * (Street address, P.').fill('elBarto 2234');
    await page.getByLabel('Address 2').click();
    await page.getByLabel('Country *').selectOption('New Zealand');
    await page.getByLabel('State *').click();
    await page.getByLabel('State *').fill('zealand');
    await page.getByLabel('City *').click();
    await page.getByLabel('City *').fill('Torque');
    await page.locator('#zipcode').click();
    await page.locator('#zipcode').fill('22412');
    await page.getByLabel('Mobile Number *').click();
    await page.getByLabel('Mobile Number *').fill('35322');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.getByRole('link', { name: 'Continue' }).click();

    //lo anterior es la creacion de usuario
    await page.goto('https://automationexercise.com/');
    await expect(page.locator('#header')).toContainText('Home');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('damivera48@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#header')).toContainText('Logged in as Damian');
    await page.getByRole('link', { name: ' Logout' }).click();
    await expect(page.locator('#form')).toContainText('Login to your account');
  });

  //Case 5 puedo hacer un helper que una la creacion del usuario para el caso 4 con el 5

  test('Test Case 5', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.locator('#form')).toContainText('New User Signup!');
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('Damian');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('damivera48@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await expect(page.locator('#form')).toContainText('Email Address already exist!');
  });

  //Case 6
  test('Test Case 6', async ({ page }) => {
      await page.goto('https://automationexercise.com/');
      await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
      await page.getByRole('link', { name: ' Contact us' }).click();
      await expect(page.locator('#contact-page')).toContainText('Get In Touch');
      await page.getByPlaceholder('Name').click();
      await page.getByPlaceholder('Name').fill('damian');
      await page.getByPlaceholder('Email', { exact: true }).click();
      await page.getByPlaceholder('Email', { exact: true }).fill('damivera48@gmail.com');
      await page.getByPlaceholder('Subject').click();
      await page.getByPlaceholder('Subject').fill('testing');
      await page.getByPlaceholder('Your Message Here').click();
      await page.getByPlaceholder('Your Message Here').fill('testeando la pagina para el curso de testing');
      await page.locator('input[name="upload_file"]').click();
      await page.locator('input[name="upload_file"]').setInputFiles('Documento de Modelo de datos.docx.pdf');
      await expect(page.locator('#contact-page')).toContainText('Success! Your details have been submitted successfully.');
      await page.getByRole('link', { name: ' Home' }).click();
      await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
    });

  //Case 7
  test('Test Case 7', async ({ page }) => {
      await page.goto('https://automationexercise.com/');
      await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
      await page.getByRole('link', { name: ' Test Cases' }).click();
      await page.frameLocator('iframe[name="aswift_6"]').getByLabel('Close ad').click();
      await expect(page.locator('b')).toBeVisible();
      await expect(page.locator('span')).toContainText('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:');
    });

  //Case 8

  test('Test Case 8', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    await expect(page.locator('.product-overlay').first()).toBeVisible();
    await expect(page.locator('body')).toContainText('All Products');

    await page.locator('.choose > .nav > li > a').first().click();
    await page.locator('.product-overlay').first().click();
    await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
    await expect(page.getByText('Category: Women > Tops')).toBeVisible();
    await expect(page.getByText('Rs.')).toBeVisible();
    await expect(page.getByText('Availability: In Stock')).toBeVisible();
    await expect(page.getByText('Condition: New')).toBeVisible();
    await expect(page.getByText('Brand: Polo')).toBeVisible();
  });

  //Case 9
  test('Test Case 9', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    await expect(page.locator('body')).toContainText('All Products');
    await page.getByPlaceholder('Search Product').click();
    await page.getByPlaceholder('Search Product').fill('Fancy Green Top');
    await page.getByRole('button', { name: '' }).click();
    await expect(page.getByText('Rs. 700 Fancy Green Top Add').nth(1)).toBeVisible();
    await expect(page.locator('body')).toContainText('Fancy Green Top');
  });

  //Case 10

  test('Test Case 10', async ({ page }) => {
      await page.goto('https://automationexercise.com/');
      await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
      await expect(page.locator('#footer')).toContainText('Subscription');
      await page.getByPlaceholder('Your email address').click();
      await page.getByPlaceholder('Your email address').fill('elPepeSape2024@gmail.com');
      await page.getByRole('button', { name: '' }).click();
      await page.getByPlaceholder('Your email address').click();
      await expect(page.locator('#success-subscribe')).toContainText('You have been successfully subscribed!');
    });

});