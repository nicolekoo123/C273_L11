/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    //to retrieve use JSON.parse()
    var personArray = JSON.parse(localStorage.getItem("personArray"));
    if (personArray == null) {
        personArray = [];
    }
    var message = "";
    for (var i = 0; i < personArray.length; i++) {
        var person = personArray[i]
        message += "Name: " + person.name + "<br/>";
        message += "Email: " + person.email + "<br/>";
        message += "PostalCode: " + person.postalCode + "<br/><br/>"
    }
    $("#results").html(message);

    $("#btnSubmit").click(function () {
        var person = {};
        person.name = $("[name=name]").val();
        person.email = $("[name=email]").val();
        person.postalCode = $("[name=postalCode]").val();
        personArray[personArray.length] = person;
        //to setthe item have to use JSON.stringify()
        localStorage.setItem("personArray", JSON.stringify(personArray));
        //localStorage.removeItem("person");
    });
});

