

export const setGame = (data) => {
    return {
        type: 'GAME',
        data
    }
}

export const setOpponent = (data) => {
    return {
        type: 'OPPONENT',
        data
    }
}


export const setDescription = (data) => {
    return {
        type: 'DESCRIPTION',
        data
    }
}


export const setBtnText = (data) => {
    return {
        type: 'BTNTEXT',
        data
    }
}


export const setUsername = (data) => {
    return {
        type: 'USERNAME',
        data
    }
}

export const setClicked = (data) => {
    return {
        type: 'CLICKED',
        data
    }
}
export const setDisableBtn = (data) => {
    return {
        type: 'DISABLEBTN',
        data
    }
}
export const setPlayerTurn = (data) => {
    return {
        type: 'PLAYERTURN',
        data
    }
}


// export const emptyContext = () => {

//     return{
//         type:'EMPTY'
//     }
// }
