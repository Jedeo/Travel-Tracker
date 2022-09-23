import chai from "chai";
const expect = chai.expect;
const travelersTestData = require("../src/data/travelersTestData");
import Traveler from "../src/components/Traveler";

describe("Traveler", function () {
  let traveler1;
  beforeEach(() => {
    traveler1 = new Traveler(travelersTestData[9]);
  });

  it("should have an id", function () {
    expect(traveler1.id).to.equal(10);
  });

  it("should have a name", function () {
    expect(traveler1.name).to.equal("Rickie Jodlowski");
  });
   
  it("should have a travelerType", function () {
    expect(traveler1.travelerType).to.equal('relaxer')
  });

  it.skip('should return traveler first name', ()=> {

  })

  it.skip("should return traveler full name", ()=> {

  })
});
