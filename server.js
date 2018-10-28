//Create Dependencies
var express = require("express");
var exphbrs = require("express-handlebars");

//Set app instance of express
var app = express();

//Parse application body to json 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Set up templating engine handlebars
app.engine("handlebars", exphbrs({defaultLayout:"main"}));
app.set("view engine", "handlebars");