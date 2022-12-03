import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const Map = ({location}) => {
    
    
    const mapStyle={
        height:"50vh",
        width:"100%",
    }

    const defaultCenter={
        lat:location.lat,
        lng: location.lng
    }

    return ( 
        <LoadScript googleMapsApiKey={process.env.GOOGLE_KEY}>
            <GoogleMap 
                mapContainerStyle={mapStyle}
                zoom={10}
                center={defaultCenter}>

                <Marker position={defaultCenter} />

            </GoogleMap>
        </LoadScript>
     );
}
 
export default Map;