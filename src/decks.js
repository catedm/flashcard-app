class Decks {
  constructor() {
    this.decks = [];
  }

  addDeck(title) {
    this.decks.push({
      id: this.generateDeckId(),
      title: title,
      cards: [],
      dateAdded: new Date()
    });
    console.log('deck added...');
  };

  generateDeckId() {
    if (this.decks.length === 0) {
      return 1;
    } else {
      return this.decks[this.decks.length - 1].id + 1;
    }
  }

  removeDeckById(id) {
    const index = this.decks.findIndex(deck => deck.id === id);

    if (index === -1) {
      console.log('Deck not found');
      return;
    }

    this.decks.splice(index, 1);
    return decks;
  }

  getDeckById(id) {
    return this.decks.find(deck => {
      return deck.id === id;
    });
  };

  logDecks() {
    return this.decks;
  }

  addCardToDeck(front, back, deckId) {
    if (!front || !back) {
      console.log('Must enter front and back value');
      return;
    }
    // find the deck by id
    const deck = this.decks.filter(deck => deck.id === deckId)[0];

    // Verify deck exists
    if (!deck) {
      console.log('Deck not found');
      return;
    }

    // add card to that deck
    deck.cards.push({
      id: this.cardIdMaker().next().value,
      front,
      back
    });

    return deck;
  }


  generateCardId() {
    if (this.decks.length === 0) {
      return 1;
    } else {
      return this.decks[this.decks.length - 1].id + 1;
    }
  }

  removeCardFromDeck(deckId, cardId) {
    // find the deck by id
    const deck = this.decks.filter(deck => deck.id === deckId)[0];

    // make sure deck exists
    if (!deck) {
      console.log('Deck does not exist.');
      return;
    }

    // find card by index
    const index = deck.cards.findIndex(card => card.id === cardId);
    // remove card from deck
    deck.cards.splice(index, 1);

    return deck;
  }

  getCardsInDeck(id) {
    // find the deck by id
    const deck = this.decks.filter(deck => deck.id === id)[0];

    // make sure deck exists
    if (!deck) {
      console.log('Deck does not exist.');
      return;
    }

    return deck.cards;
  }
}

export const decks = new Decks();
