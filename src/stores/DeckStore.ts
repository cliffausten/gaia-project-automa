import { makeObservable, observable, action, runInAction } from 'mobx';
import Store from './Store';
import RootStore from './RootStore';
import { Deck } from '../models/deck';

class DeckStore extends Store {
  deck: Deck;

  constructor(rootStore: RootStore) {
    super(rootStore);

    this.deck = new Deck();

    makeObservable(this, {
      deck: observable,
    });
  }

  /*async getNewQuote(): Promise<void> {
    const result = await this.exampleApi.getQuote();

    runInAction(() => {
      if (result.success) {
        this.quote = result.data.contents.quotes[0].quote;
        this.author = result.data.contents.quotes[0].author;
      } else {
        this.quote =
          'If I have seen further than others, it is by standing upon the shoulders of giants.';
        this.author = 'Issac Newton';
      }
    });
  }*/
}

export default DeckStore;
