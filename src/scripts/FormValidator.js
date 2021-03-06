export class FormValidator {
  constructor(element) {
    this.element = element;
  }
    
  checkInputValidity(event) {
    const errors = {validationEmpty: 'Это обязательное поле',
      validationLenght: 'Должно быть от 2 до 30 символов',
      validationLink: 'Здесь должна быть ссылка'
    };

    let errorText = '';
    const errorLabel = event.target.nextElementSibling;
    const showError = () => errorLabel.parentNode.classList.add('input-container__invalid');

    if (event.target.validity.valueMissing) {
      errorText = errors.validationEmpty;
      showError();
    }
        
    if (event.target.validity.tooShort) {
      errorText = errors.validationLenght;
      showError();
    }

    if (event.target.name === 'link' && event.target.validity.typeMismatch) {
      errorText = errors.validationLink;
      showError();
    }

    if (event.target.validity.valid) {
      errorLabel.classList.remove('input-container__invalid');
    }

    errorLabel.textContent = errorText;
  }

  setSubmitButtonState(event) {
    const popup = event.target.closest('.popup');
    const button = popup.querySelector('.popup__button');
    const el1 = event.target.form[0];
    const el2 = event.target.form[1];

    if(el1.validity.valid && el2.validity.valid) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', true);
    }
  }

  setEventListeners() {
    this.element.addEventListener('input', this.setSubmitButtonState);
    this.element.addEventListener('input', this.checkInputValidity);
  }

}
