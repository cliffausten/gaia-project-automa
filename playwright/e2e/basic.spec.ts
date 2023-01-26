import { test, expect } from '@playwright/test';
import { mockQuotesAPI } from '../mocks/apiRoutes';

test.describe('Basic Page', () => {
  test.beforeEach(async ({ page }) => {
    await mockQuotesAPI(page);

    await page.goto('http://localhost:3000');
  });

  test('success', async ({ page }) => {
    await expect(
      page.getByText('Stop complaining. Start creating.')
    ).toBeVisible();

    const firstValue = await page.getByText(/[0-9]+/).innerText();
    await page.waitForTimeout(1000);
    const secondValue = await page.getByText(/[0-9]+/).innerText();

    await expect(parseInt(secondValue) - parseInt(firstValue)).toBeGreaterThan(
      0
    );
  });
});
