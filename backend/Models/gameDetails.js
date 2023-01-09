const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const gameDetailsSchema = new Schema({
    // players: {
    //     type: [String],
    // },
    gameStatus: {
        type: String,
    },
    buttonText: {
        type: String,
    },
    usernames: {
        type: [String]
    },
    playerTurn: {
        type: String,
    },
    gameBoard: {
        type: [String]
    },
    gameCreatedBy: {
        type: String
    },
    winner: {
        type: String
    },
    combinedId: {
        type: String,
    }
}, {
    timestamps: true

});

const GameDetails = model('gameDetails', gameDetailsSchema);
module.exports = { GameDetails };