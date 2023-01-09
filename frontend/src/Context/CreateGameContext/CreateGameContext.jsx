import { createContext, useReducer } from "react";
import { CreateGameReducer } from "./CreateGameReducer";


const initialState = {
    email: ''
}

export const CreateGameContext = createContext(initialState)

export const CreateGameProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CreateGameReducer, initialState)
    // console.log(state)

    return (
        <CreateGameContext.Provider value={{ state, dispatch }} >
            {children}
        </CreateGameContext.Provider>
    )
}