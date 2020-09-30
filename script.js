console.log('Привет, мир!');
const popap = document.querySelector('.popap');

const buttonOpenPopap = document.querySelector('.profile__editor');
buttonOpenPopap.addEventListener('click', () => (popap.style.display = 'block'));


const buttonClosePopap = document.querySelector('.popap__close-icon');
buttonClosePopap.addEventListener('click', () => (popap.style.display = 'none'));


const formSubmitHandler = (e) => {
  e.preventDefault(); //cancel the default event action
  //Get input value
  const nameInput = document.querySelector('.popap__name').value;
  const jobInput = document.querySelector('.popap__secondname').value;
  //Change span text
  document.querySelector('.profile__name').textContent = nameInput;
  document.querySelector('.profile__surname').textContent = jobInput;
  //Close popup
  popap.style.display = 'none';
};
const form = document.querySelector('.popap__info');
form.addEventListener('submit', formSubmitHandler);