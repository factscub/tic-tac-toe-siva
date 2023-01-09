export const GameBoardReducer = (state, { type, data }) => {

    switch (type) {
        case 'GAME':
            return {
                ...state,
                game: data
            }

        case 'OPPONENT':
            return {
                ...state,
                opponent: data
            }


        case 'DESCRIPTION':
            return {
                ...state,
                description: data
            }

        case 'BTNTEXT':
            return {
                ...state,
                btnText: data
            }

        case 'USERNAME':
            return {
                ...state,
                username: data
            }

        case 'CLICKED':
            return {
                ...state,
                clicked: data
            }

        case 'DISABLEBTN':
            return {
                ...state,
                disableBtn: data
            }


        case 'PLAYERTURN':
            return {
                ...state,
                playerTurn: data
            }

        // case 'EMPTY':
        //     return {
        //         game: {
        //             gameStatus: null,
        //             buttonText: null,
        //             usernames: [],
        //             playerTurn: null,
        //             gameBoard: Array(9).fill(null),
        //             gameCreatedBy: null,
        //             winner: null,
        //             roomId: null
        //         },
        //         opponent: null,
        //         description: null,
        //         btnText: null,
        //         username: null,
        //         clicked: null,
        //         disableBtn: null,
        //         playerTurn: null



        //     }
        default:
            return state;
    }

}