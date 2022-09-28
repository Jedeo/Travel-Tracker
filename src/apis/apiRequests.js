import { fetchPromise } from "../scripts";

const requestsUrl = `http://localhost:3001/api/v1/`;
const getRequest = async (type) => {
  const response = await fetch(`${requestsUrl}${type}`);
  if(response.status === 422){
    throw new Error(response.statusText)
  }else if (response.status === 404){
    throw new Error(response.statusText)
  }
  const data = await response.json()
  ///.catch((err) => );
 
  return data;
};



export async function postRequest(type, travelerRequest) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(travelerRequest),
  };
  const response = await fetch(`${requestsUrl}${type}`, options);
  const data = await response.json()
    
  return data;
}


export { getRequest };
