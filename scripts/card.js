export class Card {
    constructor(link, name, templateSelector, openPopupImg){
        this._link = link;
        this._name = name;
        this._templateSelector = templateSelector;
        this._openPopupImg = openPopupImg;
        
    }
    
    _getTemplate() {
        const element = document.querySelector(this._templateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return element;
    }  


    generateCard(){
        this._element = document.querySelector(this._templateSelector)
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

        this._element.querySelector('.button_type_delete').addEventListener('click', (evt) => {
            this._removeCard(evt)});

        this._cardPhoto.addEventListener('click', this._openPopupImg)

        this._element.querySelector('.button__like').addEventListener('click', (evt) => {
            this._addLikeActive(evt)}); 
    }

    _addLikeActive (evt){
        evt.target.classList.toggle('button__like_type_active');
    }

    _removeCard (evt) {
        evt.target.closest('.card').remove(); 
    };
};




