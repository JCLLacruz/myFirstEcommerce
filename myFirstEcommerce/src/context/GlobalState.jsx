import { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from 'axios';

const API_URL ='https://serverecommerce-w9o2.onrender.com';


const initialState = {
  users: [],
  user: {}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    const register = async (user) => {
            try {
              const res = await axios.post(API_URL, user);
              dispatch({
                type: "POST_USER",
                payload: res.data.user,
              });
            } catch (error) {
              console.error(error);
            }
          };
    return (
        <GlobalContext.Provider
          value={{
            user: state.user,
            register,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}