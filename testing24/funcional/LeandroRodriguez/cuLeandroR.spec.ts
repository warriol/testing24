import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';
import { ProductsPage } from '../../../helpers/pageObjects/productsPage';
import { RegistrarUsuario } from '../../../helpers/utils/registrarUsuario';
import { CompletarPago } from '../../../helpers/utils/completarPago';

test.describe('Test realizados por Leandro Rodriguez', { tag: ['@Leandro', '@todos'] }, () => {
    const userHelper = new UserHelper();
    const productos12 = new ProductsPage().seleccionarProductocase12();
    test.beforeEach(async ({ page }) => {
        // Configura el bloqueador de anuncios antes de la navegación
        const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
        await blocker.enableBlockingInPage(page);
    });
    
    
test('Test Case 11: Verify Subscription in Cart page', {tag:'@cu11'}, async ({ page }) => {
  // 1. Inicio del caso de uso número 11
  MensajesConsola.mensajeInicio('11');
  MensajesConsola.mensajeTitulo('Verify Subscription in Cart page');
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');
  // 3. Verify that home page is visible successfully
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  // 4. Click 'Cart' button
  await page.getByRole('link', { name: 'Cart' }).click();
  // 5. Scroll down to footer
  // 6. Verify text 'SUBSCRIPTION'
  await expect(page.getByRole('heading')).toContainText('Subscription');
  // 7. Enter email address in input and click arrow button
  await page.getByPlaceholder('Your email address').fill('email8@gmail.com');
  await page.getByRole('button', { name: '' }).click();
  // 8. Verify success message 'You have been successfully subscribed!' is visible
  await expect(page.locator('#success-subscribe')).toContainText('You have been successfully subscribed!');
});


test('Test Case 12: Add Products in Cart', {tag:'@cu12'}, async ({ page }) => {
  // 1. Inicio del caso de uso número 12
  MensajesConsola.mensajeInicio('12');
  MensajesConsola.mensajeTitulo('Add Products in Cart');
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');
  // 3. Verify that home page is visible successfully
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  // 4. Click 'Products' button
  await page.getByRole('link', { name: 'Products' }).click();
  // 5. Hover over first product and click 'Add to cart'
  let posicionExacta = productos12[0];
    await page.hover(posicionExacta.hover);
    await page.locator(posicionExacta.locator).click();
    await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
  // 6. Click 'Continue Shopping' button
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
  // 7. Hover over second product and click 'Add to cart'
    posicionExacta = productos12[1];
    await page.hover(posicionExacta.hover);
    await page.locator(posicionExacta.locator).click();
    await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
  // 8. Click 'View Cart' button
  await page.getByRole('link', { name: 'View Cart' }).click();
  // 9. Verify both products are added to Cart
  await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' })).toBeVisible();
  await expect(page.getByRole('row', { name: 'Product Image Men Tshirt Men' })).toBeVisible();
  // 10. Verify their prices, quantity and total price
  await expect(page.getByText('Rs.').first()).toBeVisible();
  await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' }).getByRole('button')).toBeVisible();
  await expect(page.getByText('Rs.').nth(1)).toBeVisible();
  await expect(page.getByText('Rs.').nth(2)).toBeVisible();
  await expect(page.getByRole('row', { name: 'Product Image Men Tshirt Men' }).getByRole('button')).toBeVisible();
  await expect(page.getByText('Rs.').nth(3)).toBeVisible();
});

test('Test Case 13: Verify Product quantity in Cart', {tag:'@cu13'}, async ({ page }) => {
  // 1. Inicio del caso de uso número 13
  MensajesConsola.mensajeInicio('13');
  MensajesConsola.mensajeTitulo('Verify Product quantity in Cart');
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');
  // 3. Verify that home page is visible successfully
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  // 4. Click 'View Product' for any product on home page
  await page.locator('div:nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
  // 5. Verify product detail is opened
  await expect(page.getByRole('img', { name: 'ecommerce website products' }).nth(1)).toBeVisible();
  // 6. Increase quantity to 4
  await page.locator('#quantity').click();
  await page.locator('#quantity').fill('4');
  // 7. Click 'Add to cart' button
  await page.getByRole('button', { name: ' Add to cart' }).click();
  // 8. Click 'View Cart' button
  await page.getByRole('link', { name: 'View Cart' }).click();
  // 9. Verify that product is displayed in cart page with exact quantity
  await expect(page.locator('#product-2')).toContainText('4');
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
  // 7. Click Proceed To Checkout
  await page.getByText('Proceed To Checkout').click();
  // 8. Click 'Register / Login' button
  await page.getByRole('link', { name: 'Register / Login' }).click();
  // 9. Fill all details in Signup and create account
  await RegistrarUsuario(page, userHelper, 2); 
  // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await expect(page.locator('b')).toContainText('Account Created!');
  await page.getByRole('link', { name: 'Continue' }).click();
  // 11. Verify ' Logged in as username' at top
  await expect(page.locator('#header')).toContainText('Logged in as ' + userHelper.registrarUsuarioDto()[2].name);
  // 12. Click 'Cart' button
  await page.getByRole('link', { name: 'Cart' }).click();
  // 13. Click 'Proceed To Checkout' button
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
    // 1. Inicio del caso de uso número 16
    MensajesConsola.mensajeInicio('16');
    MensajesConsola.mensajeTitulo('Test Case 16: Place Order: Login before Checkout');
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('https://automationexercise.com/');
    // paso auxiliar Crear cuenta y logout
    await page.locator('li').filter({ hasText: 'Signup / Login' }).click();
    RegistrarUsuario(page, userHelper, 2);
    await page.getByRole('link', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
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


test('Test Case 17: Remove Products From Cart', {tag:'@cu17'}, async ({ page }) => {
   // 1. Inicio del caso de uso número 17
  MensajesConsola.mensajeInicio('17');
  MensajesConsola.mensajeTitulo('Test Case 17: Remove Products From Cart');
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
  // 7. Click 'X' button corresponding to particular product
  const nombreProducto = 'Blue Top';
  await page.locator(`#product-1:has-text("${nombreProducto}")`).getByRole('cell', { name: '' }).locator('a').click();
  // 8. Verify that product is removed from the cart
  const isProductInCart = await page.locator(`#cart:has-text("${nombreProducto}")`).count();
  expect(isProductInCart).toBe(0);
});
 

test('Test Case 18: View Category Products', {tag:'@cu18'}, async ({ page }) => {
  // 1. Inicio del caso de uso número 18
  MensajesConsola.mensajeInicio('18');
  MensajesConsola.mensajeTitulo('Test Case 18: View Category Products');
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');
  // 3. Verify that categories are visible on left side bar
  await expect(page.getByRole('heading', { name: 'Category' })).toBeVisible();
  // 4. Click on 'Women' category
  await page.getByRole('link', { name: ' Women' }).click();
  // 5. Click on any category link under 'Women' category, for example: Dress
  await page.getByRole('link', { name: 'Dress' }).click();
  // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
  await expect(page.locator('section')).toContainText('Women - Dress Products');
  // 7. On left side bar, click on any sub-category link of 'Men' category
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Tshirts' }).click();
  // 8. Verify that user is navigated to that category page
  await expect(page.getByRole('heading', { name: 'Men - Tshirts Products' })).toBeVisible();
});


});