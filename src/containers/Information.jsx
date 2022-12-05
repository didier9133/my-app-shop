import React, { useContext, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, useNavigate } from 'react-router-dom';
import {AppContext} from '../context/AppContext'
import '../styles/Information.css'

const Information = () => {
    const { dispatch}=useContext(AppContext)
    const refForm=useRef(null)
    const navigate=useNavigate()
    
    const onSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData(refForm.current)
        const data= {
            name:formData.get('name'),
            email:formData.get('email'),
            address:formData.get('address'),
            apto:formData.get('apto'),
            city:formData.get('city'),
            country:formData.get('country'),
            state:formData.get('state'),
            codigoPostal:formData.get('codigoPostal'),
            phone:formData.get('phone')
        }
        dispatch({
            type:'ADD_TO_BUYER',
            payload:data
        })
       
        navigate('/checkout/payment')
    }
    
    return (
        <>
            <Helmet>
                <title>Form | Platzi Conf Merch</title>
            </Helmet>
            <div className="Information">
                <div className="Information-content">
                        <div className="Information-head">
                            <h2>Información de contacto:</h2>
                        </div>
                        <div className="Information-form">
                            <form onSubmit={(e)=>onSubmit(e)} ref={refForm} >
                                <input type="text" placeholder="Nombre completo" name="name" />
                                <input type="text" placeholder="Correo Electronico" name="email" />
                                <input type="text" placeholder="Direccion" name="address" />
                                <input type="text" placeholder="apto" name="apto" />
                                <input type="text" placeholder="Ciudad" name="city" />
                                <input type="text" placeholder="Pais" name="country" />
                                <input type="text" placeholder="Estado" name="state" />
                                <input type="text" placeholder="Codigo postal" name="cp" />
                                <input type="text" placeholder="Telefono" name="phone" />
                                <button className="Information-next">Pagar</button>
                            </form>
                        </div>
                        <div className="Information-buttons">
                            <NavLink to={'/checkout'}>
                                <div className="Information-back">Regresar</div>
                            </NavLink>
                        </div>
                </div>
                
                {/* <div className="Information-sidebar">
                    <h3>Pedido:</h3>
                    {cart.map(product=>{
                        return <>
                    })}
            
                </div> */}
            </div>
        </>
    );
};
    

 
export default Information;
