import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import Trip from '../src/Trip';
import User from '../src/User';
import {destinationData, tripData, travelerData} from './test-data';

describe('User', () => {
  let destinations;
  let user;

  beforeEach(() => {
    destinations = destinationData.map(destination => new Destination(destination));
    user = new User(travelerData, tripData);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be a an instance of Trip', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have an id', () => {
    expect(user.id).to.eq(1);
  });

  it('should have a name', () => {
    expect(user.name).to.eq('Ham Leadbeater');
  });

  it('should have a traveler type', () => {
    expect(user.travelerType).to.eq('relaxer');
  });

  it('should have an array of trips', () => {
    user.trips.forEach(trip => expect(trip).to.be.an.instanceof(Trip));
    user.trips.forEach(trip => expect(trip.userID).to.eq(1));
    expect(user.trips[0].id).to.eq(2);
    expect(user.trips[1].id).to.eq(3);
  });

  it('should be able to return an array of approved trips', () => {
    expect(user.returnTrips('approved')).to.eql([
    {
      "id": 3,
      "userID": 1,
      "destinationID": 2,
      "travelers": 4,
      "date": "2020/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
    }]);
  });

  it('should be able to return an array of pending trips', () => {
    expect(user.returnTrips('pending')).to.eql([
    {
      "id": 2,
      "userID": 1,
      "destinationID": 1,
      "travelers": 5,
      "date": "2020/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }]);
  });
});
