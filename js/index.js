/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var movieArray = JSON.parse(localStorage.getItem("movieArray"));
    var message = "";
    for (var i = 0; i < movieArray.length; i++) {
        console.log(movieArray[i])
        var movie = movieArray[i];
        message += "<div class='card'><div class='card-header'>"+ movie.title + "</div>";
        message += "<div class='card-body'>"+ movie.plot + "</div></div><br/>";
    }
    $("#contents").html(message);
});


