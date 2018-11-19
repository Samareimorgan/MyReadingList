//Create Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//Create Port setting

var PORT = process.env.PORT || 8081;

//Set app instance of express
var app = express();


//Parse application body to json 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//set static folder for public view
app.use(express.static("public"));

//Set up templating engine handlebars

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/bookroutes.js");

app.use(routes);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});