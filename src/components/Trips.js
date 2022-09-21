class Trips {
  constructor(trips) {
    this.trips = trips;
  }

  getUserTrip(userID) {
    const userTrips = this.trips.filter((trip) => trip.userID === userID);
    return userTrips;
  }

}

export default Trips;
