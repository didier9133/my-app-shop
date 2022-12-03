import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/Checkout.css'

const CartItem = ({product}) => {
    const{dispatch}=useContext(AppContext)
 
    const handlerClick=(product)=>{
        dispatch({
            type:'DELETE_FROM_CART',
            payload:product
        })
    }

    const monto=()=>{
        return product.counter * product.price 
    }


    return ( 
        <>
            <h4>{product.title}</h4>
            <div className="Checkout-item">
                <div className="Checkout-element">
                    <span>Catidad: <span>{product.counter}</span></span>
                    <span>{`Precio und: $${product.price}`}</span>
                    <span>{`Monto: $${monto()}`}</span>
                </div>
                <button className='Checkout-item button' onClick={()=>handlerClick(product)} type='button'>
                    <i className="fa-regular fa-rectangle-xmark" />
                </button>
            </div> 
        </>  
     );
}
 
export default CartItem
