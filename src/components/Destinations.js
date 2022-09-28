const dayjs = require('dayjs')
let startDate = dayjs().format('YYYY/MM/DD');

class Destinations {
  constructor(destinations) {
    this.destinations = destinations;
  }
  
  //returns a list of passable location a traveler can go
  getLocations() {
    const listOfLocations = this.destinations.reduce((list, destination) => {
      list.push(destination.destination);
      return list;
    }, []);

    return listOfLocations;
  }
  //return searched destination
  getSearchedLocation(searchedWord) {
    const location = this.destinations.find(
      (destination) => destination.destination === searchedWord
    );

    if (location === undefined) {
      return "Location not available please select a different location";
    }

    //console.log('location', location);

    return location.id;
  }

  //getting traveler Destination
  getTravelerPastTrips(trips) {
    let travelDate;
    let pastTrips = [];

    trips.forEach((trip) => {
      travelDate = dayjs(trip.date).format('YYYY/MM/DD')

      this.destinations.forEach((destination) => {
        if (trip.destinationID === destination.id && startDate > travelDate) {
          pastTrips.push(destination);
        }
      });
    });

    return (pastTrips.length === 0) ?  "You have not visited anywhere" : pastTrips
    ;
  }

  //getting traveler upcoming trips destinations
  getUpcomingDTrips(trips) {
    let travelDate;
    let upComingTrips = [];

    this.destinations.filter((destination) => {
      trips.forEach((trip) => {
        travelDate = dayjs(trip.date).format('YYYY/MM/DD');
        if (trip.destinationID === destination.id && startDate < travelDate) {
          upComingTrips.push(destination);
        }
      });
    });

    return (upComingTrips.length === 0) ? "No upcoming trips at this time" : upComingTrips;
  }

  //getting destinations for current date
  getCurrentDestinations(trips){
    let travelDate;
    let upComingTrips = [];

    this.destinations.filter((destination) => {
      trips.forEach((trip) => {
        travelDate = dayjs(trip.date).format('YYYY/MM/DD');
        if (trip.destinationID === destination.id && startDate === travelDate) {
          upComingTrips.push(destination);
        }
      });
    });
    
    return (upComingTrips.length === 0) ? "No current trips at this time" : upComingTrips;
  }
}

export default Destinations;
