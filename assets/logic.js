$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });


	var searches = ['The Hangover','Team America','Superbad','Beerfest','Harold and Kumar','Grandmas Boy','Super Troopers','Anchorman','Shaun of the Dead','Tropic Thunder'];

	function renderButtons() {
	    $("#button-container").empty();
	    for(var index = 0; index < searches.length; index++){
	        var button = $("<button>");
	        button.html(searches[index]);
	        button.addClass("movieButton btn btn-default btn-block gifSearch");
	        $("#button-container").append(button);
	    }}

	renderButtons();

	
	$("#add-movie").on("click", function(event) {
        event.preventDefault();
        var movie = $("#addMovie").val();
	if (movie) {
        searches.push(movie);
        renderButtons();
	$("#addMovie").val("");
      };
	 })
	 
	$(document).on('click', "button.movieButton", function() {
      	var searchTag = $(this).html();
      	console.log(searchTag)
		

      	var queryURL = `https://api.giphy.com/v1/gifs/search?q=${searchTag}&api_key=dc6zaTOxFJmzC&limit=6`;

    $.ajax({
                url: queryURL,
                method: 'GET'
        }).done(function(response) {
            var results = response.data;
            console.log(results)

    for (var i = 0; i < results.length; i++) {
                var gifUrl = results[i].images.original.url;
                console.log(gifUrl)
                $('#randomImage'+[i]).attr('src', gifUrl)
            }


    


        })
      })

	 
    








}); 
