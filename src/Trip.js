class Trip {
  constructor(dataObject) {
    this.id = dataObject.id
    this.userID = dataObject.userID
    this.destinationID = dataObject.destinationID
    this.travelers = dataObject.travelers
    this.date = dataObject.date
    this.duration = dataObject.duration
    this.status = dataObject.status
    this.suggestedActivities = dataObject.suggestedActivities
  }

  findDestination(destinations) {
    return destinations.find(destination => destination.id === this.destinationID);
  }

  calculateCost(destinations) {
    const destination = this.findDestination(destinations);
    return ((destination.estimatedFlightCostPerPerson * this.travelers)
              + ((destination.estimatedLodgingCostPerDay * this.travelers) * this.duration));
  }

  isPending() {
    if(this.status === 'pending'){
      return this.status
    }
    return ''
  }
}

export default Trip
