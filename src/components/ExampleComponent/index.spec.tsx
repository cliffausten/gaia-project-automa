import { test, expect } from '@playwright/experimental-ct-solid';
import { mockQuotesAPI } from '../../../playwright/mocks/apiRoutes';
import StoreProvider from '../StoreProvider';
import ExampleComponent from './index';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('ExampleComponent Tests', () => {
  test.beforeEach(async ({ page }) => {
    await mockQuotesAPI(page);
  });

  test('renders quote with author', async ({ mount }) => {
    const component = await mount(
      <StoreProvider>
        <ExampleComponent showAuthor={true} />
      </StoreProvider>
    );

    await expect(component).toContainText('Stop complaining. Start creating.');
    await expect(component).toContainText('Dale Patridge');
  });

  test('renders quote without author', async ({ mount }) => {
    const component = await mount(
      <StoreProvider>
        <ExampleComponent showAuthor={false} />
      </StoreProvider>
    );
    await expect(component).toContainText('Stop complaining. Start creating.');
    await expect(component).not.toContainText('Dale Patridge');
  });
});
