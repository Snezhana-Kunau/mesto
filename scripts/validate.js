//const errorMessages = {
//    nameError: 'Напишите название места длиной 2 буквы минимум'
//}
//console.log("приветики")




function showError(formElement, inputElements, errorMessage) {
   // if (inputElements.validity.tooShort) {
     //   inputElements.setCustomValidity(errorMessage);
   // }

    const errorElement = formElement.querySelector(`#${inputElements.id}-error`);
    errorElement.textContent = errorMessage;
    inputElements.classList.add('popup__item_state_invalid');
    errorElement.classList.add('.popup__error')
}

function hideError(formElement, inputElements) {
    const errorElement = formElement.querySelector(`#${inputElements.id}-error`);
    inputElements.classList.remove('popup__item_state_invalid');
    errorElement.classList.remove('.popup__error');
    errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElements) => {
    inputElements.setCustomValidity('');

    if (!inputElements.validity.valid) {
        showError(formElement, inputElements, inputElements.validationMessage);
    } else {
        hideError(formElement, inputElements);
        
    }

}

function hasInvalidInput (inputList){
    return inputList.some((inputElements) => {
    return !inputElements.validity.valid;
});
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput (inputList)) {
        buttonElement.classList.add('popup__submit-button_disabled');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('popup__submit-button_disabled');
        buttonElement.disabled = false;
    }
    
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__item"));
    const buttonElement = formElement.querySelector('.popup__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElements) => {
        inputElements.addEventListener('input', function ()  {
            checkInputValidity(formElement, inputElements);
            toggleButtonState(inputList, buttonElement);
        });
    });

    toggleButtonState(inputList, buttonElement);
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__info'));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            setEventListeners(formElement);
        });
        const fieldsetList = Array.from(document.querySelectorAll('.popup__info-text'));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        })
        
    });
}

enableValidation( {
    formSelector: '.popup__info',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error'
})