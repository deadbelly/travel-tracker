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

window.addEventListener('load', getAllData)

function getAllData() {
  Promise.all(fetchRequests.getAllData(1))
    .then(responses => {
      user = new User(responses[0], responses[1].trips);
      destinations = responses[2].destinations.map(data => new Destination(data));
      console.log(user)
      console.log(user.trips)
      console.log(destinations)
    });
};
