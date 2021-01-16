const fetchRequests = {
  getTraveler(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json());
  },

  getTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json());
  },

  getDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json());
  },

  getAllData(id) {
    return [fetchRequests.getTraveler(id), fetchRequests.getTrips(), fetchRequests.getDestinations()]
  },

  postTrip(obj) {
    fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then(response => console.log(response.json()));
  }
}

export default fetchRequests
