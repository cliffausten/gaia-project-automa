// Import styles, initialize component theme here.
// import '../src/common.css';
import { enableExternalSource } from 'solid-js';
import { Reaction } from 'mobx';
import { beforeMount } from '@playwright/experimental-ct-solid/hooks';
import { setupStores } from '../src/components/StoreProvider';
import { RootFunction } from 'solid-js/types/reactive/signal';
import RootStore, { createRootStore } from '../src/stores/RootStore';

// register MobX as an external source
let id = 0;
enableExternalSource((fn, trigger) => {
  const reaction = new Reaction(`externalSource@${++id}`, trigger);
  return {
    track: (x) => {
      let next;
      reaction.track(() => (next = fn(x)));
      return next;
    },
    dispose: () => reaction.dispose(),
  };
});

beforeMount(async ({ hooksConfig }) => {
  console.log(hooksConfig);
  if (!hooksConfig) setupStores();
  else if (hooksConfig.rootStore) {
    setupStores(hooksConfig.rootStore as unknown as RootStore);
  }
});
