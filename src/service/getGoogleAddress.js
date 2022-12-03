import getURL from "../config";

const getGoogleAddress = (address) => {
    const URL= getURL(address)
    return  fetch(URL).then(resp=>resp.json())
}
 
export default getGoogleAddress;