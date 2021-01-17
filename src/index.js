// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import User from './User';
import Trip from './Trip';
import Destination from './Destination';

import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/profpic.png'

let user;
let destinations;

const loginPage = document.querySelector('.login-page');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

const navBar = document.querySelector('.navbar');

const main = document.querySelector('main');
const tripList = document.querySelector('.trip-list');

// loginButton.addEventListener('click', fetchAndLoadDataModel)
window.addEventListener('load', fetchAndLoadDataModel)

function fetchAndLoadDataModel() {
  event.preventDefault;
  const username = usernameInput.value;
  const id = username.match(/\d+/)[0]
  const password = passwordInput.value;

  Promise.all(fetchRequests.getAllData(45))
    .then(responses => {
      // if (checkLoginCredentials(responses[0], username, password, id)) {
        generateClasses(responses[0], responses[1], responses[2]);
        domUpdates.toggleHidden(loginPage);
        domUpdates.toggleHidden(main);
        domUpdates.toggleHidden(navBar);
        displayAllTrips();
        domUpdates.displayNavBar(user, navBar);
      // } else if (responses[0].message) {
      //   alert('LOGIN FAILED\ninvalid username');
      // } else {
      //   alert('LOGIN FAILED\ninvalid password');
      // }
    });
}

function generateClasses(userData, tripData, destinationData) {
  destinations = destinationData.destinations.map(data => new Destination(data));
  user = new User(userData, tripData.trips, destinations);
}


function checkLoginCredentials(response, username, password, id) {
  if(username === `traveler${id}` && password === 'travel2020' && response.id == id) {
    return true;
  };
}

function displayAllTrips() {
  user.trips.forEach(trip => {
    domUpdates.displayTrip(trip, destinations, tripList)
  });
}
