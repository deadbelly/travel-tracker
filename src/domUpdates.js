const domUpdates = {

  displayTrip(trip, destinations, tripList) {
    const destination = trip.findDestination(destinations);

    tripList.insertAdjacentHTML('beforeend',
    `<article aria-label="trip-details" class="trip">
      <div tabindex="0" class="trip--wrapper" id="${trip.id}">
        <img class="trip__img" src="${destination.image}"  alt="${destination.alt}">
        <div class="trip__info-block">
          <h2>${destination.destination}</h2>
          <h3 class="${trip.returnStatusInfo()}">${trip.returnStatusInfo()}</h3>
          <div class="trip__info-block--details">
            <p>start date:  ${trip.date.toDateString()}</p>
            <p>duration:  ${trip.duration} days</p>
            <p>travelers:   ${trip.travelers}</p>
            <p>cost:  $${trip.calculateCost(destinations).afterAgent}</p>
          </div>
        <div>
      </div>
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
    </div>`);
    this.displayWelcomeMessage(user);
  },

  displayWelcomeMessage(user) {
    let welcomeMessage = document.querySelector('.welcome-message').innerHTML = `
        <h3>Welcome back, traveler!
        <br> ---------
        <br>Approved Trips: ${user.filterByStatus(user.trips, 'approved').length}
        <br> ---------
        <br>Pending Trips: ${user.filterByStatus(user.trips, 'pending').length}
        <br> ---------
        <br>In the past year you've spent $${user.getCostForYear()} on Travel</h3>`;
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

  displayCostMessage(trip) {
    document.querySelector('.cost-message').innerHTML = `$${trip.cost.beforeAgent} + 10% agent fee = $${trip.cost.afterAgent}`
  },

  updatePreview(destinationPreview, destinationList, destinations) {
    if(destinations) {
      const preview = destinations.find(destination => destination.id == destinationList.value)
      destinationPreview.innerHTML =
      `<div class="preview" style="background-image: url(${preview.image});">
        <div class="cost-details"
          <h1>${preview.destination}</h1>
          <h2>Round Trip Airfare Per Person: $${preview.estimatedFlightCostPerPerson}</h2>
          <h2>Lodging Cost Per Person Per Day: $${preview.estimatedLodgingCostPerDay}</h2>
        </div>
      </div>`
    }
  },

  displayLoginError(error) {
    document.querySelector('.login-errors').innerText = error;
  },

  displayFormError(error) {
    document.querySelector('.cost-message').innerText = error
  },

  clearErrors(){
    document.querySelector('.cost-message').innerText = 'waiting to calculate cost...'
    document.querySelector('.login-errors').innerText = ''
  },

  displayAgentDOM(agent, sidebar) {
    sidebar.insertAdjacentHTML('afterbegin',
    `<section class="agent-info">
      <h2>GROSS INCOME THIS YEAR: ${agent.incomeThisYear}</h2>
      <h3>there are ${agent.currentTravelers} travelers on trips right now</h3>
    </section>`);

    this.addTripIDDisplay();
    this.addIDOptions();
  },

  addTripIDDisplay() {
    const infoBlocks = document.querySelectorAll('.trip__info-block')
    infoBlocks.forEach(block => block.insertAdjacentHTML('afterbegin', `<h4>${block.parentNode.id}</h4>`))
  },

  updateUserSpending(user, id) {
    const userSpending = document.querySelector('.user-spending');
    if(id > 0) {
      let thisUser = user.allUsers.find(user => user.id === id);

      userSpending.innerHTML = `${thisUser.name} has spent $${thisUser.getCostForYear()} on travel this year`
    } else {
      userSpending.innerHTML = 'no user selected'
    }
  },

  addIDOptions() {
    document.querySelector('.id-select').innerHTML = ''
    document.querySelectorAll('.trip--wrapper').forEach(trip => {
      document.querySelector('.id-select').insertAdjacentHTML('beforeend', `<option value="${trip.id}">${trip.id}</option>`);
    })
  }
};

export default domUpdates;
