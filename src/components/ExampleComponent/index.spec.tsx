import { test, expect } from '@playwright/experimental-ct-solid';
import StoreProvider from '../StoreProvider';
import ExampleComponent from './index';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Example Component Tests', () => {
  test.beforeAll(async ({ page }) => {
    await page.route('http://quotes.rest/qod.json', async (route) => {
      const json = {
        contents: {
          quotes: [
            {
              quote: 'Stop complaining. Start creating.',
              author: 'Dale Patridge',
            },
          ],
        },
      };
      await route.fulfill({ json });
    });
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
