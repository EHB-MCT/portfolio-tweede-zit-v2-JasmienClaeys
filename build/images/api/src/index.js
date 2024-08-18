const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

/**
 * Start express server and liston on specified port
 * 
 * @function startServer
 * 
 * @param {number} port - The port number on which the server should listen.
 * @param {function} callback - A callback function to be executed when the server starts.
 * @returns {void}
 */

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// function startServer(port, callback) {
//     app.listen(port, callback);
// };

// startServer(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });