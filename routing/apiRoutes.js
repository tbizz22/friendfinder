var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser");
var path = require("path");

var friends = require("../app/data/friends.js")


// Routing
// ================================================================


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now() + "API Routes")
    next()
  })


//   api 
router.get("/api/friends", function (req, res) {
    console.log(friends.friends)
    return res.json(friends.friends);
    
})


router.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    friends.friends.push(newfriend);
    res.json(newfriend);
})








module.exports = router;