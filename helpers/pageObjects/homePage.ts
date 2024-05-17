import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;
  private productsButton = 'text="Products"';

  constructor(page: Page) {
    this.page = page;
  }

  async blockGoogleAds(page) {
    // watch all network activity
    await this.page.route('**/*', (route) => {
      // abort requests from known ad domains
      if (route.request().url().includes('cdn.ads.com')) {
        route.abort();
      } else {
        route.continue();
      }
    });
  }

  async navigate() {
    await this.page.goto('http://automationexercise.com');
  }

  async clickProducts() {
    await this.page.getByRole('link', { name: 'Products' }).click();
  }
}
