//Create Dependencies
var express = require("express");
var router = express.Router();

//Import model to utilize the database functions
var book = require("../models/books");

//create  routes
router.get("/", function(req, res) {
    book.all(function(data) {
      var hbsObject = {
        books: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/cats", function(req, res) {
    book.create([
      "Title", "Read"
        ], [
        req.body.title, req.body.complete
        ], function(result) {

      // Send back the ID of the new title
      res.json({ id: result.id });
    });
  });
  
  router.put("/api/books/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    book.update({
      complete: req.body.complete
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/books/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    book.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;