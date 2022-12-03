import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Header.css'

const Header = () => {
    const{state}=useContext(AppContext)
    const location=useLocation()
    const from=location.state?.from || '/'

    console.log(location)
    return ( 
        <div className="Header">
            <NavLink to={from}>
                <h1 className="Header-title">PlatziConf Merch</h1>
            </NavLink>
         
            <div  className="Header-checkout">
                <NavLink to={'/checkout'} state={{from:location}} >
                    <i className="fa-solid fa-check-to-slot" />
                </NavLink>
                {state.cart?.length
                    ?<div className='Header-alert'>{state.cart.length}</div>
                    :null
                }    
            </div>
            
        </div>
    );
}
 
export default Header;