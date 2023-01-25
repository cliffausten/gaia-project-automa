import { Component, enableExternalSource } from 'solid-js';
import { Reaction } from 'mobx';

import styles from './App.module.css';
import StoreProvider from './components/StoreProvider';
import StateRouter from './components/StateRouter';

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
  return (
    <StoreProvider>
      <div class={styles['mainPage']}>
        <header class={styles['header']}>
          <a class="coop-logo-link" aria-label="Homepage" href="/">
            <svg
              class={styles['logo']}
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="40"
              viewBox="-269.1 242.6 72 76.3"
            >
              <path
                fill="#FFFFFF"
                class="st0"
                d="M-197.1 259.4c0-2.7-.4-5.4-1.1-8.1-1-3.2-3.4-5.8-6.5-7-6.3-2.2-13.1-2.2-19.4 0-3.2 1.2-5.6 3.8-6.5 7-1.5 5.3-1.5 10.9 0 16.2 1 3.2 3.4 5.8 6.5 7 3.1 1.1 6.4 1.7 9.7 1.6 3.3 0 6.6-.6 9.7-1.6 3.2-1.2 5.6-3.8 6.5-7 .7-2.7 1.1-5.4 1.1-8.1zm-10.5 0c0 1.3-.2 2.7-.6 3.9-.5 1.7-2 3-3.8 3.4-1.7.3-3.4.3-5 0-1.8-.3-3.2-1.6-3.8-3.4-.8-2.6-.8-5.3 0-7.9.5-1.7 2-3 3.8-3.4 1.7-.3 3.4-.3 5 0 1.8.3 3.2 1.6 3.8 3.4.4 1.3.6 2.7.6 4m-27.9 43.9c1.5-5.3 1.5-10.9 0-16.2-1-3.2-3.4-5.8-6.5-7-6.3-2.2-13.1-2.2-19.4 0-3.2 1.2-5.6 3.8-6.5 7-1.5 5.3-1.5 10.9 0 16.2 1 3.2 3.4 5.8 6.5 7 6.3 2.2 13.1 2.2 19.4 0 3.1-1.1 5.6-3.7 6.5-7m-9.4-8c0 1.3-.2 2.7-.6 3.9-.5 1.7-2 3-3.8 3.4-1.7.3-3.4.3-5 0-1.8-.3-3.2-1.6-3.8-3.4-.8-2.6-.8-5.3 0-7.9.5-1.7 2-3 3.8-3.4 1.7-.3 3.4-.3 5 0 1.8.3 3.2 1.6 3.8 3.4.4 1.3.6 2.6.6 4m0-36h10.5c0-2.7-.4-5.4-1.1-8-1-3.2-3.4-5.8-6.5-7-6.3-2.2-13.1-2.2-19.4 0-3.2 1.2-5.6 3.8-6.5 7-1.5 5.3-1.5 10.9 0 16.2 1 3.2 3.4 5.8 6.5 7 3.1 1.1 6.4 1.6 9.7 1.6 3.3 0 6.6-.6 9.7-1.6 3.2-1.2 5.6-3.8 6.5-7 .1-.4.2-.9.4-1.4l-9.9-4.6c-.1.6-.2 1.2-.4 1.8-.5 1.7-2 3-3.8 3.4-1.7.3-3.4.3-5 0-1.8-.3-3.2-1.6-3.8-3.4-.8-2.6-.8-5.3 0-7.9.5-1.7 2-3 3.8-3.4 1.7-.3 3.4-.3 5 0 1.8.3 3.2 1.6 3.8 3.4.3 1.3.5 2.6.5 3.9m14.1 27.9c-.7 2.6-1.1 5.3-1.1 8.1V319h10.5v-23.7c0-1.3.2-2.7.6-3.9.5-1.7 2-3 3.8-3.4 1.7-.3 3.4-.3 5 0 1.8.3 3.2 1.6 3.8 3.4.8 2.6.8 5.3 0 7.9-.5 1.7-2 3-3.7 3.4-1.7.3-3.4.3-5 0-.3-.1-.7-.2-1-.3l3.6 9.8c3.3 0 6.6-.6 9.7-1.6 3.2-1.2 5.6-3.8 6.5-7 1.5-5.3 1.5-10.9 0-16.2-1-3.2-3.4-5.8-6.5-7-6.3-2.2-13.1-2.2-19.4 0-3.4 1-5.8 3.6-6.8 6.8"
              />
            </svg>
          </a>
          <div>Coop Engineering - Store Systems Solid Starter</div>
        </header>
        <main>
          <StateRouter />
        </main>
      </div>
    </StoreProvider>
  );
};

export default App;
