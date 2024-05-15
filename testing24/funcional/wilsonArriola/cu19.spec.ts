import { test, expect } from '@playwright/test';
import { HomePage } from '../../../helpers/pageObjects/homePage';
import { ProductsPage } from '../../../helpers/pageObjects/productsPage';

test.describe('Brand Navigation', () => {
  test('should navigate to brand pages and display products', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const div = 'div.brands_products';
    const brand = 'Polo';
    const otherBrand = 'H&M';

    // 1: Launch browser
    // 2: Navigate to URL
    // utilizo la propiedad navigate del hanlder homepage
    await homePage.navigate();
    // 3: Click on 'Products' button
    await homePage.clickProducts();
    // 4: Verify that Brands are visible on left side bar
    expect(await productsPage.isBrandSidebarVisible(div)).toBeVisible();
    
    // 5: Click on any brand name
    await productsPage.clickBrand(brand);

    // 6: Verify that user is navigated to brand page and brand products are displayed
    expect(await productsPage.isBrandPageVisible(brand)).toBeVisible();

    // 7: On left side bar, click on any other brand link
    await productsPage.clickBrand(otherBrand);

    // 8: Verify that user is navigated to that brand page and can see products
    expect(await productsPage.isBrandPageVisible(otherBrand)).toBeVisible();
  });
});
