import chai from "chai";
const expect = chai.expect;
const tripsTestData = require("../src/data/tripsTestData");
const destinationsTestData = require("../src/data/destinationsTestData")
import Trips from "../src/components/Trips";

describe("Trips", function () {
  let trip;
  beforeEach(()=>{
     trip = new Trips(tripsTestData);
  })
  it("should return all trips past, present, and future by user ID", function () {
    

    // console.log(tripsTestData);
    expect(trip.getUserTrip(1)).to.eql([
      {
        id: 117,
        userID: 1,
        destinationID: 28,
        travelers: 3,
        date: "2021/01/09",
        duration: 15,
        status: "approved",
        suggestedActivities: [],
      },
    ]);
  });

  it('should show an estimated cost (with a 10% travel agent fee) for the trip', function() {
    const result = trip.getUserTrip(1)
    expect(trip.getEstimatedCost(result,1,"2021/01/09",destinationsTestData)).to.equal(4125)
  });

  it.only('should show total amount spent this year', function() {

     const result = trip.getUserTrip(1)
    expect(trip.getYearlySpending(result,"2021/01/09", destinationsTestData)).to.equal(37290)
    
  });

});
