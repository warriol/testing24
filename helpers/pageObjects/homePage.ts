import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;
  private productsButton = 'text="Products"';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('http://automationexercise.com');
  }

  async clickProducts() {
    await this.page.getByRole('link', { name: 'Products' }).click();
  }
}
