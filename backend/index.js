const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors  = require('cors');
require('dotenv').config();
require('./Db/database')
const { userData } = require('./Routes/userData');
const { socketConnection } = require('./Socket/socketConnection');
const io = require("socket.io")(http, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

socketConnection(io);


const port = process.env.PORT || 3000 ;

app.use(express.json());
app.use(cors({
  origin:'*'
}));

app.use(userData);

http.listen(port, function () {
  console.log('listening on : '+port);
});