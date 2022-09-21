import chai from "chai";
const expect = chai.expect;
const tripsTestData = require("../src/data/tripsTestData");
import Trips from "../src/components/Trips";

describe("Trips", function () {
  it("should show all trips past, present, and future by user ID", function () {
    const trip = new Trips(tripsTestData);

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
});
