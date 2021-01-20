import User from './User';
import Trip from './Trip';
import Destination from './Destination';
import Agent from './Agent'

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
const destinationList = document.querySelector('.destination-list');
const travelersInput = document.querySelector('.number-of-travelers');
const bookTripButton = document.querySelector('.book-trip-button');
const backButton = document.querySelector('.back-button');

const filterOptions = document.querySelector('.filter-options');
const showPending = document.querySelector('.show-only-pending');
const showUpcoming = document.querySelector('.show-only-upcoming');
const filterByName = document.querySelector('.filter-by-name');
const filterButton = document.querySelector('.filter-button');

const agentTools = document.querySelector('.agent-tools');
const idSelect = document.querySelector('.id-select');
const suggestedActivities = document.querySelector('.suggested-activities');
const rejectButton = document.querySelector('.reject-button');
const approveButton = document.querySelector('.approve-button');


loginButton.addEventListener('click', fetchAndLoadDataModel);
startDateInput.addEventListener('input', setEndMin);
formInputs.forEach(input => input.addEventListener('input', updateFormDOM));
planTripButton.addEventListener('click', toggleFormView);
bookTripButton.addEventListener('click', bookTrip);
backButton.addEventListener('click', toggleFormView);
filterButton.addEventListener('click', filterTrips);
rejectButton.addEventListener('click', rejectAndRemove);
approveButton.addEventListener('click', approveAndModify);



//INITIAL LOAD
function fetchAndLoadDataModel() {
  event.preventDefault();

  Promise.all(fetchRequests.getAllData(checkLoginCredentials()))
    .then(responses => {
      if (!responses[0].message) {
        initializeDOM(responses[0], responses[1], responses[2]);
      } else {
        domUpdates.displayError('LOGIN FAILED\ninvalid username', 'login');
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
    id = username.match(/\d+/)[0];
  }

  if (username === 'agent' && password === 'travel2020') {
    loadAgentTools();
  } else if (!id || username !== `traveler${id}`) {
    domUpdates.displayError('LOGIN FAILED\ninvalid username', 'login');
  } else if (!password === 'travel2020') {
    domUpdates.displayError('LOGIN FAILED\ninvalid password', 'login');
  } else {
    return id;
  }
}

function initializeDOM(userData, recipeData, destinationData) {
  generateClasses(userData, recipeData, destinationData);
  updateTripDisplay();
  domUpdates.displaySidebar(user, sidebar);
  loginPage.classList.toggle('hidden');
  main.classList.toggle('hidden');
  sidebar.classList.toggle('hidden');
  setStartMin();
  planTripButton.classList.toggle('hidden');
  domUpdates.displayDestinationOptions(destinations, document.querySelector('.destination-list'));
}

function displayAllTrips() {
  user.trips.forEach(trip => {
    domUpdates.displayTrip(trip, destinations, tripList);
  });
}

function loadAgentTools() {
  Promise.all(fetchRequests.getAgentData())
    .then(responses => {
      generateAgentDataModel(responses[0], responses[1], responses[2]);
      initializeAgentDOM();
    });
}

function generateAgentDataModel(travelerData, tripData, destinationData) {
  destinations = destinationData.destinations.map(data => new Destination(data));
  user = new Agent(travelerData.travelers, tripData.trips, destinations);
}

function initializeAgentDOM() {
  loginPage.classList.toggle('hidden');
  main.classList.toggle('hidden');
  sidebar.classList.toggle('hidden');
  agentTools.classList.toggle('hidden');
  filterOptions.classList.toggle('hidden');
  displayAllTrips();
  domUpdates.displayAgentDOM(user, sidebar);
}

//CALL domUpdates

function toggleFormView() {
  document.querySelector('.welcome-message').classList.toggle('hidden');
  planTripButton.classList.toggle('hidden');
  document.querySelector('.new-trip-form').classList.toggle('hidden');
  bookTripButton.classList.toggle('hidden');
  destinationPreview.classList.toggle('hidden');
  tripList.classList.toggle('hidden');
  backButton.classList.toggle('hidden');
  domUpdates.clearErrors();
  if (tripList.classList.contains('hidden')) {
    domUpdates.updatePreview(destinationPreview, destinationList, destinations);
  }
}

function updateTripDisplay() {
  domUpdates.clearTrips(tripList);
  displayAllTrips();
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
    const trip = new Trip(getObjectFromInputs({trips: []}), destinations);
    domUpdates.displayCostMessage(trip);
  }
  domUpdates.updatePreview(destinationPreview, destinationList, destinations);
}

function filterTrips() {
  checkFilterBoxes();
  user.trips = user.generateTrips();
  domUpdates.updateUserSpending(user, user.userSelect);
  domUpdates.clearTrips(tripList);
  displayAllTrips();
  domUpdates.addTripIDDisplay();
  domUpdates.addIDOptions();
}

function updateAgentDOM() {
  Promise.all(fetchRequests.getAgentData())
    .then(responses => {
      destinations = responses[2].destinations.map(data => new Destination(data));
      user = new Agent(responses[0].travelers, responses[1].trips, destinations);
      document.querySelector('.agent-info').remove();
      domUpdates.displayAgentDOM(user, sidebar);
      filterTrips();
    });
}

//CALL fetchRequests

function bookTrip() {
  event.preventDefault();
  if (!startDateInput.value || !endDateInput.value) {
    domUpdates.displayError('please fill out all required inputs', 'form');
  }
  fetchRequests.getTrips().then(response => {
    fetchRequests.postTrip(getObjectFromInputs(response)).then(response => {
      Promise.all(fetchRequests.getAllData(user.id)).then(responses => {
        generateClasses(responses[0], responses[1], responses[2]);
        updateTripDisplay();
        toggleFormView();
        domUpdates.displayWelcomeMessage(user);
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
    duration: (new Date(endDateInput.value).getTime() - new Date(startDateInput.value).getTime()) / (1000 * 60 * 60 * 24),
    status: 'pending',
    suggestedActivities: []
  };
}

function checkFilterBoxes() {
  if (showPending.checked) {
    user.pendingFilter = true;
  } else {
    user.pendingFilter = false;
  }
  if (showUpcoming.checked) {
    user.upcomingFilter = true;
  } else {
    user.upcomingFilter = false;
  }
  if (filterByName.value) {
    user.userSelect = user.allUsers.find(user => user.name.includes(filterByName.value)).id;
  } else {
    user.userSelect = 0;
  }
}

function rejectAndRemove() {
  fetchRequests.deleteTrip(idSelect.value);
  updateAgentDOM();
}

function getApprovalObject() {
  let approvalObj = {id: parseInt(idSelect.value), status: 'approved'};

  if (suggestedActivities.value) {
    approvalObj.suggestedActivities = suggestedActivities.value.split(', ');
  }

  return approvalObj;
}

function approveAndModify() {
  fetchRequests.approveAndModifyTrip(getApprovalObject()).then(response => {
    updateAgentDOM();
  });
}
