// Activate and moderate Zoom effect on product pages
//  *	www.elevateweb.co.uk/image-zoom

$('#ProductPhotoImg').elevateZoom();



// set Heights
function setHeight(){
	var height = [];

	for (var i=0; i<3 ;i++){  //need to change the 3 to the numbers of rows
		height[i]=$('.daImg' +(i+1) + ' .sectionImage').height();
	}

	for (var i=0; i<3; i++){
		$('.daSmall').eq(i).css('height',height[i]);

	}
}
// set Hover
function setHover(){
	var  hoverImg = {
		daNew:'newHover',
		daLookbook:'lookbookHover',
		daGallery:'galleryHover',
		daBlog:'blogHover'
	};
	var imageSections = [];
	var i=0;
	for (key in hoverImg){
		imageSections[i] = new Image(key);
		imageSections[i].onEnter();
		imageSections[i].onExit();
		$(imageSections[i].selector).trigger('mouseenter');
		$(imageSections[i].selector).trigger('mouseleave');
		i++;
	}

	function Image(type){
		this.selector = '.'+type;
		this.onEnter = function(){
			$(this.selector).on('mouseenter',function(){
				$(this).find('.sectionImage').addClass(hoverImg[type]);
			});
		};
		this.onExit = function(){
			$(this.selector).on('mouseleave',function(){
				$(this).find('.sectionImage').removeClass(hoverImg[type]);
			});
		};
	}
}
// Initializors
//setHover();

$(window).load(function(){
	setHeight();
	$('.hid').hide();
});

// Resize Functions
$(window).resize(function(){
	setHeight();
});

