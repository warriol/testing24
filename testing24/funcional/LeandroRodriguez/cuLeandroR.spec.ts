import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';
import { ProductsPage } from '../../../helpers/pageObjects/productsPage';
import { RegistrarUsuario,cargarDatos } from '../../../helpers/utils/registrarUsuario';
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
    await page.waitForTimeout(150); 
    await page.getByRole('link', { name: ' Men' }).click();
    await page.waitForTimeout(150); 
    await page.getByRole('link', { name: 'Tshirts' }).click();
    // 8. Verify that user is navigated to that category page
    await expect(page.getByRole('heading', { name: 'Men - Tshirts Products' })).toBeVisible();
  });


});