$(function() {
  
  $(".readBook").on("click",function(event){
    var id = $(this).data("id");
    var newComplete = $(this).data("newcomplete");

    var newBookComplete = {
      complete: newComplete
    };

    // Send the PUT request.
    $.ajax("/api/books/" + id, {
      type: "PUT",
      data: newBookComplete
    }).then(
      function () {
        console.log("changed result to", newComplete);
        // Reload the page 
        location.reload();
      }
    );
  });

  // Add a new book 
  $("#addBook").on("click", function (e) {
    //Prevent Default
    e.preventDefault();

    var newBook = {
      book_title: $("#newBookTitle").val().trim(),
      complete: 0
    };

    // $.post(currentURL +"/api/books", newBook, function(data){
    //     console.log(data);
    //     });

    //Send the POST request.
    $.ajax("/api/books", {
      type: "POST",
      data: newBook
    }).then(
      function () {
        console.log("created new book");
        // Reload the page 
       location.reload();
      }
    );
  });



  $(".deleteBook").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/books/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted book", id);
        // Reload the page 
        location.reload();
      }
    );
  });
});
