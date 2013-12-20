$(window).scroll(function() {
	var header = $("header");
	var headerHeight = header.height();
	var scrollTop = $(window).scrollTop();
	if (scrollTop > headerHeight) {
		if (!header.hasClass('active')) {
			header.addClass('active');		
		}
	} else {
		if (header.hasClass('active')) {
			header.removeClass('active');			
		}
	}
});
$(function(){
	$(".nav-right a:first,header nav a:first").addClass("active");
	$(".nav-right a,.local-link,header nav a").click(function(){	
						  
		
		$(this).addClass("active")

		goToByScroll('.'+$(this).attr("href"))
		return false;
	})
	
	var H =0;
	$('section').each(function(){
		H+=$(this).height()
	})
	$('.block').scroll(function(){
		var h=$('section').height();							  
		var t =$('.block').scrollTop();		
		var m = Math.round(t/h);
		if(t==H-(h)){
			$("header nav a").removeClass("active");
			$("header nav a").eq(5).addClass("active")	
		}else{
			$("header nav a").removeClass("active");
			$("header nav a").eq(m).addClass("active")	
		}
		
		
		//$(".nav-right a").removeClass("active");
		//$(".nav-right a").eq(m).addClass("active")	
	})	
	
})
function resizeIp(){
	
	if($(window).height()>$(window).width()){
		$(".wrap-top").css({'margin-top':($(window).height()-$(".wrap-top").height())/2})
		$("body").removeClass("portrait");
	}else{
		
		$("body").addClass("portrait");
	}	
}
function goToByScroll(id){
      // Remove "link" from the ID
    //id = id.replace("link", "");
      // Scroll
	 
    $('.block').animate({scrollTop: $(id).offset().top-54+$('.block').scrollTop()},1000);
	
	
}

$(window).resize(function(){setTimeout(function(){var height =$('section').height();$(".wrap-top").height(height-54);resizeIp();})})

