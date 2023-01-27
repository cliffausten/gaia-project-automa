import { test, expect } from '@playwright/experimental-ct-solid';
import { mockQuotesAPI } from '../../../playwright/mocks/apiRoutes';
import { createRootStore } from '../../stores/RootStore';
import StoreProvider from '../StoreProvider';
import StateRouter from './index';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('StateRouter Tests', () => {
  test.beforeEach(async ({ page }) => {
    await mockQuotesAPI(page);
  });

  test('renders example page', async ({ mount }) => {
    const component = await mount(
      <StoreProvider>
        <StateRouter />
      </StoreProvider>
    );

    await expect(component).toContainText('Stop complaining. Start creating.');
  });

  test('renders unknown route', async ({ mount }) => {
    const store = createRootStore();
    store.stateStore.state = 'test';

    const component = await mount(
      <StoreProvider>
        <StateRouter />
      </StoreProvider>,
      {
        hooksConfig: {
          //@ts-ignore
          rootStore: store,
        },
      }
    );

    await expect(component).toContainText('Unknown route');
    await expect(component).not.toContainText(
      'Stop complaining. Start creating.'
    );
  });
});
