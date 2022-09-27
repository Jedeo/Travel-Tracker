import chai from "chai";
const expect = chai.expect;
const travelersTestData = require("../src/data/travelersTestData");
import Traveler from "../src/components/Traveler";

describe("Traveler", function () {
  let traveler1;
  beforeEach(() => {
    traveler1 = new Traveler(travelersTestData);
  });


  it("should return a name", function () {

    expect(traveler1.getFirstName(1)).to.equal("Ham");
  });
   
  it("should have a travelerType", function () {
    expect(traveler1.getTravelerType(1)).to.equal('relaxer')
  });

  it('should return traveler full name', ()=> {
    traveler1.getUserLogin()
    expect(traveler1.getFullName(1)).to.equal("Ham Leadbeater");
  })

});
