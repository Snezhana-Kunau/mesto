//const errorMessages = {
//    nameError: 'Напишите название места длиной 2 буквы минимум'
//}
//console.log("приветики")


export class FormValidator {
    constructor (){
    this._formSelector = '.popup__info',
    this._inputSelector = '.popup__item',
    this._submitButtonSelector = '.popup__submit-button',
    this._inactiveButtonClass = 'popup__submit-button_disabled',
    this._inputErrorClass = 'popup__item_state_invalid',
    this._errorClass = 'popup__error'
    }

    enableValidation () {
        const formList = Array.from(document.querySelectorAll(this._formSelector));
    
        formList.forEach((form) => {
            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
           // const fieldsetList = form.querySelector(this._submitButtonSelector);
            const buttonElement = form.querySelector(this._submitButtonSelector);
    
            this._setEventListeners(form, buttonElement);
            this._toggleButtonState(buttonElement, form.checkValidity())
            
            
        });
        }

    _showError(inputElements) {
   // if (inputElements.validity.tooShort) {
     //   inputElements.setCustomValidity(errorMessage);
   // }

    const errorElement = document.querySelector(`#${inputElements.id}-error`);
    errorElement.textContent = inputElements.validationMessage;
    inputElements.classList.add(this._inputErrorClass);
    //errorElement.classList.add('.popup__error')
    }

    _hideError(inputElements) {
    const errorElement = document.querySelector(`#${inputElements.id}-error`);
    inputElements.classList.remove(this._inputErrorClass);
    errorElement.classList.remove('.popup__error');
    errorElement.textContent = '';
    }

    _checkInputValidity (input) {
    input.setCustomValidity('');

    if (!input.validity.valid) {
        this._showError(input);
    } else {
        this._hideError(input);
        
    }
    }

    _hasInvalidInput (inputList){
    return inputList.some((inputElements) => {
    return !inputElements.validity.valid;
    });
    } 

    _toggleButtonState(buttonElement, isActive) {
    if (isActive) {
        buttonElement.disabled = false;
        buttonElement.classList.remove(this._inactiveButtonClass);
        
    } else {
        buttonElement.disabled = true;
        buttonElement.classList.add(this._inactiveButtonClass);
        
    }
    
    }

    _setEventListeners (formElement, buttonElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    
    inputList.forEach(inputElements => {
        inputElements.addEventListener('input', (evt) => {
            this._checkInputValidity(evt.target);

            const isAllValid = formElement.checkValidity();
            this._toggleButtonState(buttonElement, isAllValid);
        });
    });

    }
}