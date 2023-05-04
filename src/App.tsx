import { Component, enableExternalSource } from 'solid-js';
import { Reaction } from 'mobx';

import styles from './App.module.css';
import StoreProvider, { setupStores } from './components/StoreProvider';
import StateRouter from './components/StateRouter';
import { createRootStore } from './stores/RootStore';

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

const App: Component = () => {
  setupStores();

  return (
    <StoreProvider>
      <div class={styles['mainPage']}>
        <header class={styles['header']}>
          <div>Gaia Project Automa</div>
        </header>
        <main>
          <StateRouter />
        </main>
      </div>
    </StoreProvider>
  );
};

export default App;
