const popupElement = document.querySelector('.popup');
//const buttonImgClosePopup = document.querySelector('.button-img_type_close');
const buttonTypeDelit = document.querySelector('.button_type_delit');
const buttonLike = document.querySelector('.button__like');
const popupImgBigPicture = document.querySelector('.popup__picture');

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

export class Card {
    constructor(link, name, templateElement){
        this._link = link;
        this._name = name;
        this._templateElement = templateElement;
        //this._openPopupImg = openPopupImg;
        
    }
    
    _getTemplate() {
        const element = document.querySelector(this._templateElement)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return element;
    }  


    generateCard(){
        this._element = document.querySelector(this._templateElement)
        .content
        .querySelector('.card')
        .cloneNode(true);
        this._cardPhoto = this._element.querySelector('.card__image')
        this._cardPhoto.src = this._link
        this._cardPhoto.alt = this._name
        this._element.querySelector('.card__text').textContent = this._name
        this._setEventListeners();
        
        return this._element;
    }

    _setEventListeners(){  

        this._element.querySelector('.button_type_delit').addEventListener('click', (evt) => {
            this._removeCards(evt)});

        this._element.querySelector('.button__like').addEventListener('click', (evt) => {
            this._addLikeActive(evt)}); 
    }

    _addLikeActive (evt){
        evt.target.classList.toggle('button__like_type_active');
    }

    _removeCards (evt) {
        evt.target.closest('.card').remove(); 
    };

    _closeImageEscape = (evt) => {
        if (evt.key === "Escape") {
            document.querySelector('.popup_type_image').classList.remove('popup_opened');
            document.removeEventListener('keydown', this._closeImageEscape);
        }
    }

    
    
};

/* const openPopupImg = ()=> {
    this._element.src = this._link;
    this._element.alt = this._name;
    //popupImgText.textContent = this._name
    this._popupImgBigPicture.classList.add('popup_opened');
} */ 


/* initialCards.forEach((item) =>{
        const card = new Card(item, '.template')
        const cardElement = card.generateCard();

        document.querySelector('.cards').prepend(cardElement);
});  */


