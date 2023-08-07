

// asignment 01
$('.container1').append('<div class="black"></div>');            
$('.container1').prepend('<div class="white"></div>');
$('<p class="yellow">welcome new user </p>').insertBefore('.pink');



// assignment 02 
$('.container2 p').each(function() {
    var textContent = $(this).text();
    var anchor = $('<a></a>').attr('href', 'http://' + textContent).text(textContent);
    $(this).replaceWith(anchor);
});



// assignement 03 
$('.container3 img').wrap('<figure></figure>');
            
// Insert a new <figcaption> element with text content "Coffee" after the image
$('.container3 img').after('<figcaption>Coffee</figcaption>');



// assignment 04 
$('.container4 td.col-age').empty();
$('.container4 td:contains("Mohsen")').addClass('man');
$('.container4 td').toggleClass('your-email');





// assignment 05 bonus 

// assignment 06 

$("#username").val('3bdallah');
        
// Make the checkbox in the form with id 'my-form' checked
$('#my-form #remember').prop('checked', true);
