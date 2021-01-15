import Trip from './Trip'

class User {
  constructor(travelerData, tripData) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.trips = this.generateTrips(tripData)
  }

  generateTrips(tripData) {
    return this.filterTripData(tripData).map(data => new Trip(data));
  }

  filterTripData(tripData) {
    return tripData.filter(trip => trip.userID === this.id);
  }

  returnTrips(status) {
    return this.trips.filter(trip => trip.status === status);
  }
}

export default User;
