
const { GameDetails } = require('../Models/gameDetails')
const getAllGames = (io, socket) => {

    socket.on('getAllGames', async ({ username }, callback) => {
        try {
            // gets all games that match the username
            const games = await GameDetails.find({ usernames: { $in: [username] } });
            callback('', games)

        } catch (error) {
            callback('something went wrong.')
        }

    })

}

module.exports = { getAllGames }