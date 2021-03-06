// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

function CurrentMenuClick() {
    $('a[href*=#]').click(function() {
        if($(this).parent().hasClass('menu-icon'))  {
            
        }
        else {
            $('.top-nav ul li.active').removeClass ('active');
            $(this).parent().addClass('active');        
        }
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);            
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');   
            if(this.hash.slice(1) == "ourapp") {                             
                $.when(
                    $('#home-fixed-left').fadeOut(400),
                    $('#home-fixed-right').fadeOut(400),
                    $('#retailers-fixed-left').fadeOut(400),
                    $('#retailers-fixed-right').fadeOut(400),
                    $('#service-fixed-left').fadeOut(400),
                    $('#service-fixed-right').fadeOut(400),
                    $('#sdk-fixed-left').fadeOut(400),
                    $('#sdk-fixed-right').fadeOut(400),
                    $('#contact-fixed-left').fadeOut(400),
                    $('#contact-fixed-right').fadeOut(400)
                    ).done(function() {
                    $('#ourapp-fixed-left').fadeIn(400);
                    $('#ourapp-fixed-right').fadeIn(400);
                });
                
                
            }
            else if(this.hash.slice(1) == "home") {       
                $.when(
                    $('#ourapp-fixed-left').fadeOut(400),
                    $('#ourapp-fixed-right').fadeOut(400),
                    $('#retailers-fixed-left').fadeOut(400),
                    $('#retailers-fixed-right').fadeOut(400),
                    $('#service-fixed-left').fadeOut(400),
                    $('#service-fixed-right').fadeOut(400),
                    $('#sdk-fixed-left').fadeOut(400),
                    $('#sdk-fixed-right').fadeOut(400),
                    $('#contact-fixed-left').fadeOut(400),
                    $('#contact-fixed-right').fadeOut(400)
                    ).done(function() {
                    $('#home-fixed-left').fadeIn(400);
                    $('#home-fixed-right').fadeIn(400);
                });
            }
            else if(this.hash.slice(1) == "retailers") {       
                $.when(
                    $('#ourapp-fixed-left').fadeOut(400),
                    $('#ourapp-fixed-right').fadeOut(400),                    
                    $('#home-fixed-left').fadeOut(400),
                    $('#home-fixed-right').fadeOut(400),
                    $('#service-fixed-left').fadeOut(400),
                    $('#service-fixed-right').fadeOut(400),
                    $('#sdk-fixed-left').fadeOut(400),
                    $('#sdk-fixed-right').fadeOut(400),
                    $('#contact-fixed-left').fadeOut(400),
                    $('#contact-fixed-right').fadeOut(400)
                    ).done(function() {
                    $('#retailers-fixed-left').fadeIn(400);
                    $('#retailers-fixed-right').fadeIn(400);
                });
            }
            else if(this.hash.slice(1) == "service") {       
                $.when(
                    $('#ourapp-fixed-left').fadeOut(400),
                    $('#ourapp-fixed-right').fadeOut(400),                    
                    $('#home-fixed-left').fadeOut(400),
                    $('#home-fixed-right').fadeOut(400),
                    $('#retailers-fixed-left').fadeOut(400),
                    $('#retailers-fixed-right').fadeOut(400),
                    $('#sdk-fixed-left').fadeOut(400),
                    $('#sdk-fixed-right').fadeOut(400),
                    $('#contact-fixed-left').fadeOut(400),
                    $('#contact-fixed-right').fadeOut(400)
                    ).done(function() {                    
                    $('#service-fixed-left').fadeIn(400);
                    $('#service-fixed-right').fadeIn(400);
                });
            }
            else if(this.hash.slice(1) == "sdk") {       
                $.when(
                    $('#ourapp-fixed-left').fadeOut(400),
                    $('#ourapp-fixed-right').fadeOut(400),                    
                    $('#home-fixed-left').fadeOut(400),
                    $('#home-fixed-right').fadeOut(400),
                    $('#retailers-fixed-left').fadeOut(400),
                    $('#retailers-fixed-right').fadeOut(400),
                    $('#service-fixed-left').fadeOut(400),
                    $('#service-fixed-right').fadeOut(400),                    
                    $('#contact-fixed-left').fadeOut(400),
                    $('#contact-fixed-right').fadeOut(400)
                    ).done(function() {
                    $('#sdk-fixed-left').fadeIn(400);
                    $('#sdk-fixed-right').fadeIn(400);
                });
            }
            else if(this.hash.slice(1) == "contact") {       
                $.when(
                    $('#ourapp-fixed-left').fadeOut(400),
                    $('#ourapp-fixed-right').fadeOut(400),                    
                    $('#home-fixed-left').fadeOut(400),
                    $('#home-fixed-right').fadeOut(400),
                    $('#retailers-fixed-left').fadeOut(400),
                    $('#retailers-fixed-right').fadeOut(400),
                    $('#service-fixed-left').fadeOut(400),
                    $('#service-fixed-right').fadeOut(400),
                    $('#sdk-fixed-left').fadeOut(400),
                    $('#sdk-fixed-right').fadeOut(400)                                        
                    ).done(function() {
                    $('#contact-fixed-left').fadeIn(400);
                    $('#contact-fixed-right').fadeIn(400);
                });
            }
            if ($target.length) {
                var targetOffset = $target.offset().top;                
                $('html,body')
                .animate({
                    scrollTop: targetOffset
                }, 1000);
                return false;
            }
        }
    });   
}

