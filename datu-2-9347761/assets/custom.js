// Activate and moderate Zoom effect on product pages
//  *	www.elevateweb.co.uk/image-zoom

$('#ProductPhotoImg').elevateZoom();



// set Heights
function setHeight(){
	var height = [];

	for (var i=0; i<3 ;i++){  //need to change the 3 to the numbers of rows
	height[i]=$('.daImg' +(i+1)).height();
	}

	for (var i=0; i<3; i++){
	    $('.daSmall').eq(0).css('height',height[0]);
	}
}
$(window).load(function(){
setHeight();
});
