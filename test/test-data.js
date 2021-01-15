const destinationData = [
  {"id": 1,
   "destination": "Lima, Peru",
   "estimatedLodgingCostPerDay": 70,
   "estimatedFlightCostPerPerson": 400,
   "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
   "alt": "overview of city buildings with a clear sky"
  },
  {
   "id": 2,
   "destination": "Stockholm, Sweden",
   "estimatedLodgingCostPerDay": 100,
   "estimatedFlightCostPerPerson": 780,
   "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
   "alt": "city with boats on the water during the day time"
  },
  {
   "id": 3,
   "destination": "Sydney, Austrailia",
   "estimatedLodgingCostPerDay": 130,
   "estimatedFlightCostPerPerson": 950,
   "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
   "alt": "opera house and city buildings on the water with boats"
 }];

const tripData = [
  {
    "id": 1,
    "userID": 2,
    "destinationID": 3,
    "travelers": 1,
    "date": "2019/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 2,
    "userID": 3,
    "destinationID": 1,
    "travelers": 5,
    "date": "2020/10/04",
    "duration": 18,
    "status": "pending",
    "suggestedActivities": []
  },
  {
    "id": 3,
    "userID": 1,
    "destinationID": 2,
    "travelers": 4,
    "date": "2020/05/22",
    "duration": 17,
    "status": "pending",
    "suggestedActivities": []
  }
];

  export {destinationData, tripData};
