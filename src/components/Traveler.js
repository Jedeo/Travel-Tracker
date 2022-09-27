
class Traveler{
    constructor(travelers){
        this.travelers = travelers; 
    }

    getFirstName(travelerId){
        let name = this.travelers.find(traveler => traveler.id === travelerId)

        let firstName = name.name.split(' ')
                return firstName[0]
    }

    getFullName(travelerId){
        let name = this.travelers.find(traveler => traveler.id === travelerId)
        return name.name;
    }

    getTravelerType(travelerId){
        let name = this.travelers.find(traveler => traveler.id === travelerId)
        return name.travelerType;
    }

    getUserLogin(){
        let logIn = this.travelers.reduce((login, traveler) => {

            login[`traveler${traveler.id}`] = traveler.id
            return login
        }, {})
        return logIn

    }

    getCurrentTraveler(userLogin){
        let logIn = this.travelers.reduce((login, traveler) => {

            login[`traveler${traveler.id}`] = traveler.id
            return login
        }, {})
        console.log(logIn["traveler50"]);
        return logIn[userLogin]
    }


    
}

export default Traveler;