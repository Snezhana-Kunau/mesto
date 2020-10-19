const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.button_type_editor');

const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_secondname');
const buttonClosePopup = document.querySelector('.button_type_close');
const profileName = document.querySelector('.profile__name');
const profileSurname = document.querySelector('.profile__surname');

const addButton = document.querySelector('.button_type_add-button');
//const popupAdd = document.querySelector('.popup-add');
const place = document.querySelector('.popup__item_type_place');
const adress = document.querySelector('.popup__item_type_adress');
const buttonClosePopupAdd = document.querySelector('.button-add_type_close');
const popupTypeAddCards = document.querySelector('.popup_type_add-cards');
const cardContainer = document.querySelector('.cards');
const buttonLike = document.querySelector('.button__like');
const buttonTypeDelit = document.querySelector('.button_type_delit');
const cards = document.querySelector('.cards');
const template = document.querySelector('#template').content;
const input = document.querySelector('.card__text');
const cardImage = document.querySelector('.card__image');
const popupTypeImage = document.querySelector('.popup_type_image');
const buttonImgClosePopup = document.querySelector('.button-img_type_close');
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

//удаление карточек
const removeCards = (e) => {
  const card = e.target.closest('.card');
  card.remove();
};

//открытие попапа с фото
function openPopupImg (e){
  popupTypeImage.classList.add('popup_opened');
  popupImgBigPicture.src = e.target.src;
  popupImgBigPicture.alt = e.target.alt;
  popupImgText.textContent = e.target.alt
}

//лайки
function likeAddActive (e){
  e.target.classList.toggle('button__like_type_active');
}

//попап с картинками
function closePopupImg (){
  popupTypeImage.classList.remove('popup_opened');
}
buttonImgClosePopup.addEventListener('click', closePopupImg);


function addCard (nameValue, linkValue) {
  const card = template.cloneNode(true);
  card.querySelector('.card__text').textContent = nameValue;
  card.querySelector('.card__image').src = linkValue;
  card.querySelector('.card__image').addEventListener('click', openPopupImg);
  card.querySelector('.button_type_delit').addEventListener('click', removeCards);
  card.querySelector('.button__like').addEventListener('click', likeAddActive);
  return card;
}

//добавление карточки
function addCardList (nameValue, linkValue){
  cardContainer.prepend(addCard(nameValue, linkValue));
};

function renderCards () {
  initialCards.forEach(element => addCardList(element.name, element.link));
}
renderCards();


//открыть, закрыть попап с добавлением карточек
function openPopupAdd (){
  popupTypeAddCards.classList.add('popup_opened');
}

function closePopupAdd (){
  popupTypeAddCards.classList.remove('popup_opened');
}
addButton.addEventListener('click', openPopupAdd);
buttonClosePopupAdd.addEventListener('click', closePopupAdd);


// Change name and job contact info
function openPopup (){
  nameInput.value = profileName.textContent;
  jobInput.value = profileSurname.textContent;
  popup.classList.add("popup_opened");
}

function closePopup(){
  popup.classList.remove("popup_opened");
}

buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);


const formSubmitProfile = (e) =>{
  e.preventDefault(); //cancel the default event action
  profileSurname.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup();
};
const formProfile = document.querySelector('.popup__info_type_profile');
formProfile.addEventListener('submit', formSubmitProfile);

const formSubmitCard = (e) =>{
  e.preventDefault(); //cancel the default event action
  addCardList(place.value, adress.value)
  closePopupAdd();
  place.value = '';
  adress.value = '';
};
const formCard = document.querySelector('.popup__info_type_cards');
formCard.addEventListener('submit', formSubmitCard);