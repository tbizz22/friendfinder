var express = require('express');
var router = express.Router();
var exphbs = require("express-handlebars");

var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.engine("handlebars", exphbs({
    defaultLayout: "/home"
}));
app.set("view engine", "handlebars");


var friends = require("../app/data/friends.js")


// Routing
// ================================================================


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


//   homepage route
router.get("/", function (req, res) {
    // 
    res.render("hpbody", {
        layout: "home"
    })

})

//survey route
router.get("/survey", function (req, res) {
    res.render("questions", {
        layout: "survey",
        questions: friends.questions,
        choices: friends.choices
    })
})





module.exports = router;
