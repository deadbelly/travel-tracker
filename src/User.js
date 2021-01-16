import Trip from './Trip'

class User {
  constructor(travelerData, tripData, destinations) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.trips = this.generateTrips(tripData, destinations)
  }

  generateTrips(tripData, destinations) {
    return this.sortByDate(this.filterTripData(tripData)).map(data => new Trip(data, destinations));
  }

  filterTripData(tripData) {
    return tripData.filter(trip => trip.userID === this.id);
  }

  sortByDate(tripData) {
    tripData.forEach(trip => trip.date = new Date(trip.date));
    return tripData.sort((a, b) => b.date - a.date);
  }

  returnTripsByStatus(status) {
    return this.trips.filter(trip => trip.status === status);
  }

  returnTripsThisYear() {
    return this.trips.filter(trip => (new Date().getFullYear() - trip.date.getFullYear()) <= 1);
  }

  getCostForYear() {
  return this.returnTripsThisYear().reduce((totalCost, trip) => {
    totalCost += trip.cost.afterAgent;
    return totalCost;
  }, 0);
  }
}

export default User;
