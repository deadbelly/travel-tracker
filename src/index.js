import User from './User';
import Trip from './Trip';
import Destination from './Destination';

import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';

import './css/base.scss';
import './images/profpic.png';
import './images/arrow.png';
import './images/icons/map-icon.png';
import './images/icons/ticket-icon.png';
import './images/icons/globe-icon.png';
import './images/icons/suitcase-icon.png';

let user;
let destinations;

const loginPage = document.querySelector('.login-page');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

const sidebar = document.querySelector('.sidebar');
const planTripButton = document.querySelector('.plan-trip-button');

const main = document.querySelector('main');
const tripList = document.querySelector('.trip-list');
const destinationPreview = document.querySelector('.destination-preview');

const startDateInput = document.querySelector('.trip-start');
const endDateInput = document.querySelector('.trip-end');
const formInputs = document.querySelectorAll('.new-trip-form__input');
const destinationList = document.querySelector('.destination-list')
const travelersInput = document.querySelector('.number-of-travelers');
const bookTripButton = document.querySelector('.book-trip-button');
const backButton = document.querySelector('.back-button')

loginButton.addEventListener('click', fetchAndLoadDataModel)
startDateInput.addEventListener('input', setEndMin)
formInputs.forEach(input => addEventListener('input', updateFormDOM))
planTripButton.addEventListener('click', toggleFormView)
bookTripButton.addEventListener('click', bookTrip);
backButton.addEventListener('click', toggleFormView)

function fetchAndLoadDataModel() {
  event.preventDefault;

  Promise.all(fetchRequests.getAllData(checkLoginCredentials()))
    .then(responses => {
      if (!responses[0].message) {
        initializeDOM(responses[0], responses[1], responses[2])
      } else {
        domUpdates.displayLoginError('LOGIN FAILED\ninvalid username');
      }
  });
}

function generateClasses(userData, tripData, destinationData) {
  destinations = destinationData.destinations.map(data => new Destination(data));
  user = new User(userData, tripData.trips, destinations);
}


function checkLoginCredentials() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  let id;

  if (username.match(/\d+/) !== null) {
    id = username.match(/\d+/)[0]
  }

  if(!id || username !== `traveler${id}`) {
    domUpdates.displayLoginError('LOGIN FAILED\ninvalid username');
  } else if (!password === 'travel2020') {
    domUpdates.displayLoginError('LOGIN FAILED\ninvalid password');
  } else {
    return id
  }
}

function displayAllTrips() {
  user.trips.forEach(trip => {
    domUpdates.displayTrip(trip, destinations, tripList);
  });
}

function toggleFormView() {
  document.querySelector('.welcome-message').classList.toggle('hidden');
  planTripButton.classList.toggle('hidden');
  document.querySelector('.new-trip-form').classList.toggle('hidden');
  bookTripButton.classList.toggle('hidden');
  destinationPreview.classList.toggle('hidden');
  tripList.classList.toggle('hidden');
  backButton.classList.toggle('hidden');
  domUpdates.clearErrors();
  if(tripList.classList.contains('hidden')) {
    domUpdates.updatePreview(destinationPreview, destinationList, destinations);
  }
}

function bookTrip() {
  event.preventDefault()
  if (!startDateInput.value || !endDateInput.value) {
    domUpdates.displayFormError('please fill out all required inputs');
  }
  fetchRequests.getTrips().then(response => {
    fetchRequests.postTrip(getObjectFromInputs(response)).then(response => {
      Promise.all(fetchRequests.getAllData(user.id)).then(responses => {
        generateClasses(responses[0], responses[1], responses[2]);
        displayTrips();
        toggleFormView();
      });
    });
  });
}

function displayTrips() {
  domUpdates.clearTrips(tripList);
  displayAllTrips();
}

function initializeDOM(userData, recipeData, destinationData) {
  generateClasses(userData, recipeData, destinationData);
  displayTrips();
  domUpdates.displaySidebar(user, sidebar);
  loginPage.classList.toggle('hidden');
  main.classList.toggle('hidden');
  sidebar.classList.toggle('hidden');
  setStartMin();
  planTripButton.classList.toggle('hidden');
  domUpdates.displayDestinationOptions(destinations, document.querySelector('.destination-list'));
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

function updateFormDOM() {
  if (startDateInput.value && endDateInput.value) {
    const trip = new Trip(getObjectFromInputs({trips: []}), destinations)
    domUpdates.displayCostMessage(trip)
  }
  domUpdates.updatePreview(destinationPreview, destinationList, destinations)
}
