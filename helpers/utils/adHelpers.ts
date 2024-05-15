import { Page, Frame } from '@playwright/test';

export class AdHelper {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeAdIfPresent() {
    const adFrame = this.page.frameLocator('iframe');
    if (adFrame) {
      const frame = adFrame.getByLabel('Close ad')
      if (frame) {
        await frame.click();
      }
    }
  }

}
