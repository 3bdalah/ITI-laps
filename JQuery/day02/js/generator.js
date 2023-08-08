$(document).ready(function () {

    
    function setupBoxHoverEvents($element, bgColorOnHover) {
        $element.mouseover(function () {
            $(this).css("background-color", bgColorOnHover);
        }).mouseout(function () {
            $(this).css("background-color", "");
        });
    }

    $(".red").mouseover(function () {
        $(this).css("background-color", "blue");
    }).mouseout(function () {
        $(this).css("background-color", "red");
    });

    $(".container").on("click", ".red", function () {
        var newBox = $("<div></div>").addClass("blue");
        $(".container").append(newBox);
        setupBoxHoverEvents($(".blue"), "orange");
    });

    $(".container").on("click", ".blue", function () {
        var newBox = $("<div></div>").addClass("orange");
        $(".container").append(newBox);
        setupBoxHoverEvents($(".orange"), "green");
    });

    $(".container").on("click", ".orange", function () {
        var newBox = $("<div></div>").addClass("green");
        $(".container").append(newBox);
        setupBoxHoverEvents($(".green"), "red");
    });

    $(".container").on("click", ".green", function () {
        var newBox = $("<div></div>").addClass("red");
        $(".container").append(newBox);
        setupBoxHoverEvents($(".red"), "blue");
    });
});
