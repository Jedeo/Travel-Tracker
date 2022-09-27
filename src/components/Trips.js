class Trips {
  constructor(trips) {
    this.trips = trips;
  }

  getUserTrip(userID) {
    const userTrips = this.trips.filter((trip) => trip.userID === userID);
    return userTrips;
  }

  //calculates how much a trip will cost with the agent fee
  getEstimatedCost(travelerTrips, travelerId, date, destinations) {
    let bookedTrip = travelerTrips.find(
      (trip) => trip.userID === travelerId && trip.date === date
    );

    const filteredDestinations = destinations.find((destination) => {
      return destination.id === bookedTrip.destinationID;
    });

    const estimatedCost =
      (filteredDestinations.estimatedLodgingCostPerDay * bookedTrip.duration +
        filteredDestinations.estimatedFlightCostPerPerson *
          bookedTrip.travelers) *
      1.1;
    return estimatedCost;
  }

  getTripDuration(startDate, endDate) {
    let tripStartDate = new Date(startDate);
    const endOfTrip = new Date(endDate);

    const numberOfTime = tripStartDate.getTime() - endOfTrip.getTime();

    const numberOfDays = Math.round(numberOfTime / (1000 * 3600 * 24));

    return numberOfDays;
  }

  //calculates how much a traveler has spent in a year with the agent fee
  getYearlySpending(trips, year, destinationsTestData) {
    let filteredTrips = trips.filter((trip) => trip.date.includes(year));

    let yearSpending = filteredTrips.reduce((totalSpending, trip) => {
      destinations.filter((destination) => {
        if (destination.id === trip.destinationID) {
          totalSpending +=
            (destination.estimatedLodgingCostPerDay * trip.duration +
              destination.estimatedFlightCostPerPerson * trip.travelers) *
            1.1;
        }
      });

      return totalSpending;
    }, 0);

    return Math.round(yearSpending);
  }
}

export default Trips;
