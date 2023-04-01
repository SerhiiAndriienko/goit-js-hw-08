var _ = require('lodash');

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
let FORM_OBJECT = localStorage.getItem('feedback-form-state');
let parseFormObject = JSON.parse(FORM_OBJECT);
let inputValue = '';
let messageValue = '';
formEl.addEventListener('submit', clickOnSubmitBtn);
messageEl.addEventListener('input', _.throttle(getMessageValue, 500));
inputEl.addEventListener('input', _.throttle(getInputValue, 500));

if (FORM_OBJECT) {
  inputEl.value = `${parseFormObject.email}`;
  messageEl.value = `${parseFormObject.message}`;
}

function getInputValue(event) {
  inputValue = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ message: `${messageValue}`, email: `${inputValue}` })
  );
}
function getMessageValue(event) {
  messageValue = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ message: `${messageValue}`, email: `${inputValue}` })
  );
}
function clickOnSubmitBtn(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();

  inputEl.value = '';
  messageEl.value = '';
}
