//const popup = document.querySelectorAll('.popup');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_secondname');


// открытие попапов
const buttonOpenPopup = document.querySelector('.button_type_editor');
const addButton = document.querySelector('.button_type_add-button');
const popupTypeEditForm = document.querySelector('.popup_type_edit-form');
const popupTypeAddCards = document.querySelector('.popup_type_add-cards');

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
const buttonLike = document.querySelector('.button__like');
const buttonTypeDelit = document.querySelector('.button_type_delit');
const cards = document.querySelector('.cards');

const template = document.querySelector('#template').content;
const input = document.querySelector('.card__text');
const cardImage = document.querySelector('.card__image');
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
  popup.classList.toggle('popup_opened')
}
//открытие попапов
addButton.addEventListener('click', function(){
  togglePopup(popupTypeAddCards)
});

buttonOpenPopup.addEventListener('click', function(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileSurname.textContent;
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


//удаление карточек
const removeCards = (e) => {
  const card = e.target.closest('.card');
  card.remove();
};


//лайки
function addLikeActive (e){
  e.target.classList.toggle('button__like_type_active');
}



function addCard (nameValue, linkValue) {
  const card = template.cloneNode(true);
  card.querySelector('.card__text').textContent = nameValue;
  card.querySelector('.card__image').src = linkValue;
  card.querySelector('.card__image').alt = nameValue;
  card.querySelector('.card__image').addEventListener('click', function(e){
    popupImgBigPicture.src = e.target.src;
    popupImgBigPicture.alt = e.target.alt;
    popupImgText.textContent = e.target.alt
    togglePopup(popupTypeImage);
  });
  card.querySelector('.button_type_delit').addEventListener('click', removeCards);
  card.querySelector('.button__like').addEventListener('click', addLikeActive);
  return card;
}

//добавление карточки
function addCardList (nameValue, linkValue){
  cardContainer.prepend(addCard(nameValue, linkValue));
};

//рендер карточек на экран
function renderCards () {
  initialCards.forEach(element => addCardList(element.name, element.link));
}
renderCards();



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
  addCardList(place.value, adress.value)
  togglePopup(popupTypeAddCards);
  place.value = '';
  adress.value = '';
};
const formCard = document.querySelector('.popup__info_type_cards');
formCard.addEventListener('submit', submitCardForm);