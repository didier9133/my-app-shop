import { useReducer } from 'react';
import InitialState from '../components/InitialState';

const useInitialState = () => {
    const[state,dispatch]=useReducer(reducer,InitialState)
    
    const handlersum=(cart)=>{
        return cart.reduce((acumulador,currentValue)=>
            acumulador+(currentValue.price*currentValue.counter)
        ,0)
    }

    return {
        state,
        handlersum,
        dispatch
    };
}
 
export default useInitialState;

const reducer=(state, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':{
            const indexOfPayload=state.cart.findIndex(i=>i.id===action.payload.id)
            
            if(indexOfPayload===-1){
                action.payload.counter=1
                return {
                    ...state,
                    cart:[...state.cart,action.payload]
                }
            }else{
                action.payload.counter+=1
                const newCart=state.cart.filter(product=>product.id!==action.payload.id)
                return{
                    ...state,
                    cart:[...newCart,action.payload]
                }
            }

        }
        case 'DELETE_FROM_CART':{
            if(action.payload.counter===1){
                const newCart=state.cart.filter(product=>product.id!== action.payload.id)
                return{
                    ...state,
                    cart:newCart
                }
            }else{
                action.payload.counter-=1
                const newCart=state.cart.filter(product=>product.id!==action.payload.id)
                return{
                    ...state,
                    cart:[...newCart,action.payload]
                }
            }
        }
        case 'ADD_TO_BUYER':{
            return{
                ...state,
                buyer:action.payload
            }
        }
        case 'ADD_NEW_ORDER':{
            return{
                ...state,
                orders:[...state.orders, action.payload] 
            }
        }
        default:{
            return state;
        }
    }
}