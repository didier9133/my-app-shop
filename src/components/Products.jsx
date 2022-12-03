import React from 'react';
import'../styles/Products.css'
import Product from './Product';

const Products = ({products}) => {
    return ( 
        <div className='Products'>
            <div className="Products-items">
                {products.map(product=>{
                    return <Product product={product} key={product.id}></Product>
                })}   
            </div>
           
        </div>
     
     );
}
 
export default Products;