//import class
import Trips from "../src/components/Trips";
import Traveler from "../src/components/Traveler";
import Destinations from "../src/components/Destionations";

//api import
import { getRequest } from "../src/apis/apiRequests";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
//CSS (SCSS) file import
import "./css/styles.css";
import "./css/login.css";

//querySelectors
const loginButton = document.querySelector(".login-button");
const loginSection = document.querySelector(".login-page");
const welcomeTraveler = document.querySelector(".welcome-traveler");

//global variable
let destination;
let travelerTrips;
let traveler;

//EventListener
window.addEventListener("load", () => {
  fetchPromise();
});

//fetch requests
function fetchPromise() {
  const requests = Promise.all([
    getRequest("travelers"),
    getRequest("trips"),
    getRequest("destinations"),
  ]).then((data) => {
    assign(data);
    displayTrips();
  });

  return requests;
}

function displayTrips() {
  getUpcomingTrips();
  getPastTrips();
  displayTravelerWelcomeMessage();
  displayFullName();
}

//passing aregments to classes for data that is fetched
function assign(data) {
  traveler = new Traveler(data[0].travelers[0]);
  travelerTrips = new Trips(data[1].trips);
  console.log(travelerTrips.getUserTrip(1));
  destination = new Destinations(data[2].destinations);
  getAllDestinations(data[2].destinations)
}

//displaying a welcoming message with user first name
function displayTravelerWelcomeMessage() {
  console.log(traveler);
  let splitName = traveler.name.split(" ");
  console.log(splitName);
  welcomeTraveler.innerHTML = `
    <header> <h1 class="welcome"> Hello ${splitName[0]}! </h1> </header>
    <p> Where will you go next? </p>`;
}

//displaying user full name.
function displayFullName() {
  const fullName = document.querySelector(".full-name");
  fullName.innerHTML = `${traveler.name}`;
}

//displaying trips that are past the current date
function getUpcomingTrips() {
  const travelerFutureTrips = destination.getUpcomingDTrips(
    travelerTrips.getUserTrip(35)
  );
  console.log(travelerFutureTrips);
  //const tripSpending;
  const upComingTrips = document.querySelector(".upcoming-trips");

  upComingTrips.innerHTML = "";
  if (typeof travelerFutureTrips !== "string") {
    travelerFutureTrips.forEach((destination) => {
      upComingTrips.innerHTML += `
         <figure class="scroll">
            <img class="destination-img" src="${destination.image}" alt="${destination.alt}"></img>
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
    travelerTrips.getUserTrip(35)
  );
  const upComingTrips = document.querySelector(".past-trips");
  upComingTrips.innerHTML = "";

  if (typeof travelerPastTrips !== "string") {
    travelerPastTrips.forEach((destination) => {
      upComingTrips.innerHTML += `
           <figure class="scroll">
              <img class="destination-img" src="${destination.image}" alt="${destination.alt}"></img>
              <div class="info">
              <figcaption> ${destination.destination} </figcaption>
              <p class="figure-info">  $${destination.estimatedLodgingCostPerDay} night</p>
              <p class="figure-info"> $${destination.estimatedFlightCostPerPerson} flights / PerPerson  </p>
              </div>
          </figure>`;
    });
  } else{
    
    upComingTrips.innerHTML = `<p> ${travelerPastTrips} <p>`
  }
}

function getAllDestinations(destinations){
      const availableDestinations = document.querySelector(".destination");
      availableDestinations.innerHTML = "";
    
      if (typeof AllDestinations !== "string") {
        destinations.forEach((destination) => {
            availableDestinations.innerHTML += `
               <figure class="scroll">
                  <img class="destination-img" src="${destination.image}" alt="${destination.alt}"></img>
                  <div class="info">
                  <figcaption> ${destination.destination} </figcaption>
                  <p class="figure-info">  $${destination.estimatedLodgingCostPerDay} night</p>
                  <p class="figure-info"> $${destination.estimatedFlightCostPerPerson} flights / PerPerson  </p>
                  </div>
              </figure>`;
        });
    }
}