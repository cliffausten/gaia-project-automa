import { test, expect } from '@playwright/experimental-ct-solid';
import { mockQuotesAPI } from '../../../playwright/mocks/apiRoutes';
import StoreProvider from '../../components/StoreProvider';
import ExamplePage from '.';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('ExamplePage Tests', () => {
  test.beforeAll(async ({ page }) => {
    await mockQuotesAPI(page);
  });

  test('renders quote with author', async ({ mount }) => {
    const component = await mount(
      <StoreProvider>
        <ExamplePage />
      </StoreProvider>
    );

    await expect(component).toContainText('Stop complaining. Start creating.');
    await expect(component).toContainText('Dale Patridge');
  });
});
