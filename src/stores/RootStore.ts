import StateStore from './StateStore';
import DeckStore from './DeckStore';

export default class RootStore {
  stateStore: StateStore;
  deckStore: DeckStore;

  constructor() {
    this.stateStore = new StateStore(this);
    this.deckStore = new DeckStore(this);
  }
}

export const createRootStore = (): RootStore => {
  return new RootStore();
};
