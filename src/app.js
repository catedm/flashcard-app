import {
  decks
} from './decks';
import {
  ui
} from './ui';

// listen for add deck click
ui.addDeckSubmit.addEventListener('click', addDeck);

function addDeck(e) {
  // get the value of the input
  var inputValue = e.target.parentElement.previousElementSibling.firstElementChild.value;
  // validate input
  if (inputValue === '') {
    ui.showAlert('Please enter a deck name.', 'uk-alert-danger');
  }

}
