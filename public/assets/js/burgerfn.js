$(function() {
    //to create new burger
    $("#submitBtn").on("click", function(event) {
        event.preventDefault();
    
        var newBurger = {
          name: $("#burgerInput").val().trim(),
        };
        console.log("prgress");
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            location.reload();
          }
        );
      });

    //to update devoured state
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("newState");
  
      var newState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
});