/**
 * Created by idanr on 15/06/2016.
 */

//var catTitles = ["Moshiko","Avi"];
import $ from 'jquery';
var cats = [{"name":"Moshiko","imgUrl":"../assets/cat1.jpg"},{"name":"Avi","imageUrl":"../assets/cat2.jpg"}];

$(function () {
    $(".cat").each(function (index) {

        $(this).children(".title").first().text(catTitles[index]);

        $(this).children("img").click(function () {
            var currentCounter =  parseInt($(this).siblings(".counter").first().text());
            console.log("currentCounter is -> " + currentCounter);
            $(this).siblings(".counter").first().text(currentCounter + 1);
        })
    })
})

function loadCats(){
    
}