function resizePage(){
	$(".left-text").each(function(){
		$(this).removeAttr("style");								  	
		var h = $("section").height()-54;
		var H = $(this).height();
		$(this).css({
			left:$(this).offset().left,
			position:'fixed',
			top:54
		})						 
	})
	
	
	
	$(".left-image").each(function(){
		$(this).removeAttr("style");												
		var h = $("section").height()-54;
		var H = $(this).height();
		$(this).css({
			left:$(".wrap-top").offset().left,
			right:'auto',
			position:'fixed',
			height:h,
			top:54
		})						 
	})
	
	$(".right-image").each(function(){
		$(this).removeAttr("style");												
		var h = $("section").height()-54;
		var H = $(this).height();
		var _t=$(this)
		$(this).css({
			right:$(window).width()-($(".wrap-top").offset().left+$(".wrap-top").width()),
			
			position:'fixed',
			height:h,
			top:54
		})						 
	})
	
	$(".left-image > *,.right-image >*").each(function(){
		$(this).removeAttr("style");													   
		var h = $("section").height()-54;
		var H = $(this).height();
		$(this).css({			
			height:h
		})						 
	})	
	
	$(".right-image-bigger p").css({"line-height":$(this).height()+"px"})
}
$(window).load(function() {	
	resizeIp();						
	//$('#nav').localScroll(800);
		var height =$('section').height();
	$(".wrap-top").height(height-54)
						
	$('body').css('visibility','visible');
	RepositionNav();
	var height =$('section').height();
	$(window).resize(function(){
		RepositionNav();
		height =$('section').height();
		setTimeout(function(){
			resizePage();	
		},100)	
	});	
	
	//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
/*	$('.sec-2 .icon').parallax(0, (height*2), 0.4, true);
	$('.sec-3 .icon').parallax(0, height*3.7, 0.4, true);
	$('.sec-4 .icon').parallax(0, height*4.7, 0.4, true);*/
	
	//$('.bg').parallax(0, 750, 0.3, true);
	var scrollorama = $.scrollorama({
        blocks:'.page',
		 enablePin:false
    });
	scrollorama.onBlockChange(function() {
				var i = scrollorama.blockIndex;			
			});
	

	resizePage();
	
	$(".block").scroll(function(){
		if($(".block").scrollTop()>$("section").height()/4){
			$(".top .left-image,.top .right-image").hide();
			
		}else{
			$(".top .left-image,.top .right-image").show();
			
		}		
		
		if($(".block").scrollTop()>$("section").height()/4){
			
			$(".bg-page-2").fadeIn(600);
		}else{
			
			$(".bg-page-2").fadeOut(600);
		}		
		
	})
	
	scrollorama.animate('.top .left-image',{		
		duration:height/4, 
		property:'opacity',
		start:1,
		end: 0
	})
	scrollorama.animate('.top .right-image',{		
		duration:height/4, 
		property:'opacity',
		start:1,
		end: 0
	})
	

	
	scrollorama.animate('.sec-2 .center-image',{		
		duration:height*1.9, 
		property:'top',
		start:(height/5),
		end: -(height/5)
	})
	scrollorama.animate('.sec-3 .center-image',{		
		duration:height*1.9, 
		property:'top',
		start:(height/5),
		end: -(height/5)
	})
	scrollorama.animate('.sec-4 .center-image',{		
		duration:height*1.9, 
		property:'top',
		start:(height/5),
		end: -(height/5)
	})
	scrollorama.animate('.sec-5 .center-image',{		
		duration:height*1.9, 
		property:'top',
		start:(height/5),
		end: -(height/5)
	})
	
	scrollorama.animate('.sec-2 .left-text',{
		delay:height/8,
		duration:500, 
		property:'opacity',
		start:0,
		end: 1
		
	})
	
	scrollorama.animate('.sec-2 .left-text .wp-editor',{
		delay:height*1.2,
		duration:400, 
		property:'opacity',
		start:1,
		end: 0
		
	})
	
	scrollorama.animate('.sec-3 .left-text',{
		delay:height/8,
		duration:500, 
		property:'opacity',
		start:0,
		end: 1
		
	})
	
	scrollorama.animate('.sec-3 .left-text .wp-editor',{
		delay:height*1.2,
		duration:400, 
		property:'opacity',
		start:1,
		end: 0
		
	})
	
	scrollorama.animate('.sec-4 .left-text',{
		delay:height/8,
		duration:500, 
		property:'opacity',
		start:0,
		end: 1
		
	})
	
	scrollorama.animate('.sec-4 .left-text .wp-editor',{
		delay:height*1.2,
		duration:400, 
		property:'opacity',
		start:1,
		end: 0
		
	})
	
	scrollorama.animate('.sec-5 .left-text',{
		delay:height/8,
		duration:500, 
		property:'opacity',
		start:0,
		end: 1
		
	})
	
	scrollorama.animate('.sec-5 .left-text .wp-editor',{
		delay:height*1.2,
		duration:400, 
		property:'opacity',
		start:1,
		end: 0
		
	})
	
	
	scrollorama.animate('.sec-2 .right-image',{		
		delay:height/2,
		duration:200, 
		property:'opacity',
		start:0,
		end: 1
	})
	scrollorama.animate('.sec-2 .right-image p',{
		delay:height,
		duration:200, 
		property:'opacity',
		start:1,
		end: 0
		
	})
	
	scrollorama.animate('.sec-3 .right-image',{		
		delay:height/2,
		duration:200, 
		property:'opacity',
		start:0,
		end: 1
	})
	scrollorama.animate('.sec-3 .right-image p',{
		delay:height,
		duration:200, 
		property:'opacity',
		start:1,
		end: 0
		
	})
	
	scrollorama.animate('.sec-4 .right-image',{		
		delay:height/2,
		duration:200, 
		property:'opacity',
		start:0,
		end: 1
	})
	scrollorama.animate('.sec-4 .right-image p',{
		delay:height,
		duration:200, 
		property:'opacity',
		start:1,
		end: 0
		
	})
	
	scrollorama.animate('.sec-5 .right-image',{		
		delay:height/2,
		duration:200, 
		property:'opacity',
		start:0,
		end: 1
	})
	
	

	
	
})