import { test, expect } from '@playwright/test';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';
import { login } from '../../../helpers/utils/iniciarSesion';
import {home,clickProducts,borrarCuentaRegistro} from '../../../helpers/utils/validar';



import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';

test.describe('Test realizados por Damian', { tag: ['@Damian', '@todos'] }, () => {
  const userHelper = new UserHelper();
  const path = require('path');

  // Configurar el bloqueador de anuncios
  test.beforeEach(async ({ page }) => {
      // Configura el bloqueador de anuncios antes de la navegación
      const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
      await blocker.enableBlockingInPage(page);
  });

    test('Test Case 3', { tag: '@cu03' }, async ({ page }) => {
      // 1. Inicio del caso de uso número 3
      MensajesConsola.mensajeInicio('3');
      MensajesConsola.mensajeTitulo('usuario que inicia sesión con correo electrónico y contraseña incorrectos');
      // 2. Navigate to url 'http://automationexercise.com'
      await page.goto('https://automationexercise.com/');
      // 3. Verify that home page is visible successfully
      await expect(page.locator('#header')).toContainText('Home');
      // 4. Click on 'Signup / Login' button
      await page.getByRole('link', { name: ' Signup / Login' }).click();
      // 5. Verify 'Login to your account' is visible
      // 6. Enter incorrect email address and password
      // 7. Click 'login' button
      //Se realiza estos tres pasos con un helper de un usuario existente para obtener error de correo o passwar incorrecto
      await login(page, userHelper, true);
      // 8. Verify error 'Your email or password is incorrect!' is visible
      await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');
      MensajesConsola.mensajeFin('3');
    });

    test('Test Case 4', { tag: '@cu04'},  async ({ page }) => {
      // 1. Inicio del caso de uso número 4
      MensajesConsola.mensajeInicio('4');
      MensajesConsola.mensajeTitulo('Cerrar sesión de usuario');
      // 2. Navigate to url 'http://automationexercise.com'
      await page.goto('https://automationexercise.com/');
      // 3. Verify that home page is visible successfully
      await expect(page.locator('#header')).toContainText('Home');
      // 4. Click on 'Signup / Login' button
      await page.getByRole('link', { name: ' Signup / Login' }).click();
      // 5. Verify 'Login to your account' is visible
      // 6. Enter correct email address and password
      // 7. Click 'login' button
      await login(page, userHelper, false);
      // 8. Verify that 'Logged in as username' is visible
      await expect(page.locator('#header')).toContainText('Logged in as ' + await userHelper.getUser());
      // 9. Click 'Logout' button
      await page.getByRole('link', { name: ' Logout' }).click();
      //10. Verify that user is navigated to login page
      await expect(page.locator('#form')).toContainText('Login to your account');
      await home(page);
      MensajesConsola.mensajeFin('4');
    });

    test('Test Case 5', { tag: '@cu05' }, async ({ page }) => {
      // 1. Inicio del caso de uso número 6
      MensajesConsola.mensajeInicio('5');
      MensajesConsola.mensajeTitulo('registrar usuario con correo electrónico existente');
      // 2. Navigate to url 'http://automationexercise.com'
      await page.goto('https://automationexercise.com/');
      // 3. Verify that home page is visible successfully
      await expect(page.locator('#header')).toContainText('Home');
      // 4. Click on 'Signup / Login' button
      await page.getByRole('link', { name: ' Signup / Login' }).click();
      // 5. Verify 'New User Signup!' is visible
      await expect(page.locator('#form')).toContainText('New User Signup!');
      // 6. Enter name and already registered email address
      await page.getByPlaceholder('Name').click();
      await page.getByPlaceholder('Name').fill(await userHelper.getFName());
      await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(await userHelper.getCorreo());
      // 7. Click 'Signup' button
      await page.getByRole('button', { name: 'Signup' }).click();
      // 8. Verify error 'Email Address already exist!' is visible
      await expect(page.locator('#form')).toContainText('Email Address already exist!');
      MensajesConsola.mensajeFin('5');
    });

    test('Test Case 6',{ tag: '@cu06' }, async ({ page }) => {
      // 1. Inicio del caso de uso número 6               
      MensajesConsola.mensajeInicio('6');
      MensajesConsola.mensajeTitulo('Formulario de contacto');
      // 2. Navigate to url 'http://automationexercise.com'
      await page.goto('https://automationexercise.com/');
      // 3. Verify that home page is visible successfully
      await home(page);
      // 4. Click on 'Contact Us' button
      await page.getByRole('link', { name: ' Contact us' }).click();
      // 5. Verify 'GET IN TOUCH' is visible
      await expect(page.locator('#contact-page')).toContainText('Get In Touch');
      // 6. Enter name, email, subject and message
      await page.getByPlaceholder('Name').fill(await userHelper.getLName());
      await page.getByPlaceholder('Email', { exact: true }).fill(await userHelper.getCorreo());
      await page.getByPlaceholder('Subject').fill('testing');
      await page.getByPlaceholder('Your Message Here').fill('testeando la pagina para el curso de testing');
      //7. Upload file
      const filePath = path.relative(process.cwd(), path.join('testing24', 'funcional', 'Documento.pdf'));
      await page.locator('input[name="upload_file"]').setInputFiles(filePath);  
      //9. Click OK button
      // Manejar la alerta
      //La alerta debugiando no salia por esto se ase atrabes de comando
      page.once('dialog',  async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
      });
      await page.waitForTimeout(1000); //Si se ejecuta sin debug no se si es por velosidad se traba por eso el sleep
      
      await page.getByRole('button', { name: 'Submit' }).click();   
      
      // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
      await expect(page.locator('#contact-page')).toContainText('Success! Your details have been submitted successfully.');
      //11. Click 'Home' button and verify that landed to home page successfully
      await page.getByRole('link', { name: ' Home' }).click();
      await home(page);
      MensajesConsola.mensajeFin('6');    
    });

    test('Test Case 7', { tag: '@cu07' },async ({ page }) => {      
      // 1. Inicio del caso de uso número 7               
      MensajesConsola.mensajeInicio('7');
      MensajesConsola.mensajeTitulo('Verificar página de casos de prueba');
      // 2. Navigate to url 'http://automationexercise.com'
      await page.goto('https://automationexercise.com/');
      // 3. Verify that home page is visible successfully
      await home(page);
      // 4. Click on 'Test Cases' button
      await page.getByRole('link', { name: ' Test Cases' }).click();
      // 5. Verify user is navigated to test cases page successfully
      await expect(page.locator('b')).toBeVisible();
      await page.waitForTimeout(1000); //Sin un sleep por alguna rason la siguiente validacion habeses andaba y otras no
      await expect(page.locator('span')).toContainText('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:');
      
      MensajesConsola.mensajeFin('7');
    });

    test('Test Case 8',{ tag: '@cu08' }, async ({ page }) => {
      // 1. Inicio del caso de uso número 8               
      MensajesConsola.mensajeInicio('8');
      MensajesConsola.mensajeTitulo('Verificar todos los productos y página de detalles del producto');
      // 2. Navigate to url 'http://automationexercise.com'
      await page.goto('https://automationexercise.com/');
      // 3. Verify that home page is visible successfully
      await home(page);
      // 4. Click on 'Products' button
      await clickProducts(page);
      // 5. Verify user is navigated to ALL PRODUCTS page successfully
      await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
      // 6. The products list is visible
      await expect(page.getByText('All Products  Added! Your')).toBeVisible();
      // 7. Click on 'View Product' of first product
      // 8. User is landed to product detail page
      await page.locator('.choose > .nav > li > a').first().click();
      // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
      await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
      await expect(page.getByText('Category: Women > Tops')).toBeVisible();
      await expect(page.getByText('Rs.')).toBeVisible();
      await expect(page.getByText('Availability: In Stock')).toBeVisible();
      await expect(page.getByText('Condition: New')).toBeVisible();
      await expect(page.getByText('Brand: Polo')).toBeVisible();
      MensajesConsola.mensajeFin('8');
    });

    test('Test Case 9',{ tag: '@cu09' }, async ({ page }) => {
      // 1. Inicio del caso de uso número 9
      MensajesConsola.mensajeInicio('9');
      MensajesConsola.mensajeTitulo('producto de búsqueda');
      // 2. Navigate to url 'http://automationexercise.com'     
      await page.goto('https://automationexercise.com/');
      // 3. Verify that home page is visible successfully
      await home(page);
      // 4. Click on 'Products' button
      await clickProducts(page);
      // 5. Verify user is navigated to ALL PRODUCTS page successfully
      await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
      await expect(page.locator('body')).toContainText('All Products');
      //6. Enter product name in search input and click search button
      await page.getByPlaceholder('Search Product').fill('Fancy Green Top');
      await page.getByRole('button', { name: '' }).click();
      // 7. Verify 'SEARCHED PRODUCTS' is visible
      // 8. Verify all the products related to search are visible
      await expect(page.getByText('Rs. 700 Fancy Green Top Add').nth(1)).toBeVisible();
      await expect(page.locator('body')).toContainText('Fancy Green Top');
      MensajesConsola.mensajeFin('9');
    });

    test('Test Case 10', { tag: '@cu10' },async ({ page }) => {
      // 1. Inicio del caso de uso número 10 
      MensajesConsola.mensajeInicio('10');
      MensajesConsola.mensajeTitulo('verificar la suscripción en la página de inicio');
      // 2. Navigate to url 'http://automationexercise.com'
      await page.goto('https://automationexercise.com/');
      // 3. Verify that home page is visible successfully
      await home(page);
      // 4. Scroll down to footer
      // 5. Verify text 'SUBSCRIPTION'
      await expect(page.locator('#footer')).toContainText('Subscription');
      // 6. Enter email address in input and click arrow button
      await page.getByPlaceholder('Your email address').fill('elPepeSape2024@gmail.com');
      await page.getByRole('button', { name: '' }).click();
      // 7. Verify success message 'You have been successfully subscribed!' is visible
      await expect(page.locator('#success-subscribe')).toContainText('You have been successfully subscribed!');
      MensajesConsola.mensajeFin('10');
    });
});
