const domUpdates = {

  displayTrip(trip, destinations, tripList) {
    const destination = trip.findDestination(destinations);

    tripList.insertAdjacentHTML('beforeend',
    `<article class="trip">
      <button>
        <img src="${destination.image}"  alt="${destination.alt}">
        <div class="info-block">
          <h2>${destination.destination}</h2>
          <h3 class="${trip.returnStatusInfo()}">${trip.returnStatusInfo()}</h3>
          <div class="details">
            <p>start date:  ${trip.date.toDateString()}</p>
            <p>duration:  ${trip.duration} days</p>
            <p>travelers:   ${trip.travelers}</p>
            <p>cost:  $${trip.calculateCost(destinations).afterAgent}</p>
          </div>
        <div>
      </button>
    </article>`);
  },

  clearTrips(tripList) {
    tripList.innerHTML = ''
  },

  displaySidebar(user, sidebar){
    sidebar.insertAdjacentHTML('afterbegin',
    `<img class="prof-pic" src="./images/profpic.png" alt="user's profile picture">
    <h1 class="user-name">${user.name}</h1>
    <h2 class="traveler-type">${user.travelerType}</h2>
    <div class="sidebar-content welcome-message">
      <h3>Welcome back, traveler!
      <br> ---------
      <br>Approved Trips: ${user.trips.length - user.filterByPending(user.trips).length}
      <br> ---------
      <br>Pending Trips: ${user.filterByPending(user.trips).length}
      <br> ---------
      <br>In the past year you've spent $${user.getCostForYear()} on Travel</h3>
    </div>`)
  },

  displayNewTripForm(destinations) {
    document.querySelector('.new-trip-form').insertAdjacentHTML('afterbegin',
    `<select class="destination-list" name="">
    </select>
    <input type="date" class="trip-start" min="${new Date().toISOString().substring(0, 10)}">
    <input type="date" class="trip-end" min="${new Date().toISOString().substring(0, 10)}">
    <input type="number" class="num-travelers" value="1" min="1">
    <h3></h3>
    <button class="book-trip-button">book it</button>`);

    this.displayDestinationOptions(destinations, document.querySelector('.destination-list'));
  },

  clearNewTripForm() {
    document.querySelector('.new-trip-form').innerHTML = ''
  },

  displayDestinationOptions(destinations, destinationList) {
    destinations.sort((a, b) => a.destination.localeCompare(b.destination)).forEach(destination => {
      destinationList.insertAdjacentHTML('beforeend', `<option value="${destination.id}">${destination.destination}</option>`);
    });
  },

  displayPendingMessage() {
    document.querySelector('.cost-message').innerHTML = 'select a start and end date and we\'ll calculate the cost'
  },

  displayCostMessage(trip) {
    document.querySelector('.cost-message').innerHTML = `$${trip.cost.beforeAgent} + 10% agent fee = $${trip.cost.afterAgent}`
  },

  updatePreview(destinationPreview, destinationList, destinations) {
    const preview = destinations.find(destination => destination.id == destinationList.value)
    destinationPreview.innerHTML =
    `<div class="preview" style="background-image: url(${preview.image});">
      <div class="cost-details"
        <h1>${preview.destination}</h1>
        <h2>Round Trip Airfare Per Person: $${preview.estimatedFlightCostPerPerson}</h2>
        <h2>Lodging Cost Per Person Per Day: $${preview.estimatedLodgingCostPerDay}</h2>
      </div>
    </div>`
  },

  displayError(error) {
    console.log(document.querySelector('.err-display'))
    document.querySelector('.err-display').innerText = error
  }
};

export default domUpdates;
