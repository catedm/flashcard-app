class UI {
  constructor() {
    this.addDeckSubmit = document.querySelector('.add-deck-submit');
    this.addDeckInput = document.querySelector('.add-deck-input');
    this.renameDeckInput = document.querySelector('.rename-deck-input');
    this.renameDeckSubmit = document.querySelector('.rename-deck-submit');
    this.addDeckModal = document.querySelector('.add-deck-modal');
    this.deckTableBody = document.querySelector('.deck-table-body');
    this.deckTable = document.querySelector('.deck-table');
    this.deckSuccessContainer = document.querySelector('.deck-success-container');
    this.navBar = document.querySelector('.uk-navbar-container');
    this.renameDeckLink = document.querySelector('.rename-deck');
  }

  showAlert(message, className) {
    var currentAlert = document.querySelector('.uk-alert');
    if (currentAlert) {
      return
    };

    // build template
    var html = `<div class="${className} uk-margin" uk-alert>
                  <a class="uk-alert-close" uk-close></a>
                  <p>${message}</p>
                </div>`;

    // Create div
    const div = document.createElement('div');
    // Add margin class
    div.className = 'uk-margin';
    // Set div HTML
    div.innerHTML = html;
    // Add div to DOM
    if (className.includes('danger')) {
      this.addDeckInput.parentElement.append(div);
    } if (className.includes('success')) {
      this.deckTable.insertAdjacentElement('beforebegin', div);
    }

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 2500);
  }

  clearAlert() {
    var currentAlert = document.querySelector('.uk-alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  getDecks(decks) {
    let html = ``;

    decks.forEach(deck => {
      html += `<tr>
                  <td><a href="/${deck.id}">${deck.title}</a></td>
                  <td>${deck.cards.length}</td>
                  <td>
                  <div class="uk-inline">
                    <button class="uk-button uk-button-default" type="button"><span uk-icon="cog"></span></button>
                    <div uk-dropdown="pos: bottom-justify; mode: click" class="uk-padding-small">
                        <ul class="uk-nav uk-dropdown-nav">
                            <li><span class="uk-margin-small-right" uk-icon="icon: pencil"></span><a href="#rename-deck-modal" class="rename-deck" uk-toggle>Rename</a></li>
                            <li><span class="uk-margin-small-right" uk-icon="icon: trash"></span><a href="#" class="delete-deck">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>`
    });

  var tableRef = this.deckTableBody;
  tableRef.innerHTML = html;
  this.addDeckInput.value = '';
  UIkit.modal(this.addDeckModal).hide();

  }

  setRenameDeckInput(name) {
    // Set the input to the current name
    this.renameDeckInput.value = name;
  }

  renameDeck(e) {
    var newName = e.target.parentElement.previousElementSibling.firstElementChild.value;
    // debugger;
  }
}

export const ui = new UI();
