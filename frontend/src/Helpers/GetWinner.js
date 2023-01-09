import { winnerPossbilities } from "../Constants/GameBoardPage/WinnerPossibilities"

export const getWinner = ({ game, usernames }) => {

    let flag = false
    let user

    usernames.forEach((username, i) => {

        winnerPossbilities.forEach((row, i) => {
            flag = row.every((e, i) => {
                return game.gameBoard[e] === username
            })

            if (flag) {
                user= username
                return
            }


        })

        if (flag) {
            return
        }
    })

    
    return user
} 