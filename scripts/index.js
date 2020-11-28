import {  Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
//const popup = document.querySelectorAll('.popup');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_secondname');


// открытие попапов
const buttonOpenPopup = document.querySelector('.button_type_editor');
const addButton = document.querySelector('.button_type_add-button');
const popupTypeEditForm = document.querySelector('.popup_type_edit-form');
const popupTypeAddCards = document.querySelector('.popup_type_add-cards');
const buttonElement = document.querySelector('.popup__submit-button');

//закрытие попапов
const buttonClosePopup = document.querySelector('.button_type_close');
const buttonClosePopupAdd = document.querySelector('.button-add_type_close');
const buttonImgClosePopup = document.querySelector('.button-img_type_close');

//профиль
const profileName = document.querySelector('.profile__name');
const profileSurname = document.querySelector('.profile__surname');

//карточки
const place = document.querySelector('.popup__item_type_place');
const adress = document.querySelector('.popup__item_type_adress');
const cardContainer = document.querySelector('.cards');

const popupTypeImage = document.querySelector('.popup_type_image');

const popupImgBigPicture = document.querySelector('.popup__picture');
const popupImgText = document.querySelector('.popup__text');
const popupFullscreen = document.querySelector('.popup__fullscreen');




const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

  const togglePopup = function(popup) {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains("popup_opened")){
    document.addEventListener('keydown', closePopupEsc)
  } else{
    document.removeEventListener('keydown', closePopupEsc)
  }

}; 

const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(evt.target === evt.currentTarget){
      togglePopup(popup);
    }
  });
})


const closePopupEsc = (evt) =>{
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    togglePopup(openedPopup)
}
}

//открытие попапов
addButton.addEventListener('click', function(){
  togglePopup(popupTypeAddCards)
});

buttonOpenPopup.addEventListener('click', function(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileSurname.textContent;
  //buttonElement.classList.remove('popup__submit-button_disabled');
  togglePopup(popupTypeEditForm);
});

//закрытие попапов
buttonImgClosePopup.addEventListener('click', function(){
  togglePopup(popupTypeImage);
});

buttonClosePopupAdd.addEventListener('click', function(){
  togglePopup(popupTypeAddCards);
});

buttonClosePopup.addEventListener('click', function(){
  togglePopup(popupTypeEditForm);
});

//открытие попапа с картинкой большой
const openPopupImg = (e) => {
  popupImgBigPicture.src = e.target.src;
  popupImgBigPicture.alt = e.target.alt;
  popupImgText.textContent = e.target.alt
  togglePopup(popupTypeImage);
}; 


function addCard (data){
  const cardElement = createCard(data);
  cardContainer.prepend(cardElement);
}

function createCard(data) {
  const card = new Card (data.link, data.name, '#template', openPopupImg);
  const cardElement = card.generateCard();
  return cardElement
}

//рендер карточек на экран
  initialCards.forEach(element => addCard(element));


const submitProfileForm = (e) =>{
  e.preventDefault(); //cancel the default event action
  profileSurname.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  togglePopup(popupTypeEditForm);
};
const formProfile = document.querySelector('.popup__info_type_profile');
formProfile.addEventListener('submit', submitProfileForm);

const submitCardForm = (e) =>{
  e.preventDefault(); //cancel the default event action
  addCard({name: place.value, link: adress.value})
  togglePopup(popupTypeAddCards);
  place.value = '';
  adress.value = '';
};
const formCard = document.querySelector('.popup__info_type_cards');
formCard.addEventListener('submit', submitCardForm);

const config = {
    formSelector: '.popup__info',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__item_state_invalid',
    errorClass: 'popup__error',
}

const cardValidator = new FormValidator(config, formCard)
cardValidator.enableValidation()
const profileValidator = new FormValidator(config, formProfile)
profileValidator.enableValidation()