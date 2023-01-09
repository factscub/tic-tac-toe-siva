import React, { createContext, useReducer } from "react";
import { RegisterReducer } from './RegisterReducer'

const initialState = {
    yourName: '',
    username: '',
    email: '',
    password: ''
}

export const RegisterContext = createContext(initialState);

export const RegisterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(RegisterReducer, initialState)
    return (
        <RegisterContext.Provider value={{ state, dispatch }} >
            {children}
        </RegisterContext.Provider>
    )
}
