const domUpdates = {
  toggleHidden(ele) {
    ele.classList.toggle('hidden');
  },

  displayTrip(trip, destinations, tripList) {
    const destination = trip.findDestination(destinations);

    tripList.insertAdjacentHTML('beforeend',
    `<article class="trip">
      <button>
        <img src="${destination.image}"  alt="${destination.alt}">
        <div class="info-block">
          <h2>${destination.destination}</h2>
          <h3 class="pending">${trip.isPending()}</h3>
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

  displayNavBar(user, navBar){
    navBar.insertAdjacentHTML('afterbegin',
    `<img src="./images/profpic.png" alt="user's profile picture">
    <h2>${user.name}</h2>
    <h3>Welcome back, traveler!</h3>
    <h3>Approved Trips: ${user.returnTripsByStatus('approved').length}
      <br>Pending Trips: ${user.returnTripsByStatus('pending').length}
      <br>In the past year you've spent $${user.getCostForYear()} on Travel</h3>
    <button type="button" name="button">plan a trip!</button>`)
  }
};

export default domUpdates;
