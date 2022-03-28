const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
require("dotenv").config({ path: "./config.env" });


// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(require("./routes/record"));

// app.use() middleware here ^ ///////////////////

// const dbo = require("./db/conn");

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))