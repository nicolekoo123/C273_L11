/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    //to retrieve use JSON.parse()
    var person = JSON.parse(localStorage.getItem("person"));
    if (person != null) {
        var message = "";
        message += "Name: " + person.name + "<br/>";
        message += "Email: " + person.email + "<br/>";
        message += "PostalCode: " + person.postalCode + "<br/>";
        $("#results").html(message);
    }

    $("#btnSubmit").click(function () {
        var person = {};
        person.name = $("[name=name]").val();
        person.email = $("[name=email]").val();
        person.postalCode = $("[name=postalCode]").val();
        //to setthe item have to use JSON.stringify()
        localStorage.setItem("person", JSON.stringify(person));
        //localStorage.removeItem("person");
    });
});

