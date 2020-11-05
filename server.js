import express from 'express';
// import items from './data/items.json';
// import ItemRoute from'./routes/ItemRoute';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose'
// import cors from 'cors';



const buildUrl = (version, path) => `api/${version}/${path}`
const ITEMS_BASE_URL = '';
const PORT = process.env.PORT || 8080;
const server = express();
const cors = require('cors');
var corsOptions = {
   origin: 'http://localhost:8081'
}



server.use(morgan('tiny'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(cors(corsOptions));

server.get('/welcome', (req, res) =>{
   res.json({message: "Welcome to .... "});
    });

console.log('Hello server');
require("./routes/item.routes")(server)


server.listen(PORT, () => {
   console.log(' Server started on port ' + PORT)
});

const db = require("./model")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then( () => {
        console.log("Connect to DB is established");
    })
    .catch(err => {
       console.log(' Connect failed', err);
       process.exit();
    });

