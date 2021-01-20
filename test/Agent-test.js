import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import Trip from '../src/Trip';
import User from '../src/User';
import Agent from '../src/Agent'
import {destinationData, tripData, travelerData} from './test-data';

describe('Agent', () => {
  let destinations;
  let agent;
  let travelers;
  let trips;


  beforeEach(() => {
    travelers = [travelerData]
    destinations = destinationData.map(destination => new Destination(destination));
    trips = tripData.map(trip => new Trip(trip, destinations));
    agent = new Agent(travelers, trips, destinations)
  });

  it('should be a function', () => {
    expect(Agent).to.be.a('function');
  });

  it('should be a an instance of Agent', () => {
    expect(agent).to.be.an.instanceof(Agent);
  });

  it('should have an array of users', () => {
    expect(agent.allUsers[0]).to.be.an.instanceof(User);
    expect(Array.isArray(agent.allUsers)).to.eq(true);
  });

  it('should have a pendingFilter property set to true by default', () => {
    expect(agent.pendingFilter).to.eq(true);
  });

  it('should have a upcomingFilter property set to false by default', () => {
    expect(agent.upcomingFilter).to.eq(false);
  });

  it('should have a userSelect property set to 0 by default', () => {
    expect(agent.userSelect).to.eq(0);
  });

  it('should have an array of trips', () => {
    expect(agent.trips[0]).to.be.an.instanceof(Trip);
    expect(Array.isArray(agent.trips)).to.eq(true);
    expect(agent.trips.length).to.eq(1);
  });

  it('should automatically calculate the gross income this year', () => {
    expect(agent.incomeThisYear).to.eq(1091);
  });

  it('should be able to filter trips by user ID', () => {
    const tripArray = [{userID: 1}, {userID: 2}, {userID: 1}];
    agent.userSelect = 1;
    expect(agent.filterByUser(tripArray)).to.eql([{userID: 1}, {userID: 1}]);
    agent.userSelect = 2;
    expect(agent.filterByUser(tripArray)).to.eql([{userID: 2}]);
    agent.userSelect = 3;
    expect(agent.filterByUser(tripArray)).to.eql([]);
  });

  it('should filter trips by status', () => {
    const tripArray = [{status: 'approved'}, {status: 'pending'}, {status: 'approved'}];
    expect(agent.filterByStatus(tripArray, 'approved')).to.eql([{status: 'approved'}, {status: 'approved'}]);
    expect(agent.filterByStatus(tripArray, 'pending')).to.eql([{status: 'pending'}]);
    expect(agent.filterByStatus(tripArray, 'failure')).to.eql([]);
  });

  it('should filter trips by whether or not they\'re upcoming', () => {
    expect(agent.filterByUpcoming(trips)).to.eql([trips[2]]);
    trips.pop();
    expect(agent.filterByUpcoming(trips)).to.eql([]);
  });

  it('should tell how many users are on trips right now', () => {
    expect(agent.findTravelingUsers()).to.eql([]);
    agent.allUsers[0].trips[0].date = '2021/01/18';
    expect(agent.findTravelingUsers()).to.eql([1]);
  });

  it('should generate a list of trips based on it\'s properties', () => {
    expect(agent.generateTrips()).to.eql([trips[1]]);
    agent.pendingFilter = false;
    expect(agent.generateTrips().length).to.eq(2);
    agent.upcomingFilter = true;
    expect(agent.generateTrips()).to.eql([trips[2]]);
    agent.pendingFilter = true;
    expect(agent.generateTrips()).to.eql([]);
  });
});