function redrawDotNav(){
    var section1Top =  0;    
    // The top of each section is offset by half the distance to the previous section.
    var section1Top =  $('#home').offset().top - (($('#ourapp').offset().top - $('#home').offset().top) / 2);
    var section2Top =  $('#ourapp').offset().top - (($('#retailers').offset().top - $('#ourapp').offset().top) / 2);
    var section3Top =  $('#retailers').offset().top - (($('#service').offset().top - $('#retailers').offset().top) / 2);
    var section4Top =  $('#service').offset().top - (($('#sdk').offset().top - $('#service').offset().top) / 2);
    var section5Top =  $('#sdk').offset().top - (($('#contact').offset().top - $('#sdk').offset().top) / 2);
    var section6Top =  $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 2);
    $('.nav0').addClass('active');
    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
       
        if($(window).width() < 900) {
            $('#retailers-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#retailers-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#service-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#service-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#sdk-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#sdk-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#contact-fixed-left').stop( true, true ).fadeOut(400);
            $('#contact-fixed-right').stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#home-fixed-left').delay(100).fadeIn(3000);
            $('#home-fixed-right').delay(100).fadeIn(3000);   
        }
        
        $(".bg-page-2").fadeOut(600);
        $('#menu-item-44').addClass('active');        
        $('#menu-item-43').removeClass('active');        
        $('#menu-item-38').removeClass('active');
        $('#menu-item-39').removeClass('active');
        $('#menu-item-40').removeClass('active');
        $('#menu-item-41').removeClass('active');  
    
    }else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){           
        if($(window).width() < 800) {
            $('#home-fixed-left').delay(100).delay(100).stop( true, true ).fadeOut(4000);
            $('#home-fixed-right').delay(100).delay(100).stop( true, true ).fadeOut(4000);
            $('#retailers-fixed-left').delay(100).stop( true, true ).fadeOut(4000);
            $('#retailers-fixed-right').delay(100).stop( true, true ).fadeOut(4000);
            $('#service-fixed-left').delay(100).stop( true, true ).fadeOut(4000);
            $('#service-fixed-right').delay(100).stop( true, true ).fadeOut(4000);
            $('#sdk-fixed-left').delay(100).stop( true, true ).fadeOut(4000);
            $('#sdk-fixed-right').delay(100).stop( true, true ).fadeOut(4000);
            $('#contact-fixed-left').stop( true, true ).fadeOut(4000);
            $('#contact-fixed-right').stop( true, true ).fadeOut(4000);
            $('#ourapp-fixed-left').delay(100).fadeIn(3000);
            $('#ourapp-fixed-right').delay(100).fadeIn(3000);
        }      
        $(".bg-page-2").fadeIn(800);
        $('#menu-item-44').removeClass('active');        
        $('#menu-item-43').addClass('active');        
        $('#menu-item-38').removeClass('active');
        $('#menu-item-39').removeClass('active');
        $('#menu-item-40').removeClass('active');
        $('#menu-item-41').removeClass('active');  
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){ 
        if($(window).width() < 800) {
            $('#ourapp-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#service-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#service-fixed-right').delay(100).stop( true, true ).fadeOut(400);        
            $('#home-fixed-left').delay(100).delay(100).stop( true, true ).fadeOut(400);
            $('#home-fixed-right').delay(100).delay(100).stop( true, true ).fadeOut(400);
            $('#sdk-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#sdk-fixed-right').delay(100).stop( true, true ).fadeOut(400);        
                
            $('#retailers-fixed-left').delay(100).fadeIn(3000);
            $('#retailers-fixed-right').delay(100).fadeIn(3000);
        }
       
        $('#menu-item-44').removeClass('active');        
        $('#menu-item-43').removeClass('active');        
        $('#menu-item-38').addClass('active');
        $('#menu-item-39').removeClass('active');
        $('#menu-item-40').removeClass('active');
        $('#menu-item-41').removeClass('active');
    } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){        
        if($(window).width() < 800) {
            $('#retailers-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#retailers-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#sdk-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#sdk-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#home-fixed-left').delay(100).delay(100).stop( true, true ).fadeOut(400);
            $('#home-fixed-right').delay(100).delay(100).stop( true, true ).fadeOut(400);        
                
                
            $('#service-fixed-left').delay(100).fadeIn(3000);
            $('#service-fixed-right').delay(100).fadeIn(3000);
        }
       
        $('#menu-item-44').removeClass('active');        
        $('#menu-item-43').removeClass('active');        
        $('#menu-item-38').removeClass('active');
        $('#menu-item-39').addClass('active');
        $('#menu-item-40').removeClass('active');
        $('#menu-item-41').removeClass('active');
    } else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){        
        if($(window).width() < 800) {
            $('#service-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#service-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#contact-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#contact-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-right').delay(100).stop( true, true ).fadeOut(400);        
            $('#home-fixed-left').delay(100).delay(100).stop( true, true ).fadeOut(400);
            $('#home-fixed-right').delay(100).delay(100).stop( true, true ).fadeOut(400);
            $('#retailers-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#retailers-fixed-right').delay(100).stop( true, true ).fadeOut(400);
                
                
            $('#sdk-fixed-left').delay(100).fadeIn(3000);
            $('#sdk-fixed-right').delay(100).fadeIn(3000);
        }
        
    
        $('#menu-item-44').removeClass('active');        
        $('#menu-item-43').removeClass('active');        
        $('#menu-item-38').removeClass('active');
        $('#menu-item-39').removeClass('active');
        $('#menu-item-40').addClass('active');
        $('#menu-item-41').removeClass('active');
    } else if ($(document).scrollTop() >= section6Top){                
        if($(window).width() < 800) {
            $('#sdk-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#sdk-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#ourapp-fixed-right').delay(100).stop( true, true ).fadeOut(400);
            $('#service-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#service-fixed-right').delay(100).stop( true, true ).fadeOut(400);        
            $('#home-fixed-left').delay(100).delay(100).stop( true, true ).fadeOut(400);
            $('#home-fixed-right').delay(100).delay(100).stop( true, true ).fadeOut(400);
            $('#retailers-fixed-left').delay(100).stop( true, true ).fadeOut(400);
            $('#retailers-fixed-right').delay(100).stop( true, true ).fadeOut(400);
                
                
                
            $('#contact-fixed-left').delay(100).fadeIn(3000);
            $('#contact-fixed-right').delay(100).fadeIn(3000)        
        }
        $('#menu-item-44').removeClass('active');        
        $('#menu-item-43').removeClass('active');        
        $('#menu-item-38').removeClass('active');
        $('#menu-item-39').removeClass('active');
        $('#menu-item-40').removeClass('active');
        $('#menu-item-41').addClass('active');     
    }
}

