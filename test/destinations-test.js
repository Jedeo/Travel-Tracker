import chai from 'chai';
const expect = chai.expect;
const decorationsTestData = require('../src/data/destinationsTestData')
const tripsTestData = require('../src/data/tripsTestData')
import Trips from '../src/components/Trips';
import Destinations from "../src/components/Destionations"

describe('Destinations', function() {
  let destination;
  let trip;

  beforeEach(()=>{
    trip = new Trips(tripsTestData)
    destination = new Destinations(decorationsTestData)
  })

  it('should show an estimated cost (with a 10% travel agent fee) for the trip', function() {
    
    expect(destination.getEstimatedCost(trip.getUserTrip(1))).to.equal(4125)
  });

  it('should show total amount spent this year', function() {

    expect(destination.getYearlySpending(trip.getUserTrip(7), 2020)).to.equal(37290)
    
  });
});
