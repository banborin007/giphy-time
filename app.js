// begin the pseudo
// start jquery
$(document).ready(function(){
// need to create a link with the buttons
    $("button").on("click", function(){

// created variable
        var disney = $(this).attr("data-disney");

// add queryURL
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
        disney + "&api_key=1ezDcG4vuBbyE3fjPtiFtADH26Sg53Co";

// create ajax to retrieve queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response){

            var results = response.data;

// create loop for ratings
            for (var i = 0; i < results.length; i++){

                if (results[i].rating !== "r" && results[i].rating !== "pg-13"){

                    var disneyGif = $("<div class='item'>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var disneyImage = $("<img>");
// create a gifs attribute at a state-still
                    disneyImage.attr("src", results[i].images.fixed_height_still.url);
                    disneyImage.attr("data-still", results[i].images.fixed_height_still.url);
                    disneyImage.attr("data-animate", results[i].images.fixed_height.url);
                    disneyImage.attr("data-state", "still");
                    disneyImage.attr("class", "item");

                    disneyGif.append(p);
                    disneyGif.append(disneyImage);

                    $("#gifs-here").prepend(disneyGif);

                }
            }
// create button to change data-state from still to animate vice versa
            $("button").on("click", function(){
                var state = $(this).attr("data-state");
// conditions for data state
                if (state === "still"){
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                }
                else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
// create a function to add buttons
// create a function to pull data for specific buttons created
            })
        })
        
    })
})

