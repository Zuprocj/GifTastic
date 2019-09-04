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
  $(document).on('click', '.tag-buttons', function(event) {
    event.preventDefault();
    var type = this.innerText;
    console.log(this.innerText);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + window.encodeURI(type) + "&limit=10&api_key=FMOHyA4DrkLZ6iIW5c6XkJugc0fgoYsY";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        $("#photo").append('<img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');
    }  
});
$("#photo").empty();
});
renderButtons();