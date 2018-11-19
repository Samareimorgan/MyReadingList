//Create Dependencies
var express = require("express");
var router = express.Router();

//Import model to utilize the database functions
var books = require("../models/books");


//create  routes
router.get("/", function(req, res) {
    books.all(function(data) {
      var hbsObject = {
        books: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/books", function(req, res) {
  console.log(res);
  console.log(req);
  books.create([ "book_title", "complete"], [req.body.book_title, req.body.complete], function(result) {
        console.log(result);
    // Send back the ID of the new title
    res.json({ id: result.insertId });
  });
});
  
router.put("/api/books/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  

  books.update({
    complete: 1
  }, condition, function(result) {
    console.log(result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
  
router.delete("/api/books/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  books.delete(condition, function(result) {
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