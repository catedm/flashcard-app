class UI {
  constructor() {
    this.addDeckSubmit = document.querySelector('.add-deck-submit');
    this.addDeckInput = document.querySelector('.add-deck-input');
    this.addDeckModal = document.querySelector('.uk-modal-body');
  }

  showAlert(message, className) {
    var currentAlert = document.querySelector('.uk-alert');
    if (currentAlert) { return };

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
    this.addDeckInput.parentElement.append(div);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    var currentAlert = document.querySelector('.uk-alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

}

export const ui = new UI();
