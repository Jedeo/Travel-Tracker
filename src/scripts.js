//import class
import Trips from "../src/components/Trips";
import Traveler from "../src/components/Traveler";
import Destinations from "./components/Destinations";
const dayjs = require("dayjs");
//api import
import { getRequest } from "../src/apis/apiRequests";
import { postRequest } from "../src/apis/apiRequests";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import "./images/tune.png";
import "./images/search.png";
import "./images/logout.png";
import "./images/flying.png";
import "./images/cancel.png";

//CSS (SCSS) file import
import "./css/styles.css";
import "./css/login.css";
import { locale } from "dayjs";

//querySelectors
let locationInput = document.getElementById("location");

const loginButton = document.querySelector(".login-button");
const formSection = document.querySelector(".form-back");

const welcomeTraveler = document.querySelector(".welcome-traveler");
const availableDestinations = document.querySelector(".destination");
const submitButton = document.querySelector(".form-submit-button");
const cancelButton = document.querySelector(".cancel-icon");
const totalAmount = document.querySelector(".total-for-trip");
const numOfTravelers = document.getElementById("numOfTravelers");
const logout = document.querySelector(".logout-logo");

let nightStay;
let flight;
let travelerBookedTrip;
let travelerDate;
let destination;
let travelerTrips;
let traveler;
//let currentTraveler = parseInt(localStorage.getItem("username"));
let travelerRequestedDestination;

//EventListener

window.location.replace("index.html")

if (loginButton !== null) {
  loginButton.addEventListener("click", checkTravelerLogin);
}

if (availableDestinations !== null)
  availableDestinations.addEventListener("click", getLocations);

if (submitButton !== null) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    const userInput = document.getElementById("checkIn");
    travelerDate = userInput.value;
    travelerRequest();
    formSection.classList.add("hidden");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  fetchPromise();
});

if (cancelButton !== null) {
  cancelButton.addEventListener("click", () => {
    formSection.classList.add("hidden");
  });
}

// if (logout !== null) {
//   logout.addEventListener("click", () => {
//     window.location.replace("index.html");
//   });
// }

//function()

// function checkTravelerLogin() {
//   const travelersLogin = traveler.getUserLogin();
//   localStorage.setItem("username", traveler.getCurrentTraveler(username.value));
//   if (travelersLogin[username.value] && password.value === "travel") {
//     window.location.replace("dashboard.html");
//   } else {
//     document.querySelector(".validation").innerHTML =
//       "Your username or password is incorrect please try again";
//   }
// }

//fetch requests
export function fetchPromise() {
  const requests = Promise.all([
    getRequest("travelers"),
    getRequest("trips"),
    getRequest("destinations"),
  ]).then((data) => {
    assign(data);
    displayTrips();
    disPlayTripAmount();
  }).catch(error => error)

  return requests;
}

//
function travelerRequest() {
  let type = "trips";
  let request = {
    id: Date.now(),
    userID: traveler.travelers[Math.floor(Math.random() * traveler.travelers.length)].id,
    destinationID: travelerRequestedDestination,
    travelers: parseInt(numOfTravelers.value),
    date: dayjs(travelerDate.toString()).format("YYYY/MM/DD").toString(),
    duration: getTripDuration(),
    status: "pending",
    suggestedActivities: [],
  };
  postRequest(type, request).then((response) => {
    assign(response);
  });
  fetchPromise();
}

function displayTrips() {
  const filter = document.querySelector(".filter-logo");
  if (filter !== null) {
    filter.src = "./images/tune.png";
    logout.src = "./images/logout.png";
  }

  // document.querySelector(".web-logo").src = "./images/flying.png";
  getUpcomingTrips();
  getPastTrips();
  displayTravelerWelcomeMessage();
  displayFullName();
  getCurrentTrips();
}

//passing arguments to classes from the data that is fetched
function assign(data) {
  traveler = new Traveler(data[0].travelers);
  travelerTrips = new Trips(data[1].trips);
  destination = new Destinations(data[2].destinations);
  getAllDestinations(data[2].destinations);
}

//displaying a welcoming message with user first name
function displayTravelerWelcomeMessage() {
  welcomeTraveler.innerHTML = `
    <header> <h1 class="welcome"> Hello ${traveler.getFirstName(
      traveler.travelers[Math.floor(Math.random() * traveler.travelers.length)].id
    )}! </h1> </header>
    <p> Where will you go next? </p>`;
}

//displaying user full name.
function displayFullName() {
  const fullName = document.querySelector(".full-name");
  fullName.innerHTML = `${traveler.getFullName(traveler.travelers[Math.floor(Math.random() * traveler.travelers.length)].id)}`;
}

//displaying trips that are past the current date
function getUpcomingTrips() {
  const travelerFutureTrips = destination.getUpcomingDTrips(
    travelerTrips.getUserTrip(traveler.travelers[Math.floor(Math.random() * traveler.travelers.length)].id)
  );

  const upComingTrips = document.querySelector(".upcoming-trips");
  upComingTrips.innerHTML = "";
  if (typeof travelerFutureTrips !== "string") {
    travelerFutureTrips.forEach((destination) => {
      upComingTrips.innerHTML += `
         <figure class="scroll">
            <img class="destination-img" src="${destination.image}" alt="${destination.alt}">
            <div>
            <figcaption> ${destination.destination} </figcaption>
            <p class="figure-info">  $${destination.estimatedLodgingCostPerDay} night</p>
            <p class="figure-info"> $${destination.estimatedFlightCostPerPerson} flights / PerPerson  </p>
            </div>
        </figure>`;
    });
  } else {
    upComingTrips.innerHTML += `<p> ${travelerFutureTrips} </p>`;
  }
}

