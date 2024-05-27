import { createContext, useReducer } from 'react';
import UserReducer from "./UserReducer"
import axios from 'axios';

const API_URL ='https://serverecommerce-w9o2.onrender.com';


const initialState = {
  users: [],
  user: {}
}

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
  
    const register = async (user) => {
            try {
              const res = await axios.post(API_URL + '/users/', user);
              dispatch({
                type: "POST_USER",
                payload: res.data.user,
              });
              console.log('post',res.data);
            } catch (error) {
              console.error(error);
            }
          };
    return (
        <UserContext.Provider
          value={{
            user: state.user,
            register,
          }}
        >
          {children}
        </UserContext.Provider>
      );
}