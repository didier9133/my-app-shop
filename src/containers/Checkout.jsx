import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { AppContext } from '../context/AppContext';
import '../styles/Checkout.css'

const Checkout = () => {
    const{state,handlersum}=useContext(AppContext)
    const {cart}=state
    const location=useLocation()
  
 

    return ( 
       <div className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de Pedidos</h3>
                {cart.map(product=>{
                    return <CartItem product={product} ></CartItem>   
           
                })}
            </div>

            {(cart.length) && (
                <div className="Checkout-sidebar">
                    <h3>{`Precio Total: $${handlersum(cart)}`}</h3>
                    <NavLink to='/checkout/information' state={{from:location}} >
                        <button type='button' >Continuar</button>
                    </NavLink>
                </div>
            )}

       
       </div>
    );
}
 
export default Checkout;
