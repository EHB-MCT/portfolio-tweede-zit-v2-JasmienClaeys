const app = require("./app");
require('dotenv').config();


/**
 * Start express server and liston on specified port
 * 
 * @function startServer
 * 
 * @param {number} port - The port number on which the server should listen.
 * @param {function} callback - A callback function to be executed when the server starts.
 * @returns {void}
 */


function startServer(port, callback) {
    app.listen(port, callback);
};

const PORT = process.env.PORT || 3001;

startServer(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});