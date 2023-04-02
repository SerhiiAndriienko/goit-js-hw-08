var _ = require('lodash');

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
let FORM_OBJECT = localStorage.getItem('feedback-form-state');
let parseFormObject = JSON.parse(FORM_OBJECT);
let inputValue = '';
let messageValue = '';
const key = 'feedback-form-state';
formEl.addEventListener('submit', clickOnSubmitBtn);
messageEl.addEventListener('input', _.throttle(getMessageValue, 500));
inputEl.addEventListener('input', _.throttle(getInputValue, 500));

if (FORM_OBJECT) {
  console.log(parseFormObject.email);
  console.log(parseFormObject.message);

  inputEl.value = `${parseFormObject.email}`;
  messageEl.value = `${parseFormObject.message}`;
}

function getInputValue(event) {
  inputValue = event.target.value;
  messageValue = messageEl.value;
  localStorage.setItem(
    key,
    JSON.stringify({ message: `${messageValue}`, email: `${inputValue}` })
  );
}
function getMessageValue(event) {
  inputValue = inputEl.value;
  messageValue = event.target.value;
  localStorage.setItem(
    key,
    JSON.stringify({ message: `${messageValue}`, email: `${inputValue}` })
  );
}
function clickOnSubmitBtn(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(key)));
  localStorage.removeItem(key);

  inputEl.value = '';
  messageEl.value = '';
}
