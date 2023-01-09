const { GameDetails } = require("../Models/gameDetails");

function playTurn(io, socket) {

    socket.on('playerTurn', async ({ roomId, data }, callback) => {

        const winner = data.winner

        let gameStatus = data.gameStatus

        if (winner === 'DRAW' || !!winner) {
            gameStatus = 'ENDED'

        }

        const updatedGameDetails = await GameDetails.findOneAndUpdate({ _id: roomId }, { ...data, gameStatus }, { new: true })
        // console.log(updatedGameDetails)
        callback('', updatedGameDetails)
        io.to(roomId).emit('playerTurn', updatedGameDetails)

        const [u1, u2] = updatedGameDetails.usernames
        
        io.to(u1).to(u2).emit('notifyUser', updatedGameDetails)
        if (gameStatus === 'ENDED') {
            // console.log('Left the room from playturn.')
            socket.leave(roomId)
        }
    })

}

module.exports = { playTurn };