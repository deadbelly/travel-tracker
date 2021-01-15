import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import {destinationData} from './test-data';

describe('Destination', function() {
  let destinations;
  beforeEach(() => {
    destinations = destinationData.map(destination => new Destination(destination));
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    destinations.forEach(ele => expect(ele).to.be.an.instanceof(Destination));
  });

  it('should have an id', () => {
    expect(destinations[0].id).to.eq(1);
    expect(destinations[1].id).to.eq(2);
    expect(destinations[2].id).to.eq(3);
  });

  it('should have a destination', () => {
    expect(destinations[0].destination).to.eq("Lima, Peru");
    expect(destinations[1].destination).to.eq("Stockholm, Sweden");
    expect(destinations[2].destination).to.eq("Sydney, Austrailia");
  });

  it('should have an estimated lodging cost', () => {
    expect(destinations[0].estimatedLodgingCostPerDay).to.eq(70);
    expect(destinations[1].estimatedLodgingCostPerDay).to.eq(100);
    expect(destinations[2].estimatedLodgingCostPerDay).to.eq(130);
  });

  it('should have an estimated flight cost', () => {
    expect(destinations[0].estimatedFlightCostPerPerson).to.eq(400);
    expect(destinations[1].estimatedFlightCostPerPerson).to.eq(780);
    expect(destinations[2].estimatedFlightCostPerPerson).to.eq(950);
  });

  it('should have an image url', () => {
    expect(destinations[0].image).to.eq("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(destinations[1].image).to.eq("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    expect(destinations[2].image).to.eq("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  });

  it('should have alt text', () => {
    expect(destinations[0].alt).to.eq("overview of city buildings with a clear sky");
    expect(destinations[1].alt).to.eq("city with boats on the water during the day time");
    expect(destinations[2].alt).to.eq("opera house and city buildings on the water with boats");
  });
});
