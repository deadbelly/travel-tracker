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
    user = new User(travelerData, tripData, destinations);
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
    expect(user.trips[0].id).to.eq(3);
    expect(user.trips[1].id).to.eq(2);
  });

  it('should turn it\'s trips dates into instances of Date', () => {
    user.trips.forEach(trip => expect(trip.date).to.be.an.instanceof(Date));
  });

  it('should be able to return an array of pending trips', () => {
    expect(user.filterByPending(user.trips)[0].id).to.eq(2);
    expect(user.filterByPending(user.trips)[0].status).to.eq('pending');
      expect(user.filterByPending(user.trips).length).to.eql(1);
  });

  it('should be able to return an array of trips this year', () => {
    expect(user.filterByThisYear(user.trips)[0].id).to.eql(3);
    expect(user.filterByThisYear(user.trips).length).to.eql(1);
  });
});
