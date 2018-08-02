
// node libraries
var express = require("express");
var exphbs = require("express-handlebars")
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");




// ===============================================================
// deal with routing info
// html  routing
var htmlroutes = require("./routing/htmlRoutes")
app.use("/", htmlroutes);
app.use(express.static(path.join(__dirname, 'views')));



// api Routing
var apiroutes = require("./routing/apiRoutes");
app.use("/", apiroutes);





// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



