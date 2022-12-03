import React, { createContext } from 'react';
import useInitialState from '../hooks/useInitialState';

const AppContext=createContext()

const AppContextProvider = ({children}) => {
    const{state,handlersum,dispatch}=useInitialState()

    return ( 
        <AppContext.Provider value={{ state,handlersum,dispatch}}>
            {children}
        </AppContext.Provider>
     );
}
 
export {AppContext, AppContextProvider} ;