function SetSectionSize() {
    var docHeight = $(window).height();
    var docWidth = $(window).width();
    var topbarheight = $("#header").height();
    homesectionheight = $("#home-article").height();
    appsectionheight =  $("#app-article").height();    
    retailerssectionheight =  $("#retailers-article").height();    
    servicesectionheight =  $("#service-article").height();    
    sdksectionheight =  $("#sdk-article").height();    
    contactsectionheight =  $("#contact-article").height();  
    sidewidth = $('#home-left').width();
    
    $("#home-fixed-left").css({
        'width': sidewidth,
        'height':  homesectionheight
    })
    
    $("#home-fixed-right").css({
        'width': sidewidth,
        'height':  homesectionheight
    })
    
    $("#ourapp-fixed-left").css({
        'width': sidewidth,
        'height':  appsectionheight
    })
    
    $("#ourapp-fixed-right").css({
        'width': sidewidth,
        'height':  appsectionheight
    })
    
    $("#retailers-fixed-left").css({
        'width': sidewidth,
        'height':  retailerssectionheight
    })
    
    $("#retailers-fixed-right").css({
        'width': sidewidth,
        'height':  retailerssectionheight
    })
    
    
    $("#service-fixed-left").css({
        'width': sidewidth,
        'height':  retailerssectionheight
    })
    
    $("#service-fixed-right").css({
        'width': sidewidth,
        'height':  retailerssectionheight
    })
    
    $("#sdk-fixed-left").css({
        'width': sidewidth,
        'height':  sdksectionheight
    })
    
    $("#sdk-fixed-right").css({
        'width': sidewidth,
        'height':  sdksectionheight
    })
    
    
    $("#contact-fixed-left").css({
        'width': sidewidth,
        'height':  contactsectionheight
    })
    
    $("#contact-fixed-right").css({
        'width': sidewidth,
        'height':  contactsectionheight
    })
    
    // Home Page Classes
    $('.time-line-centred-img').css({
        'height':  homesectionheight        
    });
    
    $('#home').css({
        'height':  homesectionheight
    });
    $('.vcentere-content').css({
        'height':  homesectionheight
    });
    
    
    // Other Page Classes
    $('.time-line-centred-img1').css({
        'height':  docHeight        
    });
    $('.vcentere-content1').css({
        'height':  docHeight
    });
    $('#ourapp').css({
        'height':  appsectionheight
    });
    
    $('#retailers').css({
        'height':  retailerssectionheight
    });
    
    $('#service').css({
        'height':  servicesectionheight
    });
    $('#sdk').css({
        'height':  sdksectionheight
    });
    $('#contact').css({
        'height':  contactsectionheight
    });


}

