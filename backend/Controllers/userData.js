const { User } = require('../Models/users');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// default route
const homeRoute = async (req, res) => {
    res.send('Hello from server!!...');
}

// this method is called when we navigate to "/register" in browser
const registerRoute = async (req, res,next) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const user = await User({ ...req.body, password });
        user.save((error, result) => {

            if (error) {
                res.status(409).send({error:error.message});
                return;

            }

            const data = { email: result.email, username: result.username };
            // const secretKey = process.env.JWT_SECRET_KEY;
            // const token = jwt.sign(data,secretKey);
            // res.json(token);
           
            res.sendStatus(200);
        });

    } catch (error) {
        res.sendStatus(500);
    }
}


// this method is called when we navigate to "/login" in browser
const loginRoute = async (req, res,next) => {
    
    try {
        const user = await User.findOne({ username: req.body.username });
        const match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            res.json({ email: user.email, username: user.username });
            return;
        }
        else{
            throw new Error()

        }
    } catch (err) {
        res.status(404).send({ error: 'Enter correct details' });

    }
}

module.exports = { homeRoute, registerRoute, loginRoute };