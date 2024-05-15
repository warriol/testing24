import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com');
});

test.describe('Test realizados por Wilson Arriola', {tag:'@wilson'}, () => {

    test('Test Case 19: View & Cart Brand Products', {tag:'@cu19'}, async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await page.getByRole('link', { name: 'Products' }).click();
        await expect(page.locator('div.brands_products')).toBeVisible();
        await page.getByRole('link', { name: 'Polo' }).click();
        await expect(page.getByRole('heading', { name: 'Brand - Polo Products' })).toBeVisible();
        await page.getByRole('link', { name: 'H&M' }).click();
        await expect(page.getByRole('heading', { name: 'Brand - H&M Products' })).toBeVisible();
    });

    test('Test Case 20: Search Products and Verify Cart After Login', {tag:'@cu20'}, async ({ page }) => {
        await page.getByRole('link', { name: ' Home' }).click();
        await page.frameLocator('iframe[name="aswift_1"]').getByLabel('Close ad').click();
        await page.getByRole('link', { name: ' Products' }).click();
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
        await page.getByPlaceholder('Search Product').click();
        await page.getByPlaceholder('Search Product').fill('blue');
        await page.getByPlaceholder('Search Product').press('Enter');
        await page.getByRole('button', { name: '' }).click();
        await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
        await expect(page.getByText('Rs. 500 Blue Top Add to cart').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 478 Sleeves Top and Short').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 1530 Blue Cotton Indie').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 849 Colour Blocked Shirt').nth(1)).toBeVisible();
        await expect(page.getByText('Rs. 1400 Grunt Blue Slim Fit').nth(1)).toBeVisible();
        await page.locator('.overlay-content > .btn').first().click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.getByText('Rs. 1530 Blue Cotton Indie').nth(1).click();
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
        await page.getByRole('link', { name: ' Cart' }).click();
        await expect(page.getByRole('cell', { name: 'Blue Top Women > Tops' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Sleeves Top and Short - Blue' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Blue Cotton Indie Mickey' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Colour Blocked Shirt – Sky' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'Grunt Blue Slim Fit Jeans Men' })).toBeVisible();
    });

    test('Test Case 21: Add review on product', {tag:'@cu21'}, async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await page.getByRole('link', { name: ' Products' }).click();
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
        await page.locator('.choose > .nav > li > a').first().click();
        await page.frameLocator('iframe[name="aswift_7"]').getByLabel('Close ad').click();
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
        await page.getByRole('link', { name: ' Cart' }).click();
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
        await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
        await expect(page.locator('#footer')).toContainText('Subscription');
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        await page.locator('.grippy-host').click();
        await page.getByRole('link', { name: '' }).click();
        await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    });

    test('Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality', {tag:'@cu26'}, async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    });

});