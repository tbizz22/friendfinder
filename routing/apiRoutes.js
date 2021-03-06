var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser");
var path = require("path");

var friends = require("../app/data/friends.js")


// Routing
// ================================================================


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now() + "API Routes")
    next()
})

//   api 
router.get("/api/friends", function (req, res) {
    return res.json(friends.friends);
})

router.get("/api/questions", function (req, res) {
    return res.json(friends.questions);
})

router.get("/api/choices", function (req, res) {
    return res.json(friends.choices);
})

router.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    friends.friends.push(newfriend);
    res.json(newfriend);
})


// This shows all api endpoints
router.get("/api/", function (req, res) {
    return res.json(friends);
})







module.exports = router;