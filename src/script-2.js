import {checkTravelerLogin} from './scripts'

const loginButton = document.querySelector(".login-button");
loginButton.addEventListener("click", checkTravelerLogin);
