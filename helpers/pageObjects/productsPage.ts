import { Page } from '@playwright/test';

export class ProductsPage {
  private page: Page;
  private brandSidebar = '.brands_products';
  private brandLinks = '.brands-name a';

  constructor(page: Page) {
    this.page = page;
  }

  async isBrandSidebarVisible(div: string) {
    return this.page.locator(`${div}`);
  }

  async clickBrand(brandName: string) {
    await this.page.getByRole('link', { name: `${brandName}` }).click();
  }

  async isBrandPageVisible(brandName: string) {
    return this.page.getByRole('heading', { name: `ProductsBrand - ${brandName} Products` });
  }
}
