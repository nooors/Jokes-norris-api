"use-strict";

//JQuery
$(document).ready(function () {
    $("#jquery-button").click(function (e) {
        e.preventDefault();
        $.get("http://api.icndb.com/jokes/random", function (data) {
            console.log(data.value.joke);
            $("#sentence-content").html(`${data.value.joke}`);       
         })
    })
});

// Fetch ECMA6

const button = document.getElementById("fetch-button");
const display = document.querySelector("#sentence-content");

button.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("http://api.icndb.com/jokes/random")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        display.innerHTML = `${data.value.joke}`;
    });
});