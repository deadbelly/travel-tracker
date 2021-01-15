import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import Trip from '../src/Trip';
import {destinationData, tripData} from './test-data';

describe('Trip', () => {
  let destinations;
  let trips;

  beforeEach(() => {
    destinations = destinationData.map(destination => new Destination(destination));
    trips = tripData.map(trip => new Trip(trip));
  })
  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be a an instance of Trip', () => {
    trips.forEach(trip => expect(trip).to.be.an.instanceof(Trip));
  });

  it('should have a have an id', () => {
    expect(trips[0].id).to.eq(1);
    expect(trips[1].id).to.eq(2);
    expect(trips[2].id).to.eq(3);
  });

  it('should have a user id', () => {
    expect(trips[0].userID).to.eq(2);
    expect(trips[1].userID).to.eq(1);
    expect(trips[2].userID).to.eq(1);
  });

  it('should have a destination id', () => {
    expect(trips[0].destinationID).to.eq(3);
    expect(trips[1].destinationID).to.eq(1);
    expect(trips[2].destinationID).to.eq(2);
  });

  it('should have a number of travelers', () => {
    expect(trips[0].travelers).to.eq(1);
    expect(trips[1].travelers).to.eq(5);
    expect(trips[2].travelers).to.eq(4);
  });

  it('should have a date', () => {
    expect(trips[0].date).to.eq("2019/09/16");
    expect(trips[1].date).to.eq("2020/10/04");
    expect(trips[2].date).to.eq("2020/05/22");
  });

  it('should have a duration', () => {
    expect(trips[0].duration).to.eq(8);
    expect(trips[1].duration).to.eq(18);
    expect(trips[2].duration).to.eq(17);
  });

  it('should have a status', () => {
    expect(trips[0].status).to.eq('approved');
    expect(trips[1].status).to.eq('pending');
    expect(trips[2].status).to.eq('approved');
  });

  it('should have an empty array for suggested activities', () => {
    expect(trips[0].suggestedActivities).to.eql([]);
    expect(trips[1].suggestedActivities).to.eql([]);
    expect(trips[2].suggestedActivities).to.eql([]);
  });

  it('should be able to return it\'s destination', () => {
    expect(trips[0].findDestination(destinations)).to.eql(destinations[2]);
    expect(trips[1].findDestination(destinations)).to.eql(destinations[0]);
    expect(trips[2].findDestination(destinations)).to.eql(destinations[1]);
  });

  it('should be able to calculate it\'s cost', () => {
    expect(trips[0].calculateCost(destinations)).to.eql(1990);
    expect(trips[1].calculateCost(destinations)).to.eql(8300);
    expect(trips[2].calculateCost(destinations)).to.eql(9920);
  });
});
