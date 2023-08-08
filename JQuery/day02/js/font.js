$(document).ready(function() {
    $("#increase").click(function() {
        var fontSize = parseInt($(".content").css("font-size"));
        var newFontSize = fontSize + 2;
        if (fontSize < 28) {
            $(".content").css("font-size", newFontSize + "px");
        } else {
            $(".error").text("You Have Reached the max value");
        }
    });

    $("#decrease").click(function() {
        var fontSize = parseInt($(".content").css("font-size"));
        var newFontSize = fontSize - 2;
        if (fontSize > 16) {
            $(".content").css("font-size", newFontSize + "px");
        } else {
            $(".error").text("You Have Reached the Min value");
        }
    });
});
