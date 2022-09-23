
function getRequest(type) {
 return fetch(`http://localhost:3001/api/v1/${type}`)
 .then((response)=> response.json())
 //.then((data)=> console.log(data))
 .catch((err)=> console.log(err))   
}





export {getRequest}


