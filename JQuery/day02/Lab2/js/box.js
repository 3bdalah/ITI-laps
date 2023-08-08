$(document).ready(function() {
    $('.box').click(function() {
        var originalColor = $(this).data('color');
        var newBox = $('<div class="box"></div>').data('color', originalColor);
        newBox.appendTo('body');
    });

    $(document).on('mouseover', '.box', function() {
        var hoverColor = $(this).data('color');
        $(this).css('background-color', hoverColor);
    });

    $(document).on('mouseout', '.box', function() {
        var originalColor = $(this).data('color');
        $(this).css('background-color', originalColor);
    });
});