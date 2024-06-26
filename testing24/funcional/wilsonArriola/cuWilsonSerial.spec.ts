import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';
import { verificarInicioDeSesion } from '../../../helpers/utils/iniciarSesion';
import { ProductsPage } from '../../../helpers/pageObjects/productsPage';
import { RegistrarUsuario } from '../../../helpers/utils/registrarUsuario';
import { BorrarUsuario } from '../../../helpers/utils/borrarUsuario';


test.describe.serial('Test realizados por Wilson Arriola', {tag: ['@wilson', '@todos']}, () => {
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


    test('Test Case 23: Verify address details in checkout page', {tag:'@cu23'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 23
        MensajesConsola.mensajeInicio('23');
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('https://automationexercise.com/');
        // 3. Verify that home page is visible successfully
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        // 4. Click 'Signup / Login' button
        await page.getByRole('link', { name: 'Signup / Login' }).click();
        // 5. Fill all details in Signup and create account
        await RegistrarUsuario(page, userHelper);
        // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        await expect(page.locator('b')).toContainText('Account Created!');
        await page.getByRole('link', { name: 'Continue' }).click();
        // 7. Verify ' Logged in as username' at top
        await expect(page.locator('#header')).toContainText('Logged in as ' + userHelper.registrarUsuarioDto()[0].name);
            // 7.1. Click on 'Products' button
            await page.getByRole('link', { name: 'Products' }).click();
            // 7.2. Verify user is navigated to ALL PRODUCTS page successfully
            await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
            // 7.3. Enter product name in search input and click search button
            await page.getByPlaceholder('Search Product').click();
            await page.getByPlaceholder('Search Product').fill('blue');
            await page.getByRole('button', { name: '' }).click();
            // 7.4. Verify 'SEARCHED PRODUCTS' is visible
            await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
            // 7.5. Verify all the products related to search are visible
            // Iterar sobre el arreglo y verificar cada nombre de producto
            for (const producto of productos) {
                await expect(page.getByText(producto.nombre).nth(1)).toBeVisible();
            }
        // 8. Add those products to cart
        // Iterar sobre el arreglo y agregar al carrito
        for (const producto of productos) {
            await page.hover(producto.hover);
            await page.locator(producto.locator).click();
            await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
            await page.getByRole('button', { name: 'Continue Shopping' }).click();
        }
        // 9. Click 'Cart' button
        await page.getByRole('link', { name: 'Cart' }).click();
        // 10. Verify that cart page is displayed
        // Iterar sobre el arreglo y verificar cada producto y su nombre
        for (const producto of productos) {
            await expect(page.locator(producto.id)).toContainText(producto.nombre);
        }
        // 11. Click Proceed To Checkout
        await page.getByText('Proceed To Checkout').click();
        // 12. Verify that the delivery address is same address filled at the time registration of account
        await expect(page.locator('#address_delivery')).toContainText(userHelper.registrarUsuarioDto()[0].address);
        // 13. Verify that the billing address is same address filled at the time registration of account
        await expect(page.locator('#address_invoice')).toContainText(userHelper.registrarUsuarioDto()[0].address);
        // 14. Click 'Delete Account' button
        await page.getByRole('link', { name: 'Delete Account' }).click();
        // 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        await expect(page.locator('b')).toContainText('Account Deleted!');
        // fin del test
        MensajesConsola.mensajeFin('23');
    });

    test('Test Case 24: Download Invoice after purchase order', {tag:'@cu24'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 24
        MensajesConsola.mensajeInicio('24');
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('https://automationexercise.com/');
        // 3. Verify that home page is visible successfully
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        // 4. Add products to cart
            // 4.1. Click on 'Products' button
            await page.getByRole('link', { name: 'Products' }).click();
            // 4.2. Enter product name in search input and click search button
            await page.getByPlaceholder('Search Product').click();
            await page.getByPlaceholder('Search Product').fill('blue');
            await page.getByRole('button', { name: '' }).click();
            // 4.3 Iterar sobre el arreglo y agregar al carrito
            for (const producto of productos) {
                await page.hover(producto.hover);
                await page.locator(producto.locator).click();
                await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
                await page.getByRole('button', { name: 'Continue Shopping' }).click();
            }
        // 5. Click 'Cart' button
        await page.getByRole('link', { name: 'Cart' }).click();
        // 6. Verify that cart page is displayed
        // Iterar sobre el arreglo y verificar cada producto y su nombre
        for (const producto of productos) {
            await expect(page.locator(producto.id)).toContainText(producto.nombre);
        }
        // 7. Click Proceed To Checkout
        await page.getByText('Proceed To Checkout').click();
        // 8. Click 'Register / Login' button
        await page.getByRole('link', { name: 'Register / Login' }).click();
        // 9. Fill all details in Signup and create account
        await RegistrarUsuario(page, userHelper);
        // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        await expect(page.locator('b')).toContainText('Account Created!');
        await page.getByRole('link', { name: 'Continue' }).click();
        // 11. Verify ' Logged in as username' at top
        await expect(page.locator('#header')).toContainText('Logged in as ' + userHelper.registrarUsuarioDto()[0].name);
        // 12. Click 'Cart' button
        await page.waitForTimeout(500);
        await page.getByRole('link', { name: 'Cart' }).click();
        // 13. Click 'Proceed To Checkout' button
        await page.getByText('Proceed To Checkout').click();
        //await page.getByRole('link', { name: 'Proceed To Checkout' }).click();
        // 14. Verify Address Details and Review Your Order
        await expect(page.locator('#cart_items')).toContainText('Address Details');
        await expect(page.locator('#cart_items')).toContainText('Review Your Order');      
        // 15. Enter description in comment text area and click 'Place Order'
        await page.locator('textarea[name="message"]').click();
        await page.locator('textarea[name="message"]').fill('Esto es un comentario para el final de la compra.');
        await page.getByRole('link', { name: 'Place Order' }).click();
        // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        await page.locator('input[name="name_on_card"]').click();
        await page.locator('input[name="name_on_card"]').fill('Wilson Arriola');
        await page.locator('input[name="card_number"]').click();
        await page.locator('input[name="card_number"]').fill('1234567890123456');
        await page.locator('input[name="cvc"]').click();
        await page.locator('input[name="cvc"]').fill('123');
        await page.locator('input[name="expiry_month"]').click();
        await page.locator('input[name="expiry_month"]').fill('12');
        await page.locator('input[name="expiry_year"]').click();
        await page.locator('input[name="expiry_year"]').fill('2025');
        // 17. Click 'Pay and Confirm Order' button
        await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        // 18. Verify success message 'Your order has been placed successfully!'
        //await expect(page.locator('div.alert-success')).toBeVisible();
        await expect(page.locator('#form')).toContainText('Congratulations! Your order has been confirmed!');
        // 19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
        const download1Promise = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Download Invoice' }).click();
        const download1 = await download1Promise;
        // 20. Click 'Continue' button
        await page.getByRole('link', { name: 'Continue' }).click();
        // 21. Click 'Delete Account' button
        await page.getByRole('link', { name: 'Delete Account' }).click();
        // 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        await expect(page.locator('b')).toContainText('Account Deleted!');
        await page.getByRole('link', { name: 'Continue' }).click();
        // fin del test
        MensajesConsola.mensajeFin('24');
    }); 

});