import { useStores } from '../StoreProvider';
import styles from './CurrentCardComponent.module.css';

const CurrentCardComponent = () => {
  const { deckStore } = useStores();

  return (
    <div class={styles['card-component']}>
      <img src={deckStore.deck.currentCard1.url} />
      <img src={deckStore.deck.currentCard2.url} />
    </div>
  );
};

export default CurrentCardComponent;
