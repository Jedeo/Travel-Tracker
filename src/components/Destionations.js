class Destinations {
  constructor(destinations) {
    this.destinations = destinations;
  }

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

  getYearlySpending(trips, year) {
    let filteredTrips= trips.filter(trip => trip.date.includes(year))
   // console.log(filteredTrips)


    let yearSpending = filteredTrips.reduce((totalSpending, trip) => {
        this.destinations.filter(destination => {
            if(destination.id === trip.destinationID){
                totalSpending += ((destination.estimatedLodgingCostPerDay * trip.duration) + (destination.estimatedFlightCostPerPerson * trip.travelers)) * 1.1;
            }
        })
       
        return totalSpending;
    },0)
    console.log(yearSpending);
    return Math.round(yearSpending);
  }

}

export default Destinations;
