const express = require('express');
const cors = require('cors');
const app = express();
const knex = require("knex");
const knexfile = require("./db/knexfile");

const db = knex(knexfile.development);




// Middleware setup
app.use(cors());
app.use(express.json());

// Define routes here
app.get('/', (req, res) => res.send('Hello World'));


module.exports = app;

// db.raw("SELECT 1+1").then(() => console.log("done"));
