const mongoose = require('mongoose');
const URL = 'mongodb+srv://siva7780:Siva1234@tictactoe.727wyfs.mongodb.net/tictactoe?retryWrites=true&w=majority'

async function database() {

    try {
         mongoose.connect(URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: true, //make this also true
        })
        console.log('Database connected successful. ');

    } catch (error) {
        console.log(error);
        // process.exit(1)
    }
}
database();

