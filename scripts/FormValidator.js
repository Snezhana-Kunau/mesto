export class FormValidator {
    constructor (config, formElement){
        this._formElement = formElement;
        this._formSelector = config.formSelector 
        this._inputSelector = config.inputSelector 
        this._submitButtonSelector = config.submitButtonSelector 
        this._inactiveButtonClass = config.inactiveButtonClass 
        this._inputErrorClass = config.inputErrorClass 
        this._errorClass = config.errorClass 
    }

    enableValidation () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        this._setEventListeners(this._formElement, buttonElement);
        this._toggleButtonState(buttonElement, this._formElement.checkValidity())
    }

    _showError(inputElements) {
    const errorElement = document.querySelector(`#${inputElements.id}-error`);
    errorElement.textContent = inputElements.validationMessage;
    inputElements.classList.add(this._inputErrorClass);
    
    }

    _hideError(inputElements) {
    const errorElement = document.querySelector(`#${inputElements.id}-error`);
    inputElements.classList.remove(this._inputErrorClass);
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