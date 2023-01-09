const { GameDetails } = require('../Models/gameDetails');
const { User } = require('../Models/users');

function createGame(io, socket) {

    socket.on('createGame', async ({ combinedId, username, opponentEmail }, callback) => {

        try {
            // check if the opponent player is in the database.
            const opponentUser = await User.findOne({ email: opponentEmail });

            if (!opponentUser) {
                callback('Invalid user.');
                return;

            }

            // check if the players had an unfinished game in the past already.
            const userGameDetails = await GameDetails.find({ $and: [{ combinedId }, { gameStatus: 'PROGRESS' }] }).count();
 
            if (userGameDetails) {
                callback('Complete previous game.');
                return;
            }


            const newGame = await GameDetails({
                gameStatus: 'PROGRESS',
                usernames: [username, opponentUser.username],
                playerTurn: username,
                gameBoard: Array(9).fill(null),
                gameCreatedBy: username,
                winner: '',
                combinedId,

            })

            const gameData = await newGame.save()

            callback('', gameData.id)

        } catch (error) {

            // console.log(error)
        }
    })
}

module.exports = { createGame };