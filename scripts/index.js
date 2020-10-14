const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.button_type_editor');

const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_secondname');
const buttonClosePopup = document.querySelector('.button_type_close');
const profileName = document.querySelector('.profile__name');
const profileSurname = document.querySelector('.profile__surname');

const addButton = document.querySelector('.button_type_add-button');
const popupAdd = document.querySelector('.popup-add');
const nameInputAdd = document.querySelector('.popup-add__item_type_name');
const adress = document.querySelector('.popup-add__item_type_secondname');
const buttonClosePopupAdd = document.querySelector('.button-add_type_close');
const cardContainer = document.querySelector('.cards');
const buttonLike = document.querySelector('.button__like');
const buttonTypeDelit = document.querySelector('.button_type_delit');
const cards = document.querySelector('.cards');
const template = document.querySelector('#template').content;
const input = document.querySelector('.card__text');
const cardImage = document.querySelector('.card__image');

const popupImg = document.querySelector('.popup-img');
const buttonImgClosePopup = document.querySelector('.button-img_type_close');
const popupImgBigPicture = document.querySelector('.popup-img__picture');
const popupImgText = document.querySelector('.popup-img__text');



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


const handlerRemove = (e) => {
  const id = e.target.closest('.card').id;
  initialCards.splice(id, 1);
  renderCards(reRender=true)
};

//Popup img
function openPopupImg (e){
  popupImg.classList.add('popup-img_opened');
  popupImgBigPicture.src = e.target.src;
  popupImgBigPicture.alt = e.target.alt;
  popupImgText.textContent = e.target.alt
}

//лайки
function likeAddActive (e){
  e.target.classList.toggle('button__like_type_active');
}


function closePopupImg (){
  popupImg.classList.remove('popup-img_opened');
}
buttonImgClosePopup.addEventListener('click', closePopupImg);

//добавление карточек
const renderCards = (reRender = false) => {
  if (reRender) cards.innerHTML = "";
  initialCards.map((element, index) => {
    const card = template.cloneNode(true);
    card.querySelector('.card').id =index;
    card.querySelector('.card__text').textContent = element.name;
    card.querySelector('.card__image').src = element.link;
    card.querySelector('.card__image').alt = element.name;
    card.querySelector('.card__image').addEventListener('click', openPopupImg);
    card.querySelector('.button_type_delit').addEventListener('click', handlerRemove);
    card.querySelector('.button__like').addEventListener('click', likeAddActive);
    cardContainer.prepend(card)
  });
  nameInputAdd.value = '';
  adress.value = '';

};


const cardSubmitHandler = (e) =>{
  e.preventDefault(); //cancel the default event action
  initialCards.push({name: nameInputAdd.value, link: adress.value});
  renderCards(reRender = true);
  closePopupAdd();
};
const formCards = document.querySelector('.popup-add__info');
formCards.addEventListener('submit', cardSubmitHandler);


renderCards();

function openPopupAdd (){
  popupAdd.classList.add("popup-add_opened");
}

function closePopupAdd (){
  popupAdd.classList.remove("popup-add_opened");
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


const formSubmitHandler = (e) =>{
  e.preventDefault(); //cancel the default event action
  profileSurname.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup();
};
const form = document.querySelector('.popup__info');
form.addEventListener('submit', formSubmitHandler);