$(document).ready(function() {
    $(".top-bar-section ul li a").click(function() {
        if($(".top-bar").hasClass("expanded")) {
            $( ".top-bar" ).removeClass( "expanded" );
        }
    })
    SetSectionSize();  
    // Click on Menu Items
    CurrentMenuClick();
    //Scropp Bind Event
    $(window).bind('scroll',function(e){    	
        redrawDotNav();
    });
    
    // Scale Text
    var $body = $('#sdk-left'); //Cache this for performance   
    var setBodyScale = function() {
        var scaleSource = $body.width(),
        scaleFactor = 0.25,                     
        maxScale = 500,
        minScale = 40; //Tweak these values to taste
        if($(window).height() < 700) {
            scaleFactor = 0.33;           
        }
        if ($(window).width() < 600) {
            scaleFactor = 0.80;     
            
        }
        var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:        
        if (fontSize > maxScale) fontSize = maxScale;
        if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums
        if ($(window).width() < 900) {
            $('.text').css('font-size', fontSize + '%');
            $('.text p').css('font-size', fontSize + '%');
            $('.text ul').css('font-size', fontSize + '%');
        }
    //$('.text h2').css('font-size', fontSize + '%');
        
    }
    // Set Div Size
    setBodyScale();
    $(window).resize(function(){       
        SetSectionSize();
        setBodyScale();
    });
    var height =$(document).height();
    
    
    
    // Change Backgorund
    
    //    $(window).bind('scroll',function(e){    	
    //        if($("body").scrollTop()>$("section").height()/5){
    //			
    //			$(".bg-page-2").fadeIn(800);
    //		}else{
    //			
    //			$(".bg-page-2").fadeOut(600);
    //		}	
    //    });
    
    var scrollorama = $.scrollorama({
        blocks:'.page',
        enablePin:false
    });
    scrollorama.onBlockChange(function() {
        var i = scrollorama.blockIndex;			
    });

// Animation of Home Page
//    scrollorama.animate('#home-left',{        
//        delay: height/6, 
//        duration:500,  
//        property:'opacity', 
//        start:100,
//        end:0
//    }) 
//    scrollorama.animate('#home-right',{
//        delay: height/6, 
//        duration:500,         
//        property:'opacity', 
//        start:100,
//        end:0
//    }) 
//    // Animation of App Page
//        scrollorama.animate('#ourapp-left',{
//            delay:height/8,
//            duration:800,  
//            property:'opacity',
//            start:0,
//            end: 100
//        }) 
//        
//        scrollorama.animate('#ourapp-left-text',{
//            delay:height/8,
//            duration:800, 
//            property:'opacity', 
//            start:100,
//            end:0
//    		
//        })
//    
//        scrollorama.animate('#ourapp-right',{
//            delay:height/8,
//            duration:800, 
//            property:'opacity',
//            start:0,
//            end: 100
//        }) 
//        
//        scrollorama.animate('#ourapp-right-text',{
//            delay:height/8,
//            duration:800, 
//            property:'opacity', 
//            start:100,
//            end:0
//    		
//        })
//    // Animation on Retailers Page
//    
//    scrollorama.animate('#retailers-left',{
//        delay:height/7,
//        duration:20,
//        property:'opacity',
//        start:0,
//        end: 100
//    }) 
//    
//    scrollorama.animate('#retailers-left-text',{
//        delay:height/7,
//        duration:160, 
//        property:'opacity', 
//        start:100,
//        end:0
//		
//    })
//    
//    scrollorama.animate('#retailers-right',{
//        delay:height/7,
//        duration:50, 
//        property:'opacity',
//        start:0,
//        end: 100
//    }) 
//    
//    scrollorama.animate('#retailers-right-text',{
//        delay:height/7,
//        duration:160,  
//        property:'opacity', 
//        start:100,
//        end:0
//		
//    })
//    
//    // Animation for Service Page
//    
//    scrollorama.animate('#service-left',{
//        delay:height/7,
//        duration:20, 
//        property:'opacity',
//        start:0,
//        end: 100
//    }) 
//    
//    scrollorama.animate('#service-left-text',{
//        delay:height/7,
//        duration:150, 
//        property:'opacity', 
//        start:100,
//        end:0
//		
//    })
//    
//    scrollorama.animate('#service-right',{
//        delay:height/7,
//        duration:50, 
//        property:'opacity',
//        start:0,
//        end: 100
//    }) 
//    
//    scrollorama.animate('#service-right-text',{
//        delay:height/7,
//        duration:150, 
//        property:'opacity', 
//        start:100,
//        end:0
//		
//    })
//    
//    // SDK Page Animations
//    
//    scrollorama.animate('#sdk-left',{
//        delay:height/7,
//        duration:20, 
//        property:'opacity',
//        start:0,
//        end: 100
//    }) 
//    
//    scrollorama.animate('#sdk-left-text',{
//        delay:height/7,
//        duration:160, 
//        property:'opacity', 
//        start:100,
//        end:0
//		
//    })
//    
//    scrollorama.animate('#sdk-right',{
//        delay:height/7,
//        duration:50, 
//        property:'opacity',
//        start:0,
//        end: 100
//    }) 
//    
//    scrollorama.animate('#sdk-right-text',{
//        delay:height/7,
//        duration:160, 
//        property:'opacity', 
//        start:100,
//        end:0
//		
//    })
//    
//    // Contact Page Animations
//    
//    scrollorama.animate('#contact-left',{
//        delay:height/7,
//        duration:20, 
//        property:'opacity',
//        start:0,
//        end: 100
//    }) 
//    
//    scrollorama.animate('#contact-left-text',{
//        delay:height/7,
//        duration:160, 
//        property:'opacity', 
//        start:100,
//        end:0
//		
//    })
//    
//    scrollorama.animate('#contact-right',{
//        delay:height/7,
//        duration:50, 
//        property:'opacity',
//        start:0,
//        end: 100
//    }) 
//    
//    scrollorama.animate('#contact-right-text',{
//        delay:height/7,
//        duration:160, 
//        property:'opacity', 
//        start:100,
//        end:0
//		
//    })
});

//id="retailers-left"