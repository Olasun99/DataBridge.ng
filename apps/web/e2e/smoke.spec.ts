import { test, expect } from '@playwright/test';

test('has title and heading', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/ScribeHealth — Phase 0/);
  await expect(page.getByRole('heading', { name: 'ScribeHealth — Phase 0' })).toBeVisible();
});
