import { test, expect, type Page } from '@playwright/test';

/** Smoke test for the Resonance Ventures single-page landing site. */
function trackPageErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`console.error: ${msg.text()}`);
  });
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
  page.on('requestfailed', (req) => {
    if (req.url().includes('localhost')) errors.push(`requestfailed: ${req.url()}`);
  });
  return errors;
}

test('homepage loads, titled, with core content and no console errors', async ({ page }) => {
  const errors = trackPageErrors(page);
  const res = await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  expect(res?.status()).toBeLessThan(400);
  await expect(page).toHaveTitle(/Resonance Ventures/);
  await expect(page.getByText('Three frequencies, one studio.')).toBeVisible();
  await expect(page.locator('body')).not.toBeEmpty();
  expect(errors).toEqual([]);
});
