import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Product = ({product}) => {
    const{dispatch}=useContext(AppContext)

    const handlerClick=(product)=>{
        dispatch({
            type:'ADD_TO_CART',
            payload:product
        })
    }

    return ( 
        <div className='Products-item'>
            <img src={product.image} alt={product.title} />
            <div className="Product-item-info">
                <h2>{product.title}</h2>
                <span>{product.price}$</span>
                <p>{product.description}</p>
            </div>
            <button onClick={()=>handlerClick(product)} type='button'>Comprar</button>
        </div>
     );
}
 
export default Product;