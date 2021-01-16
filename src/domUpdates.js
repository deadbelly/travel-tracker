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
          <p class="year">${parseInt(trip.date)}</p>
          <h3>${trip.isPending()}</h3>
          <div class="details">
            <p>start date:  ${trip.date}</p>
            <p>duration:  ${trip.duration} days</p>
            <p>travelers:   ${trip.travelers}</p>
            <p>cost:  $${trip.calculateCost(destinations)}</p>
          </div>
        <div>
      </button>
    </article>`);
  }
};

export default domUpdates;
