import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';
import { ProductsPage } from '../../../helpers/pageObjects/productsPage';
import { RegistrarUsuario,cargarDatos } from '../../../helpers/utils/registrarUsuario';
import { CompletarPago } from '../../../helpers/utils/completarPago';

test.describe.serial('Test realizados por Leandro Rodriguez', { tag: ['@Leandro', '@todos'] }, () => {
    const userHelper = new UserHelper();
    const productos12 = new ProductsPage().seleccionarProductocase12();
    test.beforeEach(async ({ page }) => {
        // Configura el bloqueador de anuncios antes de la navegación
        const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
        await blocker.enableBlockingInPage(page);
    });
    
    
  test('Test Case 14: Place Order: Register while Checkout', {tag:'@cu14'}, async ({ page }) => {
    // 1. Inicio del caso de uso número 14
    MensajesConsola.mensajeInicio('14');
    MensajesConsola.mensajeTitulo('Test Case 14: Place Order: Register while Checkout');
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('https://automationexercise.com/');
    // 3. Verify that home page is visible successfully
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    // 4. Add products to cart
    await page.getByRole('link', { name: 'Products' }).click();
    // 4.1 Iterar sobre el arreglo y agregar al carrito
    for (const producto of productos12) {
          await page.hover(producto.hover);
          await page.locator(producto.locator).click();
          await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
          await page.getByRole('button', { name: 'Continue Shopping' }).click();
    }
    // 5. Click 'Cart' button
    await page.getByRole('link', { name: 'Cart' }).click();
    // 6. Verify that cart page is displayed
    await expect(page.getByRole('link', { name: 'Cart' })).toBeVisible();
    await page.waitForTimeout(500);
    // 7. Click Proceed To Checkout
    await page.getByText('Proceed To Checkout').click();
    // 8. Click 'Register / Login' button
    await page.waitForTimeout(150); 
    await page.getByRole('link', { name: 'Register / Login' }).click();
    // 9. Fill all details in Signup and create account
    await RegistrarUsuario(page, userHelper, 2); 
    // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    await expect(page.locator('b')).toContainText('Account Created!');
    await page.getByRole('link', { name: 'Continue' }).click();
    // 11. Verify ' Logged in as username' at top
    await expect(page.locator('#header')).toContainText('Logged in as ' + userHelper.registrarUsuarioDto()[2].name);
    // 12. Click 'Cart' button
    await page.waitForTimeout(150); 
    await page.getByRole('link', { name: 'Cart' }).click();
    // 13. Click 'Proceed To Checkout' button
    await page.waitForTimeout(150); 
    await page.getByText('Proceed To Checkout').click();
    // 14. Verify Address Details and Review Your Order
    // 15. Enter description in comment text area and click 'Place Order'
    // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 17. Click 'Pay and Confirm Order' button
    await CompletarPago(page)
    // 18. Verify success message 'Your order has been placed successfully!'
    await expect(page.locator('#form')).toContainText('Congratulations! Your order has been confirmed!');
    await page.getByRole('link', { name: 'Continue' }).click();
    // 19. Click 'Delete Account' button
    await page.getByRole('link', { name: 'Delete Account' }).click();
    // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    await expect(page.locator('b')).toContainText('Account Deleted!');
    await page.getByRole('link', { name: 'Continue' }).click();
  });


  test('Test Case 15: Place Order: Register before Checkout', {tag:'@cu15'}, async ({ page }) => {
    // 1. Inicio del caso de uso número 15
    MensajesConsola.mensajeInicio('15');
    MensajesConsola.mensajeTitulo('Test Case 15: Place Order: Register before Checkout');
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('https://automationexercise.com/');
    // 3. Verify that home page is visible successfully
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    // 4. Click 'Signup / Login' button
    await page.locator('li').filter({ hasText: 'Signup / Login' }).click();
    // 5. Fill all details in Signup and create account
    await RegistrarUsuario(page, userHelper, 2);
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    await expect(page.locator('b')).toContainText('Account Created!');
    await page.getByRole('link', { name: 'Continue' }).click();
    // 7. Verify ' Logged in as username' at top
    await expect(page.locator('#header')).toContainText('Logged in as ' + userHelper.registrarUsuarioDto()[2].name);
    // 8. Add products to cart
    await page.getByRole('link', { name: 'Products' }).click();
    // 8.1 Iterar sobre el arreglo y agregar al carrito
    for (const producto of productos12) {
          await page.hover(producto.hover);
          await page.locator(producto.locator).click();
          await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
          await page.getByRole('button', { name: 'Continue Shopping' }).click();
    }
    // 9. Click 'Cart' button
    await page.getByRole('link', { name: 'Cart' }).click();
    // 10. Verify that cart page is displayed
    await expect(page.getByRole('link', { name: 'Cart' })).toBeVisible();
    // 11. Click Proceed To Checkout
    await page.getByText('Proceed To Checkout').click();
    // 12. Verify Address Details and Review Your Order
    // 13. Enter description in comment text area and click 'Place Order'
    // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 15. Click 'Pay and Confirm Order' button
    await page.waitForTimeout(1000);
    await CompletarPago(page)
    // 16. Verify success message 'Your order has been placed successfully!'
    await expect(page.locator('#form')).toContainText('Congratulations! Your order has been confirmed!');
    // 17. Click 'Delete Account' button
    await page.getByRole('link', { name: 'Delete Account' }).click();
    // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    await expect(page.locator('b')).toContainText('Account Deleted!');
    await page.getByRole('link', { name: 'Continue' }).click();
  });

  test('Test Case 16: Place Order: Login before Checkout', {tag:'@cu16'}, async ({ page }) => {
    // paso auxiliar Crear cuenta y logout
    await cargarDatos(page, userHelper, 2);
    // 1. Inicio del caso de uso número 16
    MensajesConsola.mensajeInicio('16');
    MensajesConsola.mensajeTitulo('Test Case 16: Place Order: Login before Checkout');
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('https://automationexercise.com/');
    // 3. Verify that home page is visible successfully
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    // 4. Click 'Signup / Login' button
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    // 5. Fill email, password and click 'Login' button
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('prueba.elleo@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('test12345678');
    await page.getByRole('button', { name: 'Login' }).click();
    // 6. Verify 'Logged in as username' at top
    await expect(page.locator('#header')).toContainText('Logged in as ' + userHelper.registrarUsuarioDto()[2].name);
    // 7. Add products to cart
    await page.getByRole('link', { name: 'Products' }).click();
    // 7.1 Iterar sobre el arreglo y agregar al carrito
     for (const producto of productos12) {
        await page.hover(producto.hover);
        await page.locator(producto.locator).click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
     }
    // 8. Click 'Cart' button
    await page.getByRole('link', { name: 'Cart' }).click();
    // 9. Verify that cart page is displayed
    await expect(page.getByRole('link', { name: 'Cart' })).toBeVisible();
    // 10. Click Proceed To Checkout
    await page.getByText('Proceed To Checkout').click();
    // 11. Verify Address Details and Review Your Order
    // 12. Enter description in comment text area and click 'Place Order'
    // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 14. Click 'Pay and Confirm Order' button
    await CompletarPago(page)
    // 15. Verify success message 'Your order has been placed successfully!'
    await expect(page.locator('#form')).toContainText('Congratulations! Your order has been confirmed!');
    // 16. Click 'Delete Account' button
    await page.getByRole('link', { name: 'Delete Account' }).click();
    // 17. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    await expect(page.locator('b')).toContainText('Account Deleted!');
    await page.getByRole('link', { name: 'Continue' }).click();
  });

});