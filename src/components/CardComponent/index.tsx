import { action } from 'mobx';
import { useStores } from '../StoreProvider';
import styles from './CardComponent.module.css';

const CardComponent = () => {
  const { deckStore } = useStores();

  return (
    <div
      class={styles['card-component']}
      onClick={action(() => {
        deckStore.deck.drawNext();
      })}
    >
      <div />
      <div class={styles['card-left']}>
        <img src={deckStore.deck.currentCard2.url} />
      </div>
      <div class={styles['card-right']}>
        <img src={deckStore.deck.currentCard1.url} />
      </div>
      <div />
    </div>
  );
};

export default CardComponent;
