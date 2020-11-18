const popupElement = document.querySelector('.popup');
//const buttonImgClosePopup = document.querySelector('.button-img_type_close');
//const buttonTypeDelit = document.querySelector('.button_type_delit');
//const buttonLike = document.querySelector('.button__like');
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
    constructor(data, templateSelector){
        
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(templateSelector).content;
        
    }
    
    _getTemplate() {
        const element = document
        .querySelector(this._templateSelector)
        //.content
        //.querySelector('.card')
        //.cloneNode(true);

        return element;
    } 

   /*  render(container){
        this._content = this._cardSelector.cloneNode(true);
        this._content.querySelector('.card').textContent = this._name;
        container.prepend(this._content)
    } */

    generateCard(){
        this._element = this._getTemplate();
        //this._setEventListeners();
        this._element.querySelector('.card__image').src = data.link;
        this._element.querySelector('.card__text').textContent = data.name;
        this._element.querySelector('.card__image').alt = data.name;
       // container.append(this._cardElement)
        this._element.querySelector('.card__image').addEventListener('click', () => this._openPopupImg());
        this._element.querySelector('.button_type_delit').addEventListener('click', ()=> this._removeCards());

        this._element.querySelector('.button__like').addEventListener('click', ()=> this._addLikeActive()); 

        return this._element;
    }


    _handleClosePopup(){
        popupImgBigPicture.src = '';
        popupElement.classList.remove('popup_opened');
    }

    _closePopupEsc = (evt) =>{
        if (evt.key === 'Escape') {
            popupElement.classList.remove('popup_opened');
        }
    }

    /*_setEventListeners(){
        this._element.querySelector('.card__image').addEventListener('click', () => this._openPopupImg());  

        this._element.addEventListener('click', ()=>{
            this._handleClosePopup();
        })

        this._element.querySelector('.button_type_delit').addEventListener('click', ()=> this._removeCards());

        this._element.querySelector('.button__like').addEventListener('click', ()=> this._addLikeActive()); 
    }*/

    _addLikeActive (){
        this._element.querySelector('.button__like').classList.toggle('button__like_type_active');
    }

    _removeCards () {
        this._element.remove(); 
    };

    _openPopupImg () {
        this._element.src = this._link;
        this._element.alt = this._name;
        //popupImgText.textContent = this._name
        this._popupImgBigPicture.classList.add('popup_opened');
    };
    
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


