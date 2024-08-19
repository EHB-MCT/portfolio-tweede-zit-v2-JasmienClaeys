const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const knex = require('knex');
const knexfile = require('./db/knexfile');

const studentsRoutes = require('./routes/studentsRoutes');
const commentsRoutes = require('./routes/commentsRoutes');

const db = knex(knexfile.development);

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// Attach the database to the request object
app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use(express.json());
// app.use(bodyParser.json());

app.use(cors());

// Use routes
app.use('/students', studentsRoutes);
app.use('/comments', commentsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
