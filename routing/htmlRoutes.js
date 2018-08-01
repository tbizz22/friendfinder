var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser");
var path = require("path");




// Routing
// ================================================================


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })


//   homepage route
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    // res.send("is this thing on?")
})

//survey route
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})





module.exports = router;