import User from './User';
import Trip from './Trip';
import Destination from './Destination';

import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';

import './css/base.scss';
import './images/profpic.png';

let user;
let destinations;

const loginPage = document.querySelector('.login-page');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

const sidebar = document.querySelector('.sidebar');

const main = document.querySelector('main');
const tripList = document.querySelector('.trip-list');

loginButton.addEventListener('click', fetchAndLoadDataModel)

function fetchAndLoadDataModel() {
  event.preventDefault;
  const username = usernameInput.value;
  const id = username.match(/\d+/)[0]
  const password = passwordInput.value;

  Promise.all(fetchRequests.getAllData(id))
    .then(responses => {
      if (checkLoginCredentials(responses[0], username, password, id)) {
        generateClasses(responses[0], responses[1], responses[2]);
        displayAllTrips();
        domUpdates.displaySidebar(user, sidebar);
        domUpdates.toggleHidden(loginPage);
        domUpdates.toggleHidden(main);
        domUpdates.toggleHidden(sidebar);
        document.querySelector('.plan-trip-button').addEventListener('click', toggleFormView)
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
  if(document.querySelector('.book-trip-button')) {
    document.querySelector('.book-trip-button').classList.toggle('hidden');
  }

  domUpdates.displayNewTripForm(destinations);
  document.querySelector('.book-trip-button').addEventListener('click', bookTrip);
}

function bookTrip() {
  event.preventDefault()
  const destinationName = document.querySelector('.destination-list').value;
  const startDate = document.querySelector('.trip-start').value;
  const endDate = document.querySelector('.trip-end').value;
  const travelers = document.querySelector('.num-travelers').value;
  let formResponse;

  fetchRequests.getTrips().then(response => {
    fetchRequests.postTrip({
      id: response.trips.length + 1,
      userID: user.id,
      destinationID: destinations.find(destination => destination.destination === destinationName).id,
      travelers: travelers,
      date: new Date(startDate).toISOString().substring(0, 10).replaceAll('-', '/'),
      duration: (new Date(endDate).getTime() - new Date(startDate).getTime())/(1000*60*60*24),
      status: 'pending',
      suggestedActivities: []
    }).then(response => {
      Promise.all(fetchRequests.getAllData(user.id)).then(responses => {
        generateClasses(responses[0], responses[1], responses[2]);
        domUpdates.clearTrips(tripList)
        displayAllTrips();
        toggleFormView();
      });
    });
  });
}
