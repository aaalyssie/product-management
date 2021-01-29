import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    products: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('Products');
        return localData ? JSON.parse(localData) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('Products', JSON.stringify(state));
    }, [state])
    
    const addProduct = (product) => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }
    
    const editProduct = (product) => {
        dispatch({
            type: 'EDIT_PRODUCT',
            payload: product
        })
    }
    
    const deleteProduct = (id) => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: id
        })
    }
    
    return(
        <GlobalContext.Provider value={{
            products: state.products,
            deleteProduct,
            addProduct,
            editProduct
        }}>
        {children}
        </GlobalContext.Provider>
    )
}