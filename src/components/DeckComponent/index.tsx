import { action } from 'mobx';
import { useStores } from '../StoreProvider';
import styles from './DeckComponent.module.css';
import CardComponent from '../CardComponent';
import { Show } from 'solid-js';

const DeckComponent = () => {
  const { deckStore } = useStores();

  return (
    <div class={styles['deck-component']}>
      <div>
        <div>Cards Left: {deckStore.deck.activeCards.length}</div>
        <Show when={deckStore.deck.activeCards.length < 3}>
          <div>Final Cards</div>
          <button
            onClick={action(() => {
              deckStore.deck.pass();
            })}
          >
            Pass
          </button>
        </Show>
      </div>
      <CardComponent></CardComponent>
    </div>
  );
};

export default DeckComponent;
