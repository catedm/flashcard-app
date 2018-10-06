import {
  decks
} from './decks';
import {
  ui
} from './ui';

// listen for add deck click
ui.addDeckSubmit.addEventListener('click', addDeck);

// listen for rename deck link click
ui.deckTableBody.addEventListener('click', renameDeck);

ui.renameDeckSubmit.addEventListener('click', renameDeckSubmit);

function addDeck(e) {
  // get the value of the input
  var deckTitle = e.target.parentElement.previousElementSibling.firstElementChild.value;
  // validate input
  if (deckTitle === '') {
    ui.showAlert('Please enter a deck name.', 'uk-alert-danger');
    return;
  }

  // Add deck to data structure
  decks.addDeck(deckTitle);
  // Refresh deckss in the ui
  ui.getDecks(decks.decks);
  // Add confirmation message
  ui.showAlert('Deck added', 'uk-alert-success');

  e.preventDefault();
  console.log(decks.logDecks());
}

function renameDeck(e) {
  // try/catch block is here because of the SVG icon in the options button
  // svg icons dont have a className property
  try {
    if (e.target.className.includes('rename')) {
      var name = e.target.closest('tr').firstElementChild.textContent;
      ui.setRenameDeckInput(name);
    }
  } catch (err) {
    return;
  }

  e.preventDefault();
}

function renameDeckSubmit(e) {
  ui.renameDeck(e);
  e.preventDefault();
}
