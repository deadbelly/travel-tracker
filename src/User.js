import Trip from './Trip'

class User {
  constructor(travelerData, tripData) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.trips = this.generateTrips(tripData)
  }

  generateTrips(tripData) {
    return this.sortByDate(this.filterTripData(tripData)).map(data => new Trip(data));
  }

  filterTripData(tripData) {
    return tripData.filter(trip => trip.userID === this.id);
  }

  sortByDate(tripData) {
    tripData.forEach(trip => trip.date = new Date(trip.date));
    tripData = tripData.sort((a, b) => b.date - a.date);
    tripData.forEach(trip => trip.date = trip.date.toDateString());
    return tripData;
  }

  returnTrips(status) {
    return this.trips.filter(trip => trip.status === status);
  }
}

export default User;
