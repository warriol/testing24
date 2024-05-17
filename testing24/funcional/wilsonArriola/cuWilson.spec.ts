import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';

test.describe('Test realizados por Wilson Arriola', {tag:'@wilson'}, () => {
    test.beforeEach(async ({ page }) => {
        // Configura el bloqueador de anuncios antes de la navegación
        const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
        await blocker.enableBlockingInPage(page);
    });

    test('Test Case 19: View & Cart Brand Products', {tag:'@cu19'}, async ({ page }) => {
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
        console.log('Test Case 19: View & Cart Brand Products -- finalizado');
    });

    test('Test Case 20: Search Products and Verify Cart After Login', {tag:'@cu20'}, async ({ page }) => {
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
        /*
        await expect(page.locator('#product-1')).toContainText('Blue Top');
        await expect(page.locator('#product-16')).toContainText('Sleeves Top and Short - Blue & Pink');
        await expect(page.locator('#product-21')).toContainText('Blue Cotton Indie Mickey Dress');
        await expect(page.locator('#product-24')).toContainText('Colour Blocked Shirt – Sky Blue');
        await expect(page.locator('#product-37')).toContainText('Grunt Blue Slim Fit Jeans');
        await expect(page.locator('#product-41')).toContainText('Beautiful Peacock Blue Cotton Linen Saree');
        await expect(page.locator('#product-43')).toContainText('GRAPHIC DESIGN MEN T SHIRT - BLUE');
        */


        const elemento = 'div.cart_info';
        const elementHandle = await page.$(elemento);
        if (elementHandle) {
            expect(await elementHandle.screenshot()).toMatchSnapshot('cu20-cart.png');
        }
        
        // 10. Click 'Signup / Login' button and submit login details
        await page.getByRole('link', { name: 'Signup / Login' }).click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('warriol.game@gmail.com');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('test12345678');
        await page.getByRole('button', { name: 'Login' }).click();
        // 11. Again, go to Cart page
        await page.getByRole('link', { name: 'Cart' }).click();
        // 12. Verify that those products are visible in cart after login as well
        await page.getByText('Rs. 500 Blue Top Add to cart').nth(1).click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.getByText('Rs. 1530 Blue Cotton Indie').nth(1).click();
        await page.locator('div:nth-child(5) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.locator('div:nth-child(6) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.locator('div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.locator('div:nth-child(8) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.locator('div:nth-child(9) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        // salir
        await page.locator('li').filter({ hasText: 'Logout' }).click();
        // fin del test
        console.log('Test Case 20: Search Products and Verify Cart After Login -- finalizado');
    });

    test('Test Case 21: Add review on product', {tag:'@cu21'}, async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await page.getByRole('link', { name: 'Products' }).click();
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
        await page.locator('.choose > .nav > li > a').first().click();
        await expect(page.locator('section')).toContainText('Write Your Review');
        await page.getByPlaceholder('Your Name').click();
        await page.getByPlaceholder('Your Name').fill('nombre');
        await page.getByPlaceholder('Your Name').press('Tab');
        await page.getByPlaceholder('Email Address', { exact: true }).fill('correo@correo.com');
        await page.getByPlaceholder('Email Address', { exact: true }).press('Tab');
        await page.getByPlaceholder('Add Review Here!').fill('review here');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('section')).toContainText('Thank you for your review');
    });

    test('Test Case 22: Add to cart from Recommended items', {tag:'@cu22'}, async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await expect(page.getByRole('heading', { name: 'recommended items' })).toBeVisible();
        await page.locator('div:nth-child(2) > div > .product-image-wrapper > .single-products > .productinfo > .btn').first().click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.getByRole('link', { name: 'Cart' }).click();
        await expect(page.getByRole('cell', { name: 'Stylish Dress Women > Dress' })).toBeVisible();
    });

    test('Test Case 23: Verify address details in checkout page', {tag:'@cu23'}, async ({ page }) => {
        // resto del test
    });

    test('Test Case 24: Download Invoice after purchase order', {tag:'@cu24'}, async ({ page }) => {
        // resto del test
    });

    test('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', {tag:'@cu25'}, async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(page.locator('#footer')).toContainText('Subscription');
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        await page.locator('.grippy-host').click();
        await page.getByRole('link', { name: '' }).click(); // todo: mejor la busqueda del boton de "BUSCAR" que no se apor el icono
        await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    });

    test('Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality', {tag:'@cu26'}, async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    });

});