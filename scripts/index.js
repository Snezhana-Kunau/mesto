const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.button_type_editor');
const opened = document.querySelector('.popup_opened');
const nameInput = document.querySelector('.popup_type_name');
const jobInput = document.querySelector('.popup_type_secondname');
const buttonClosePopup = document.querySelector('.button_type_close');
const profileName = document.querySelector('.profile__name');
const profileSurname = document.querySelector('.profile__surname');


function openPopup (){
  popup.classList.add("popup_opened");
  profileName.value = nameInput; 
  profileSurname.value = jobInput;
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