import chai from 'chai';
const expect = chai.expect;
const destinationsTestData = require('../src/data/destinationsTestData')
const tripsTestData = require('../src/data/tripsTestData')
import Trips from '../src/components/Trips';
import Destinations from "../src/components/Destionations"

describe('Destinations', function() {
  let destination;
  let trip;

  beforeEach(()=>{
    trip = new Trips(tripsTestData)
    destination = new Destinations(destinationsTestData)
  })

  it('should show an estimated cost (with a 10% travel agent fee) for the trip', function() {
    
    expect(destination.getEstimatedCost(trip.getUserTrip(1))).to.equal(4125)
  });

  it('should show total amount spent this year', function() {

    expect(destination.getYearlySpending(trip.getUserTrip(7), 2020)).to.equal(37290)
    
  });

  it('should return an array names of places to travel', ()=> {
    const result = destination.getLocations()

    expect(result.length).to.equal(50)
  })

  it('should be able to search by name of location', ()=> {

    expect(destination.getSearchedLocation('Lima, Peru')).to.equal(destinationsTestData[0])
  })

  it('it should show a message "Location not available please select a different location"', () => {

    expect(destination.getSearchedLocation('Burundi')).to.equal('Location not available please select a different location')
  })

  it('should return traveler past destination', ()=> {
    
    const result = destination.getTravelerPastTrips(trip.getUserTrip(1))
    expect(result.length).to.equal(1)
  })

  it('should return a meessage if traveler has no past destination', ()=> {
    
    const result = destination.getTravelerPastTrips(trip.getUserTrip(2))
    console.log(result);
    expect(result).to.equal("You have not visited anywhere")
  })

  it('should return traveler upcoming trips destination', ()=> {
    let result = destination.getUpcomingDTrips(trip.getUserTrip(35))
    expect(result[0]).to.equal(destinationsTestData[24])
  })

  it('should return traveler upcoming trips destination', ()=> {
    let result = destination.getUpcomingDTrips(trip.getUserTrip(35))
    expect(result[0]).to.equal(destinationsTestData[24])
  })
});
