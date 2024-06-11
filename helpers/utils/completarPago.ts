const { expect } = require('@playwright/test');

export async function CompletarPago(page) {
  await expect(page.locator('#cart_items')).toContainText('Address Details');
  await expect(page.locator('#cart_items')).toContainText('Review Your Order');
  await page.locator('textarea[name="message"]').click();
  await page.locator('textarea[name="message"]').fill('description');
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('Leandro Rodriguez');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('12345');
  await page.locator('input[name="cvc"]').click();
  await page.locator('input[name="cvc"]').fill('123');
  await page.locator('input[name="expiry_month"]').click();
  await page.locator('input[name="expiry_month"]').fill('12');
  await page.locator('input[name="expiry_year"]').click();
  await page.locator('input[name="expiry_year"]').fill('2030');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
}