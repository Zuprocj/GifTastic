var topics = ["Hamburger", "Bacon", "Fried Chicken", "Cake", "Soda", "Cookies", "Pancakes"];
  function buttons() {
    $("#topics").empty();
    for (var i = 0; i < topics.length; i++) {
      $("#topics").append('<button class="tag-buttons btn btn-primary">' + topics[i] + '</button>');
    }      
  } 

$(document).on('click', '#addTopic', function(event) {
    event.preventDefault();
    var newTopic = $("#category").val().trim();
    topics.push(newTopic);
    $("#topics").append('<button class="tag-buttons btn btn-primary">' + newTopic + '</button>');
  });

$(document).on('click', '.tag-buttons', function(event) {
    event.preventDefault();
    var type = this.innerText;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + window.encodeURI(type) + "&limit=10&api_key=FMOHyA4DrkLZ6iIW5c6XkJugc0fgoYsY";
    $.ajax({
      url: queryURL,method: "GET"})
      .done(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        var rating = response.data[i].rating;
        var p = $('<p>').text('Rating: '+rating);
        $("#photo").append(p, '<img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');
    }  
});

$("#photo").empty();
});
buttons();

$('body').on('click', '.gif', function() {
    var src = $(this).attr("src");
  if($(this).hasClass('playing')){
     //stop
     $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
     $(this).removeClass('playing');
  } else {
    //play
    $(this).addClass('playing');
    $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
  }
});


