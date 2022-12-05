import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Payment.css'

const Payment = () => {
    const{state,handlersum,dispatch}=useContext(AppContext)
    const{cart, buyer}=state
    const navigate=useNavigate()
    const clientId=process.env.REACT_APP_CLIENT_ID
   
    const paypalOptions={
      clientId,
      currency:'USD',
    }

    const handlepaymentSuccess=(detail,data)=>{
        console.log(detail,data)
        const newOrder={
          buyer,
          product:cart,
          payment:detail,
        }
        dispatch({
          type:'ADD_NEW_ORDER',
          payload:newOrder
        })
        navigate('/checkout/success')
    }

    return (
        <>
          <Helmet>
            <title>Payment | Platzi Conf Merch</title>
          </Helmet>
          <div className="Payment">
            <div className="Payment-content">
              {/* <h3>Resumen del pedido:</h3>
              
              {cart.map(product=>
                <div className="Payment item">
                  <h4>{product.title}</h4>
                  <span>{product.price}</span>
                  <span>{product.counter}</span>
                </div>
              )} */}
              
              <PayPalButton
                options={paypalOptions}
                amount={handlersum(cart)}
                onSuccess={(detail,data) => handlepaymentSuccess(detail,data)}
                
              />
            </div>
            <div></div>
          </div>
        </>
      );
}
 
export default Payment;
