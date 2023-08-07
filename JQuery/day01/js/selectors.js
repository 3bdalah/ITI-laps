// asignment 01 
$('.red').css('background-color', "red");
$('.blue').css('background-color', "blue");
$('.green').css('background-color', "green");




// assignemnt 02 
$('.container2 a').each(function(){
    var href = $(this).attr('href');
    if (href.indexOf('google') !== -1) {
        $(this).text('Google');
    } else if (href.endsWith('org')) {
        $(this).text('IEEE');
    } else if (href.startsWith('https')) {
        $(this).text('Facebook');
    }

    if (href.startsWith('http')) {
        $(this).append(' Official Website');
    }
});





// asignment 03 

 // Find the third figure within the section with class "container3"
 var thirdFigure = $('.container3 figure:eq(2)');
            
 // Change the src attribute of the image and the text content of the figcaption
 var img = thirdFigure.find('img');
 img.attr('src', 'img/orange.png');
 
 var figcaption = thirdFigure.find('figcaption');
 figcaption.text('Fig.3 - Orange Juice');






 // assignment 04 
$('.col-name.my-name').css('color', 'blue');
        
$('.container4 table tr:odd td').css('background-color', 'pink');

$('.container4 table tr:last td:nth-child(2)').css('font-weight', 'bold');





// assignment 05 
$('.container5 ul li:eq(1)').css('font-style', 'italic');
            
$('.container5 ol li:eq(1)').next().css('color', 'red');