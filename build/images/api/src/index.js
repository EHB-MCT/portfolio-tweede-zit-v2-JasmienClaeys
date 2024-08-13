const express = require("express");
const app = express();

/**
 * GET endpoint, provide hello world
 * 
 * @param 
 * @returns 
 */

app.get("/", (req, res) => {
    res.send({ message: "yellow" })
})

app.listen(3000, (err) => {
    if(!err) {
        console.log("running on port " + 3000);
    }
    else{
        console.error(err)
    }
})