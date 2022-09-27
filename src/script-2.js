import {checkTravelerLogin} from './scripts'
console.log('hello')
const loginButton = document.querySelector(".login-button");
loginButton.addEventListener("click", checkTravelerLogin);
