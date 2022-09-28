import chai from 'chai';
const expect = chai.expect;
const destinationsTestData = require('../src/data/destinationsTestData')
const tripsTestData = require('../src/data/tripsTestData')
import Trips from '../src/components/Trips';
import Destinations from "../src/components/Destinations"

describe('Destinations', function() {
  let destination;
  let trip;

  beforeEach(()=>{
    trip = new Trips(tripsTestData)
    destination = new Destinations(destinationsTestData)
  })

  it('should return an array names of places to travel', ()=> {
    const result = destination.getLocations()

    expect(result.length).to.equal(50)
  })

  it('should be able to search by name of location', ()=> {

    expect(destination.getSearchedLocation('Lima, Peru')).to.equal(destinationsTestData[0].id)
  })

  it('it should show a message "Location not available please select a different location"', () => {

    expect(destination.getSearchedLocation('Burundi')).to.equal('Location not available please select a different location')
  })

  it('should return traveler past destination', ()=> {
    
    const result = destination.getTravelerPastTrips(trip.getUserTrip(1))
    expect(result.length).to.equal(1)
  })

  it('should return a message if traveler has no past destination', ()=> {
    
    const result = destination.getTravelerPastTrips(trip.getUserTrip(2))
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

  it('should return traveler current destination', () => {
    let result = destination.getCurrentDestinations(trip.getUserTrip(18))
    expect(result).to.equal('No current trips at this time')
  })
});
