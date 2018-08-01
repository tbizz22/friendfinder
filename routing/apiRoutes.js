var express = require('express');
var router = express.Router();
var app = express();

var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = require("../app/data/friends")


console.log(friends.friends)




// Routing
// ================================================================


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now() + "API Routes")
    next()
  })


//   api 
app.get("/api/friends", function (req, res) {
    console.log("i made it here")
    return res.json("../app/data/friends");
    res.send("is this thing on?")
})







module.exports = router;