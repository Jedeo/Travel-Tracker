class Destinations {
  constructor(destinations) {
    this.destinations = destinations;
  }


  //calculates how much a trip will cost with the agent fee
  getEstimatedCost(trips) {
    let locationId;
    let numOfTravelers;
    let numOfDuration;
    trips.find((trip) => {
        numOfTravelers = trip.travelers
        locationId = trip.destinationID
        numOfDuration = trip.duration
    });

    const filteredTrips = this.destinations.filter((destination) => {
      return destination.id === locationId;
    });
  
    const estimatedCost = filteredTrips.reduce((estimation, trip) => {
         estimation += ((trip.estimatedLodgingCostPerDay * numOfDuration) + (trip.estimatedFlightCostPerPerson*numOfTravelers)) * 1.1;
    
    
         return estimation;
    }, 0);

    return estimatedCost;
  }

//calculates how much a traveler has spent in a year with the agent fee
  getYearlySpending(trips, year) {
    let filteredTrips= trips.filter(trip => trip.date.includes(year))
   
    let yearSpending = filteredTrips.reduce((totalSpending, trip) => {
        this.destinations.filter(destination => {
            if(destination.id === trip.destinationID){
                totalSpending += ((destination.estimatedLodgingCostPerDay * trip.duration) + (destination.estimatedFlightCostPerPerson * trip.travelers)) * 1.1;
            }
        })
       
        return totalSpending;
    },0)
    
    return Math.round(yearSpending);
  }
//returns a list of passable location a traveler can go
  getLocations(){
    const listOfLocations = this.destinations.reduce((list, destination)=> {
  
      list.push(destination.destination)
      return list;

    },[])
   
    return listOfLocations;
  }
//return searched destination
  getSearchedLocation(searchedWord){
  
    const location = this.destinations.find(destination => destination.destination === searchedWord);
    
      if(location === undefined){

        return 'Location not available please select a different location'
      }

    return location;
  }


}

export default Destinations;