//displaying trips that are before the current date
function getPastTrips() {
  const travelerPastTrips = destination.getTravelerPastTrips(
    travelerTrips.getUserTrip(traveler.travelers[Math.floor(Math.random() * traveler.travelers.length)].id)
  );
  const upComingTrips = document.querySelector(".past-trips");
  upComingTrips.innerHTML = " ";

  if (typeof travelerPastTrips !== "string") {
    travelerPastTrips.forEach((destination) => {
      upComingTrips.innerHTML += `
           <figure class="scroll">
              <img class="destination-img" src="${destination.image}" alt="${destination.alt}">
              <div class="info">
              <figcaption> ${destination.destination} </figcaption>
              <p class="figure-info">  $${destination.estimatedLodgingCostPerDay} night</p>
              <p class="figure-info"> $${destination.estimatedFlightCostPerPerson} flights / PerPerson  </p>
              </div>
          </figure>`;
    });
  } else {
    upComingTrips.innerHTML = `<p> ${travelerPastTrips} <p>`;
  }
}

function getAllDestinations(destinations) {
  const availableDestinations = document.querySelector(".destination");
  if (availableDestinations !== null) {
    availableDestinations.innerHTML = "";
    destinations.forEach((destination) => {
      availableDestinations.innerHTML += `
                 <figure class="scroll">
                    <img class="destination-img" src="${destination.image}" alt="${destination.alt}">
                    <div class="info">
                    <figcaption class="destination-name"> ${destination.destination} </figcaption>
                    <p class="figure-info">  $${destination.estimatedLodgingCostPerDay} night</p>
                    <p class="figure-info"> $${destination.estimatedFlightCostPerPerson} flights / PerPerson  </p>
                    </div>
                </figure>`;
    });
  }
  showYearlySpending(destinations)
}

function getCurrentTrips() {
  const travelerCurrentTrip = destination.getCurrentDestinations(
    travelerTrips.getUserTrip(traveler.travelers[Math.floor(Math.random() * traveler.travelers.length)].id)
  );
  const currentTrips = document.querySelector(".current-trips");
  currentTrips.innerHTML = "";

  if (typeof travelerCurrentTrip !== "string") {
    travelerCurrentTrip.forEach((destination) => {
      currentTrips.innerHTML += `
               <div class="scroll">
                    <div class='picture'>
                  <img class="destination-img" src="${destination.image}" alt="${destination.alt}">
                  <div>
                  <div class="info">
                  <figcaption class="destination-name"> ${destination.destination} </figcaption>
                  <p class="figure-info">  $${destination.estimatedLodgingCostPerDay} night</p>
                  <p class="figure-info"> $${destination.estimatedFlightCostPerPerson} flights / PerPerson  </p>
                  </div>
              </div>`;
    });
  } else {
    currentTrips.innerHTML = `${travelerCurrentTrip}`;
  }
}

//event delegation for selecting a destination.
function getLocations(event) {
  const selectedDestination = event.target.closest(".scroll");
  
  if (!selectedDestination) {
    return;
  }
  formSection.classList.remove("hidden");
  document.querySelector(".cancel-icon").src = "./images/cancel.png";
  locationInput.value = selectedDestination.innerText.split("\n")[0];

  travelerBookedTrip = selectedDestination.innerText.split("\n");
  nightStay = travelerBookedTrip[2].split(" ")[0].split("$")[1];
  flight = travelerBookedTrip[4].split(" ")[0].split("$")[1];

  travelerRequestedDestination = destination.getSearchedLocation(
    selectedDestination.innerText.split("\n")[0]
  );
  
}

//displaying how much a requested trip will cost.
function disPlayTripAmount() {
  let numberOfTravelersForTrip = parseInt(numOfTravelers.value);
  if (numberOfTravelersForTrip <= 0) {
    totalAmount.innerHTML = `Total: $${0}`;
  } else {
    numOfTravelers.addEventListener("keyup", () => {
      let numberOfTravelersForTrip = numOfTravelers.value;

      let tripDuration = getTripDuration();

      const total =
        (nightStay * tripDuration + flight * numberOfTravelersForTrip) * 1.1;
      totalAmount.innerHTML = `Total: $${parseInt(total)}`;
    });
  }
}

function getTripDuration() {
  const checkIn = document.getElementById("checkIn");
  const checkOut = document.getElementById("checkOut");
  const checkInDate = dayjs(checkIn.value.toString())
    .format("YYYY/MM/DD")
    .toString();
  const checkOutDat = dayjs(checkOut.value.toString())
    .format("YYYY/MM/DD")
    .toString();

  return travelerTrips.getTripDuration(checkOutDat, checkInDate);
}

function showYearlySpending(destinations){
    const currentDate = dayjs().year().toString();
    let randomUser = traveler.travelers[Math.floor(Math.random() * traveler.travelers.length)].id
    const userTrips = travelerTrips.getUserTrip(randomUser)
    document.querySelector('.yearly-spending').innerHTML = `Amount Spent this Year: $${travelerTrips.getYearlySpending(userTrips,currentDate,destinations)}`
}