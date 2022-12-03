const API_KEY=process.env.REACT_APP_GOOGLE_KEY

const getURL = (path) => 
    `https://maps.googleapis.com/maps/api/geocode/json?address=${path}&key=${API_KEY}`;

 
export default getURL;