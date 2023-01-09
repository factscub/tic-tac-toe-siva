const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// const bcrypt = require('bcrypt');

const userSchema = new Schema({
    yourName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true

    },
    password: {
        type: String,
        required: true

    }
},
    {
        timestamps: true
    })

// before saving user to the database ,it checks if the user already in the database
userSchema.pre('save', async function (next) {
    const count = await mongoose.models.users.countDocuments({ $or: [{ username: this.username }, { email: this.email }, { yourName: this.yourName }] });

    if (count) {
        const err = new Error('User already exists.');
        next(err);

        return;
    }
    next();

});


// userSchema.pre('findOne',async function(next){
//     const user = await mongoose.models.users.findOne({username:this.username});
//     const match = await bcrypt.compare(user.password,this.password );
//     if(match){
//         next();
//         return;
//     }
//     const err = new Error('Invalid username or password.');
//     next(err);

// })


const User = model('users', userSchema);
module.exports = { User };