import React, { useContext, useEffect, useState } from 'react';
import '../styles/Success.css';
import Map from '../components/Map';
import { AppContext } from '../context/AppContext';
import getGoogleAddress from '../service/getGoogleAddress';

const Success = () => {
  const[map,setMap]=useState()
  const[loading,setLoading]=useState(false)
  const{state}=useContext(AppContext)
  const{buyer}=state
  const{name, address, country}=buyer
  const completeAddress=`${address}${country}`
 
  
  useEffect(()=>{
    getGoogleAddress(completeAddress)
      .then(resp=>{
        const{results}=resp
        setMap({
          location:results[0].geometry.location
        })
        setLoading(true)
      })
       // eslint-disable-next-line
  },[])

  return (    
    loading && 
      <div className="Succes">
        <div className="Success-content">
          <h2>{name}, Gracias por tu compra</h2>
          <span>Tu pedido llegara en 3 dias a tu dirección:</span>
          <div className="Success-map">
            <Map location={map.location} />
          </div>
        </div>
      </div>
  );
}
 
export default Success;

