const express = require("express");
const cors = require("cors");
const knex = require("knex");
const knexfile = require("./db/knexfile");

const app = express();

const db = knex(knexfile.development);

app.use(express.json());

app.use(cors());

module.exports = app;
