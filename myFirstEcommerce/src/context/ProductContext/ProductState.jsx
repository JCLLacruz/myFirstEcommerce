import { createContext, useReducer } from 'react';
import ProductReducer from "./ProductReducer"
import axios from 'axios';

const API_URL ='https://serverecommerce-w9o2.onrender.com';


const initialState = {
  products: [],
  product: {}
}

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);
  
    const create = async (user) => {
            try {
              const res = await axios.post(API_URL + '/products/', product);
              dispatch({
                type: "POST_PRODUCT",
                payload: res.data.product,
              });
            } catch (error) {
              console.error(error);
            }
          };
    const getAll = async () => {
            try {
              const res = await axios.get(API_URL + '/products/');
              dispatch({
                type: "GET_ALL_PRODUCTS",
                payload: res.data,
              });
            } catch (error) {
              console.error(error);
            }
          };
    
    return (
        <ProductContext.Provider
          value={{
            product: state.product,
            products: state.products,
            create,
            getAll,
          }}
        >
          {children}
        </ProductContext.Provider>
      );
}