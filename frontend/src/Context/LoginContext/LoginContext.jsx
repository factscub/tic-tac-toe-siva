import React, { useReducer, createContext } from 'react'
import { LoginReducer } from './LoginReducer'

const initialState = {
    username: '',
    password: ''
}

export const LoginContext = createContext(initialState);

export const LoginProvider = ({ children }) => {

    const [state, dispatch] = useReducer(LoginReducer, initialState)

    return (
        <LoginContext.Provider value={{ state, dispatch }}>
            {children}
        </LoginContext.Provider>
    )
}
