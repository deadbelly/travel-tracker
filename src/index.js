// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import User from './User';
import Trip from './Trip';
import Destination from './Destination';

import fetchRequests from './fetchRequests';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let user;
let destinations;

const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

// window.addEventListener('load', getAllData)
loginButton.addEventListener('click', fetchAndLoadDataModel)

function fetchAndLoadDataModel() {
  event.preventDefault;
  const username = usernameInput.value;
  const id = username.match(/\d+/)[0]
  const password = passwordInput.value;

  Promise.all(fetchRequests.getAllData(id))
    .then(responses => {
      if (checkLoginCredentials(responses[0], username, password, id)) {
        user = new User(responses[0], responses[1].trips);
        destinations = responses[2].destinations.map(data => new Destination(data));
        console.log(user)
        console.log(user.trips)
        console.log(destinations)
      } else if (responses[0].message) {
        alert('LOGIN FAILED \ninvalid username');
      } else {
        alert('LOGIN FAILED \ninvalid password');
      }
    });
};




function checkLoginCredentials(response, username, password, id) {
  if(username === `traveler${id}` && password === 'travel2020' && response.id == id) {
    return true
  };
}
