import User from './User'

class Agent {
  constructor(travelerData, tripData, destinations) {
    console.log(destinations)
    this.allUsers = this.generateAllUsers(travelerData, tripData, destinations);
    this.pendingFilter = true;
    this.upcomingFilter = false;
    this.userSelect = 0;
    this.currentTravelers = this.findTravelingUsers().length
    this.trips = this.generateTrips();
    this.incomeThisYear = this.getGrossIncome()
  }

  generateAllUsers(travelerData, tripData, destinations) {
    return travelerData.map(traveler => new User(traveler, tripData, destinations));
  }

  filterByStatus(tripsArray, status) {
    return tripsArray.filter(trip => trip.status === status);
  }

  filterByUpcoming(tripsArray) {
    return tripsArray.filter(trip => trip.getStatusInfo() === 'upcoming');
  }

  filterByUser(tripsArray) {
    return tripsArray.filter(trip => trip.userID === this.userSelect);
  }

  generateTrips() {
    let trips = this.allUsers.reduce((acc, user) => {
      return [...acc, ...user.trips];
    }, []);

    if(this.upcomingFilter) {
      trips = this.filterByUpcoming(trips);
    }

    if(this.pendingFilter) {
      trips = this.filterByStatus(trips, 'pending');
    }

    if(this.userSelect > 0) {
      trips = this.filterByUser();
    }

    return trips;
  }

  findTravelingUsers() {
    return this.allUsers.filter(user => user.trips.find(trip => trip.returnStatusInfo() === 'in progress'))
      .map(user => user.id);
  }

  getGrossIncome() {
    return 0.1 * (this.allUsers.reduce((acc, user) => {
      return acc + user.getCostForYear();
    }, 0));
  }
}

export default Agent;
