import { action, makeObservable, observable } from 'mobx';

export class Deck {
  currentCard1: Card;
  currentCard2: Card;
  activeCards: Array<Card>;
  remainingCards: Array<Card>;
  discardedCards: Array<Card>;

  constructor() {
    // Create decks
    this.remainingCards = [
      {
        number: 3,
        url: '/images/Card3.png',
      },
      {
        number: 6,
        url: '/images/Card6.png',
      },
      {
        number: 8,
        url: '/images/Card8.png',
      },
      {
        number: 9,
        url: '/images/Card9.png',
      },
      {
        number: 10,
        url: '/images/Card10.png',
      },
      {
        number: 11,
        url: '/images/Card11.png',
      },
      {
        number: 12,
        url: '/images/Card12.png',
      },
      {
        number: 14,
        url: '/images/Card14.png',
      },
      {
        number: 15,
        url: '/images/Card15.png',
      },
      {
        number: 16,
        url: '/images/Card16.png',
      },
      {
        number: 17,
        url: '/images/Card17.png',
      },
    ];

    this.activeCards = [
      {
        number: 1,
        url: '/images/Card1.png',
      },
      {
        number: 2,
        url: '/images/Card2.png',
      },
      {
        number: 4,
        url: '/images/Card4.png',
      },
      {
        number: 5,
        url: '/images/Card5.png',
      },
      {
        number: 7,
        url: '/images/Card7.png',
      },
      {
        number: 13,
        url: '/images/Card13.png',
      },
    ];

    this.discardedCards = [];

    // Shuffle decks
    this.remainingCards = this.shuffle(this.remainingCards);

    this.activeCards.push(this.remainingCards.pop());

    this.activeCards = this.shuffle(this.activeCards);

    // Draw first cards
    this.drawFirstCards();

    makeObservable(this, {
      activeCards: observable,
      remainingCards: observable,
      currentCard1: observable,
      currentCard2: observable,
      drawNext: action,
      pass: action,
    });
  }

  private drawFirstCards() {
    this.currentCard1 = this.activeCards.pop();
    this.currentCard2 = this.activeCards.pop();
  }

  drawNext(): void {
    if (this.activeCards.length > 0) {
      this.discardedCards.push(this.currentCard1);
      this.currentCard1 = this.currentCard2;
      this.currentCard2 = this.activeCards?.pop();
    }
  }

  pass(): void {
    const nextDeck = [
      ...this.activeCards,
      this.currentCard1,
      this.currentCard2,
      ...this.discardedCards,
      this.remainingCards.pop(),
    ];

    this.activeCards = this.shuffle(nextDeck);
    this.discardedCards = [];
    this.currentCard1 = null;
    this.currentCard2 = null;

    this.drawFirstCards();
  }

  shuffle(deck: Array<Card>): Array<Card> {
    const array = [...deck];

    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

export type Card = {
  number: number;
  url: string;
};
