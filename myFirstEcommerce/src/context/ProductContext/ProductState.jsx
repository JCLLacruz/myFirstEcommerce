import { createContext, useReducer } from 'react';
import ProductReducer from "./ProductReducer"
import axios from 'axios';

const API_URL ='https://serverecommerce-w9o2.onrender.com/products';


const initialState = {
  products: [],
  product: {},
  productById: {}
}

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);
  
    const create = async (user) => {
            try {
              const res = await axios.post(API_URL + '/', product);
              dispatch({
                type: "POST_PRODUCT",
                payload: res.data.product,
              });
            } catch (error) {
              console.error(error);
            }
          };
    const getAll = async (page) => {
            try {
              const res = await axios.get(API_URL + '/' + `?page=${page}`);
              dispatch({
                type: "GET_ALL_PRODUCTS",
                payload: res.data,
              });
            } catch (error) {
              console.error(error);
            }
          };
    const getProductById = async (_id) => {
            try {
              const res = await axios.get(API_URL + '/id/' + _id);
              dispatch({
                type: "GET_PRODUCT_BY_ID",
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
            productById: state.productById,
            create,
            getAll,
            getProductById,
          }}
        >
          {children}
        </ProductContext.Provider>
      );
}