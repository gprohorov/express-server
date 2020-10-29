import express from 'express';
// import items from './data/items.json';
// import ItemRoute from'./routes/ItemRoute';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose'

console.log('Hello server')

const PORT = 8081;
const server = express();

server.use(morgan('tiny'));

server.listen(PORT, () => {
   console.log(' Server started on port ' + PORT)
});
