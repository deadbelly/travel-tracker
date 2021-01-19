import domUpdates from './domUpdates'


const fetchRequests = {
  getTraveler(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
      .catch(err => domUpdates.displayLoginError(err));
  },

  getAllTravelers() {
    return fetch(`http://localhost:3001/api/v1/travelers`)
    .then(response => response.json())
      .catch(err => domUpdates.displayLoginError(err));
  },

  getTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
      .catch(err => {
        domUpdates.displayLoginError(err)
        domUpdates.displayFormError(err)
      });
  },

  getDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
      .catch(err => domUpdates.displayLoginError(err));
  },

  getAllData(id) {
    return [fetchRequests.getTraveler(id), fetchRequests.getTrips(), fetchRequests.getDestinations()];
  },

  getAgentData() {
    return [fetchRequests.getAllTravelers(), fetchRequests.getTrips(), fetchRequests.getDestinations()];
  },

  postTrip(obj) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
      .catch(err => domUpdates.displayFormError(err));
  },

  deleteTrip(id) {
    fetch(`http://localhost:3001/api/v1/trips/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
  },

  approveAndModifyTrip(obj) {
    return fetch('http://localhost:3001/api/v1/updateTrip', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
      .catch(err => domUpdates.displayFormError(err));
  }
}

export default fetchRequests
