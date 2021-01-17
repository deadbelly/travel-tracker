import User from './User';
import Trip from './Trip';
import Destination from './Destination';

import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';

import './css/base.scss';
import './images/profpic.png';
import './images/icons/suitcase-icon.png'
import './images/icons/location-icon.png'
import './images/icons/map-icon.png'
import './images/icons/ticket-icon.png'
import './images/icons/globe-icon.png'
import './images/icons/calendar-icon.png'

let user;
let destinations;

const loginPage = document.querySelector('.login-page');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

const sidebar = document.querySelector('.sidebar');

const main = document.querySelector('main');
const tripList = document.querySelector('.trip-list');

const startDateInput = document.querySelector('.trip-start');
const endDateInput = document.querySelector('.trip-end');
const formInputs = document.querySelectorAll('.new-trip-form__input');
const destinationList = document.querySelector('.destination-list')
const travelersInput = document.querySelector('.num-travelers');

loginButton.addEventListener('click', fetchAndLoadDataModel)
startDateInput.addEventListener('input', setEndMin)
formInputs.forEach(input => addEventListener('input', updateCostMessage))


function fetchAndLoadDataModel() {
  event.preventDefault;
  const username = usernameInput.value;
  const id = username.match(/\d+/)[0]
  const password = passwordInput.value;

  Promise.all(fetchRequests.getAllData(id))
    .then(responses => {
      if (checkLoginCredentials(responses[0], username, password, id)) {
        generateClasses(responses[0], responses[1], responses[2]);
        console.log(responses[1])
        displayAllTrips();
        domUpdates.displaySidebar(user, sidebar);
        domUpdates.toggleHidden(loginPage);
        domUpdates.toggleHidden(main);
        domUpdates.toggleHidden(sidebar);
        setStartMin()
        document.querySelector('.plan-trip-button').classList.toggle('hidden')
        document.querySelector('.plan-trip-button').addEventListener('click', toggleFormView)
        document.querySelector('.book-trip-button').addEventListener('click', bookTrip);
        domUpdates.displayDestinationOptions(destinations, document.querySelector('.destination-list'))
      } else if (responses[0].message) {
        alert('LOGIN FAILED\ninvalid username');
      } else {
        alert('LOGIN FAILED\ninvalid password');
      }
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

function toggleFormView() {
  document.querySelector('.welcome-message').classList.toggle('hidden');
  document.querySelector('.plan-trip-button').classList.toggle('hidden');
  document.querySelector('.new-trip-form').classList.toggle('hidden');
  document.querySelector('.book-trip-button').classList.toggle('hidden');
}

function bookTrip() {
  event.preventDefault()

  fetchRequests.getTrips().then(response => {
    fetchRequests.postTrip(getObjectFromInputs(response)).then(response => {
      Promise.all(fetchRequests.getAllData(user.id)).then(responses => {
        generateClasses(responses[0], responses[1], responses[2]);
        domUpdates.clearTrips(tripList)
        displayAllTrips();
        toggleFormView();
      });
    });
  });
}

function getObjectFromInputs(trips) {
  return {
    id: trips.trips.length + 1,
    userID: user.id,
    destinationID: parseInt(destinationList.value),
    travelers: travelersInput.value,
    date: new Date(startDateInput.value).toISOString().substring(0, 10).replaceAll('-', '/'),
    duration: (new Date(endDateInput.value).getTime() - new Date(startDateInput.value).getTime())/(1000*60*60*24),
    status: 'pending',
    suggestedActivities: []
  }
}


function setEndMin() {
  let nextDay = new Date();
  nextDay.setDate(new Date(startDateInput.value).getDate() + 1);
  endDateInput.setAttribute('min', nextDay.toISOString().substring(0, 10));
}

function setStartMin() {
  startDateInput.setAttribute('min', new Date().toISOString().substring(0, 10));
}

function updateCostMessage() {
  if (startDateInput.value && endDateInput.value) {
    const trip = new Trip(getObjectFromInputs({trips: []}), destinations)
    domUpdates.displayCostMessage(trip)
  } else {
    domUpdates.displayPendingMessage();
  }
}
