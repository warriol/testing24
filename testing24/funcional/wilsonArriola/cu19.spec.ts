import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { HomePage } from '../../../helpers/pageObjects/homePage';
import { ProductsPage } from '../../../helpers/pageObjects/productsPage';

test.describe('Brand Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Configura el bloqueador de anuncios antes de la navegación
    const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    await blocker.enableBlockingInPage(page);
  });

  test('should navigate to brand pages and display products', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const div = 'div.brands_products';
    const brand = 'Polo';
    const otherBrand = 'H&M';

    // 1: Navigate to URL
    await homePage.navigate();
    
    // 2: Click on 'Products' button
    await homePage.clickProducts();
    
    // 3: Verify that Brands are visible on left side bar
    expect(await productsPage.isBrandSidebarVisible(div)).toBeVisible();
    
    // 4: Click on any brand name
    await productsPage.clickBrand(brand);
    
    // 5: Verify that user is navigated to brand page and brand products are displayed
    expect(await productsPage.isBrandPageVisible(brand)).toBeVisible();
    
    // 6: On left side bar, click on any other brand link
    await productsPage.clickBrand(otherBrand);
    
    // 7: Verify that user is navigated to that brand page and can see products
    expect(await productsPage.isBrandPageVisible(otherBrand)).toBeVisible();
  });
});
