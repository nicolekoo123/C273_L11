/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#btnSearch").click(function () {
        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();
        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/",
            dataType: "jsonp",
            data: "t=" + title + "&y" + year + "&plot=" + plot + "&apikey=a58163e5",
            success: function (response) {
                var message = "";
                message += "Title: " + response.Title + "<br/>";
                message += "Released: " + response.Released + "<br/>";
                message += "Runtime: " + response.Runtime + "<br/>";
                message += "Genre: " + response.Genre + "<br/>";
                message += "Actors: " + response.Actors + "<br/>";
                message += "Plot: " + response.Plot + "<br/>";
                var image = "<img src='" + response.Poster + "'>";
                $("#contents").html(message);
                $("#poster").html(image);

                var movieArray = JSON.parse(localStorage.getItem("movieArray"));
                 
                if (movieArray == null) {
                    movieArray = [];
                }
                var movie = {};
                movie.title = response.Title;
                movie.plot = response.Plot;
                movieArray[movieArray.length] = movie;
                console.log(movieArray);
                localStorage.setItem("movieArray", JSON.stringify(movieArray));
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });

});


