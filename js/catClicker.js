/**
 * Created by idanr on 15/06/2016.
 */

var catTitles = ["Moshiko","Avi"];

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

