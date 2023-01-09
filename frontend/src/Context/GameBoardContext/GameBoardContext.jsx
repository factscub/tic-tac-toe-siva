import { createContext, useReducer } from "react";
import { GameBoardReducer } from "./GameBoardReducer";


const initialState = {
    game: {
        gameStatus: null,
        buttonText: null,
        usernames: [],
        playerTurn: null,
        gameBoard: Array(9).fill(null),
        gameCreatedBy: null,
        winner: null,
        roomId: null
    },
    opponent: null,
    description: null,
    btnText: null,
    username: null,
    clicked: null,
    disableBtn: null,
    playerTurn: null



}

export const GameBoardContext = createContext();


export const GameBoardProvider = ({ children }) => {

    const [state, dispatch] = useReducer(GameBoardReducer, initialState)
    return (
        <GameBoardContext.Provider value={{ ...state, dispatch }} >
            {children}
        </GameBoardContext.Provider>
    )
}