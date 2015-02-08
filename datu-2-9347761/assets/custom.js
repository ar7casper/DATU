// Activate and moderate Zoom effect on product pages
//  *	www.elevateweb.co.uk/image-zoom

$('#ProductPhotoImg').elevateZoom();

// set Heights
$(window).load(function(){
var height = $('.daBig img').height();
$('.row1, .row2, .row3').css("height",height);
});
