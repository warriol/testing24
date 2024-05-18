import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { UserHelper } from '../../../helpers/utils/users';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';

test.describe('Test realizados por Wilson Arriola', {tag:'@wilson'}, () => {

    const userHelper = new UserHelper();

    test.beforeEach(async ({ page }) => {
        // Configura el bloqueador de anuncios antes de la navegación
        const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
        await blocker.enableBlockingInPage(page);
    });

    test('Test Case 19: View & Cart Brand Products', {tag:'@cu19'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 19
        MensajesConsola.mensajeInicio('19');
        MensajesConsola.mensajeTitulo('View & Cart Brand Products');
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('https://automationexercise.com/');
        // 3. Click on 'Products' button
        await page.getByRole('link', { name: 'Products' }).click();
        // 4. Verify that Brands are visible on left side bar
        await expect(page.locator('div.brands_products')).toBeVisible();
        // 5. Click on any brand name
        await page.getByRole('link', { name: 'Polo' }).click();
        // 6. Verify that user is navigated to brand page and brand products are displayed
        await expect(page.getByRole('heading', { name: 'Brand - Polo Products' })).toBeVisible();
        // 7. On left side bar, click on any other brand link
        await page.getByRole('link', { name: 'H&M' }).click();
        // 8. Verify that user is navigated to that brand page and can see products
        await expect(page.getByRole('heading', { name: 'Brand - H&M Products' })).toBeVisible();
        // fin del test
        MensajesConsola.mensajeFin('19');
    });

    test('Test Case 20: Search Products and Verify Cart After Login', {tag:'@cu20'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 20
        MensajesConsola.mensajeInicio('20');
        MensajesConsola.mensajeTitulo('Search Products and Verify Cart After Login');
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('https://automationexercise.com/');
        // 3. Click on 'Products' button
        await page.getByRole('link', { name: 'Products' }).click();
        // 4. Verify user is navigated to ALL PRODUCTS page successfully
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
        // 5. Enter product name in search input and click search button
        await page.getByPlaceholder('Search Product').click();
        await page.getByPlaceholder('Search Product').fill('blue');
        await page.getByRole('button', { name: '' }).click();
        // 6. Verify 'SEARCHED PRODUCTS' is visible
        await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
        // 7. Verify all the products related to search are visible
        await expect(page.getByText('Rs. 500 Blue Top Add to cart').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 478 Sleeves Top and Short').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 1530 Blue Cotton Indie').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 849 Colour Blocked Shirt').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 1400 Grunt Blue Slim Fit').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 5000 Beautiful Peacock').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 1389 GRAPHIC DESIGN MEN T').nth(1)).toBeVisible();
        // 8. Add those products to cart
        await page.locator('.productinfo > .btn').first().click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.hover('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.single-products > div.productinfo.text-center');
        await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.hover('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(5) > div > div.single-products > div.productinfo.text-center');
        await page.locator('div:nth-child(5) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.hover('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(6) > div > div.single-products > div.productinfo.text-center');
        await page.locator('div:nth-child(6) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.hover('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(7) > div > div.single-products > div.productinfo.text-center');
        await page.locator('div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.hover('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(8) > div > div.single-products > div.productinfo.text-center');
        await page.locator('div:nth-child(8) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.hover('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(9) > div > div.single-products > div.productinfo.text-center');
        await page.locator('div:nth-child(9) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        // 9. Click 'Cart' button and verify that products are visible in cart
        await page.getByRole('link', { name: 'Cart' }).click();
        await expect(page.locator('#product-1')).toContainText('Blue Top');
        await expect(page.locator('#product-16')).toContainText('Sleeves Top and Short - Blue & Pink');
        await expect(page.locator('#product-21')).toContainText('Blue Cotton Indie Mickey Dress');
        await expect(page.locator('#product-24')).toContainText('Colour Blocked Shirt – Sky Blue');
        await expect(page.locator('#product-37')).toContainText('Grunt Blue Slim Fit Jeans');
        await expect(page.locator('#product-41')).toContainText('Beautiful Peacock Blue Cotton Linen Saree');
        await expect(page.locator('#product-43')).toContainText('GRAPHIC DESIGN MEN T SHIRT - BLUE');
        /*
        // screenshot
        const elemento = 'div.cart_info';
        const elementHandle = await page.$(elemento);
        if (elementHandle) {
            expect(await elementHandle.screenshot()).toMatchSnapshot('cu20-cart.png');
        }
        */
        // 10. Click 'Signup / Login' button and submit login details
        await page.getByRole('link', { name: 'Signup / Login' }).click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(await userHelper.getCorreo());
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(await userHelper.getPassword());
        await page.getByRole('button', { name: 'Login' }).click();
        // 11. Again, go to Cart page
        await page.getByRole('link', { name: 'Cart' }).click();
        // 12. Verify that those products are visible in cart after login as well
        await expect(page.locator('#product-1')).toContainText('Blue Top');
        await expect(page.locator('#product-16')).toContainText('Sleeves Top and Short - Blue & Pink');
        await expect(page.locator('#product-21')).toContainText('Blue Cotton Indie Mickey Dress');
        await expect(page.locator('#product-24')).toContainText('Colour Blocked Shirt – Sky Blue');
        await expect(page.locator('#product-37')).toContainText('Grunt Blue Slim Fit Jeans');
        await expect(page.locator('#product-41')).toContainText('Beautiful Peacock Blue Cotton Linen Saree');
        await expect(page.locator('#product-43')).toContainText('GRAPHIC DESIGN MEN T SHIRT - BLUE');
        // salir
        await page.getByRole('link', { name: 'Logout' }).click();
        // fin del test
        MensajesConsola.mensajeFin('20');
    });

    test('Test Case 21: Add review on product', {tag:'@cu21'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 21
        MensajesConsola.mensajeInicio('21');
        MensajesConsola.mensajeTitulo('Add review on product');
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('https://automationexercise.com/');
        // 3. Click on 'Products' button
        await page.getByRole('link', { name: 'Products' }).click();
        // 4. Verify user is navigated to ALL PRODUCTS page successfully
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
        // 5. Click on 'View Product' button
        await page.locator('.choose > .nav > li > a').first().click();
        // 6. Verify 'Write Your Review' is visible
        await expect(page.locator('section')).toContainText('Write Your Review');
        // 7. Enter name, email and review
        await page.getByPlaceholder('Your Name').click();
        await page.getByPlaceholder('Your Name').fill(await userHelper.getUser());
        await page.getByPlaceholder('Email Address', { exact: true }).click();
        await page.getByPlaceholder('Email Address', { exact: true }).fill(await userHelper.getCorreo());
        await page.getByPlaceholder('Add Review Here!').click();
        await page.getByPlaceholder('Add Review Here!').fill(await userHelper.getReview());
        // 8. Click 'Submit' button
        await page.getByRole('button', { name: 'Submit' }).click();
        // 9. Verify success message 'Thank you for your review.'
        await expect(page.locator('section')).toContainText('Thank you for your review');
        // fin del test
        MensajesConsola.mensajeFin('21');
    });

    test('Test Case 22: Add to cart from Recommended items', {tag:'@cu22'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 22
        MensajesConsola.mensajeInicio('22');
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('https://automationexercise.com/');
        // 3. Scroll to bottom of page
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });
        // 4. Verify 'recommended items' is visible
        await expect(page.getByRole('heading', { name: 'recommended items' })).toBeVisible();
        // 5. Click on any product 'Add to cart' button
        await page.locator('div:nth-child(2) > div > .product-image-wrapper > .single-products > .productinfo > .btn').first().click();
        // 5.1. Verify 'Added!' message is visible
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        // 6. Click on 'View Cart' button
        await page.getByRole('link', { name: 'View Cart' }).click();
        // 7. Verify that product is displayed in cart page
        await expect(page.locator('#product-4')).toContainText('Stylish Dress');
        // fin del test
        MensajesConsola.mensajeFin('22');
    });

    test('Test Case 23: Verify address details in checkout page', {tag:'@cu23'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 23
        MensajesConsola.mensajeInicio('23');
        // 2. Navigate to url 'http://automationexercise.com'
        // resto del test
        // fin del test
        MensajesConsola.mensajeFin('23');
    });

    test('Test Case 24: Download Invoice after purchase order', {tag:'@cu24'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 24
        MensajesConsola.mensajeInicio('24');
        // 2. Navigate to url 'http://automationexercise.com'
        // resto del test
        // fin del test
        MensajesConsola.mensajeFin('24');
    });

    test('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', {tag:'@cu25'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 25
        MensajesConsola.mensajeInicio('25');
        MensajesConsola.mensajeTitulo('Verify Scroll Up using Arrow button and Scroll Down functionality');
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('https://automationexercise.com/');
        // 3. Verify that home page is visible successfully
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        // 4. Scroll down page to bottom
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });
        // 5. Verify 'SUBSCRIPTION' is visible
        await expect(page.locator('#footer')).toContainText('Subscription');
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        // 6. Click on arrow at bottom right side to move upward
        await page.locator('#scrollUp').click();
        // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
        // fin del test
        MensajesConsola.mensajeFin('25');
    });

    test('Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality', {tag:'@cu26'}, async ({ page }) => {
        // 1. Inicio del caso de uso número 26
        MensajesConsola.mensajeInicio('26');
        MensajesConsola.mensajeTitulo('Verify Scroll Up without Arrow button and Scroll Down functionality');
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('https://automationexercise.com/');
        // 3. Verify that home page is visible successfully
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        // 4. Scroll down page to bottom
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });
        // 5. Verify 'SUBSCRIPTION' is visible
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        // 6. Scroll up page
        await page.evaluate(() => {
            window.scrollBy(0, -window.innerHeight);
        });
        // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
        // fin del test
        MensajesConsola.mensajeFin('26');
    });

});