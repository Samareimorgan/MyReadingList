//Create Dependencies
var express = require("express");
var router = express.Router();

//Import model to utilize the database functions
var book = require("../models/books");

//create html route (homepage)
router.get("/", function(req, res) {
    book.all(function(data) {
      var hbsObject = {
        books: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post()