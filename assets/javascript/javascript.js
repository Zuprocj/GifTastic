var tags = ["hamburger", "bacon", "fried chicken", "cake", "soda", "cookies"];
  function renderButtons() {
    $("#tags").empty();
    for (var i = 0; i < tags.length; i++) {
      $("#tags").append('<button class="tag-buttons btn btn-primary">' + tags[i] + '</button>');
    }      
  } 
  $(document).on('click', '#addTag', function(event) {
    event.preventDefault();
    var newTag = $("#category").val().trim();
    tags.push(newTag);
    $("#tags").append('<button class="tag-buttons btn btn-primary">' + newTag + '</button>');
  });