/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function SetSectionSize() {
    var docHeight = $(window).height();
    docHeight = docHeight - 521;    
    
    var docWidth = $(window).width();
    if(docWidth < 1024) {
        $('.fix-div-container').css({
            'width':  docWidth 
        });
    }
    else {
        
        $('.fix-div-container').css({
            'width':  1024 
        });
    }
    /*
    $('#hand-section').css({
        'top':  docHeight 
    });
    */
    var topbarheight = $("#top-bar").height();
    var homepage = $('#home-article').height()+ 120;
    
    sectionheight = $(window).height() - topbarheight ;
    
    $('#cinch').css({
        'height':  sectionheight 
    });
    
    $('#cinch-article').css({
        'top':  topbarheight 
    });
     $('.time-line-centred-img1').css({
        'height':  sectionheight        
    });
     $('.time-line-centred-img').css({
        'height':  sectionheight        
    });
    
    var peoplepage = $('#people-article').height()+ 60;
    $('#people').css({
        'height':  peoplepage 
    });
    
    $('#people-article').css({
        'top':  topbarheight 
    });
    var businesspage = $('#business-article').height()+ 60;
    $('#business').css({
        'height':  businesspage 
    });
    
    $('#business-article').css({
        'top':  topbarheight 
    });
    var ourapppage = $('#ourapp-article').height()+ 60;
    $('#ourapp').css({
        'height':  ourapppage 
    });
    
    $('#ourapp-article').css({
        'top':  topbarheight 
    });
    
    var contactpage = $('#contact-article').height()+ 60;
    $('#contact').css({
        'height':  contactpage 
    });

    $('#contact-article').css({
        'top':  topbarheight 
    });
}

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    var docHeight = $(window).height();
    docHeight = docHeight - 521;
    $('#hand-section').css('top',(docHeight-(scrolled*.75))+'px');
}
$(document).ready(function() {   
    SetSectionSize();  
    $(window).resize(function(){       
        SetSectionSize();
    });
    
    
    /*  $(window).bind('scroll',function(e){
        parallaxScroll();
		
    });
    */
    
    $(window).bind('scroll',function(e){    	
        redrawDotNav();
    });
    //Add Animation on Links Click
    $('a[href*=#]').click(function() {
        
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);            
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');            
            if ($target.length) {
                var targetOffset = $target.offset().top;                
                $('html,body')
                .animate({
                    scrollTop: targetOffset
                }, 2000);
                return false;
            }
        }
    });   

});



function redrawDotNav(){
    var section1Top =  0;
    // The top of each section is offset by half the distance to the previous section.
    var section2Top =  $('#cinch').offset().top - (($('#people').offset().top - $('#cinch').offset().top) / 2);
    var section3Top =  $('#people').offset().top - (($('#business').offset().top - $('#people').offset().top) / 2);
    var section4Top =  $('#business').offset().top - (($('#ourapp').offset().top - $('#business').offset().top) / 2);
    var section5Top =  $('#ourapp').offset().top - (($('#contact').offset().top - $('#ourapp').offset().top) / 2);
    var section6Top =  $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 2);
    ;
    $('.nav1').removeClass('active');
    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
        $('#people-text').hide();
        $('#ourapp-text').hide();
        $('#business-text').hide();        
        $('#content-text').hide();
        $('.time-line-img1').fadeIn(500);
        $('.home-objects').fadeIn(500);
        
        
        $('.nav1').addClass('active');        
        $('.nav2').removeClass('active');
        $('.nav3').removeClass('active');
        $('.nav4').removeClass('active');
        $('.nav5').removeClass('active');
    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
        $('#people-text').hide();
        $('#ourapp-text').hide();
        $('#business-text').hide();        
        $('#content-text').hide();
        $('.time-line-img1').fadeIn(500);
        $('.home-objects').fadeIn(500);
        
        $('.nav1').addClass('active');
        $('.nav2').removeClass('active');
        $('.nav3').removeClass('active');
        $('.nav4').removeClass('active');
        $('.nav5').removeClass('active');
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
        $('.time-line-img1').hide();
        $('.home-objects').hide();
        $('#ourapp-text').hide();
        $('#business-text').hide();        
        $('#content-text').hide();
        $('.time-line-img').fadeIn(500);
        $('.section-content').fadeIn(500);
        $('#people-text').fadeIn(500);
        $('.nav2').addClass('active');
        $('.nav1').removeClass('active');
        $('.nav3').removeClass('active');
        $('.nav4').removeClass('active');
        $('.nav5').removeClass('active');
    } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
        
        $('.time-line-img1').hide();
        $('.home-objects').hide();
        $('#ourapp-text').hide();
        $('#people-text').hide();        
        $('#content-text').hide();
        $('#business-text').fadeIn(500);
        
        $('.nav3').addClass('active');
        $('.nav2').removeClass('active');
        $('.nav1').removeClass('active');
        $('.nav4').removeClass('active');
        $('.nav5').removeClass('active');
    } else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
        $('.time-line-img1').hide();
        $('.home-objects').hide();
        $('#business-text').hide();
        $('#people-text').hide();        
        $('#content-text').hide();
        $('#ourapp-text').fadeIn(500);
        
        $('.nav4').addClass('active');
        $('.nav2').removeClass('active');
        $('.nav3').removeClass('active');
        $('.nav1').removeClass('active');
        $('.nav5').removeClass('active');
    } else if ($(document).scrollTop() >= section6Top){        
        $('.time-line-img1').hide();
        $('.home-objects').hide();
        $('#business-text').hide();
        $('#people-text').hide();        
        $('#ourapp-text').hide();
        $('#content-text').fadeIn(500);
        $('.nav5').addClass('active');
        $('.nav2').removeClass('active');
        $('.nav3').removeClass('active');
        $('.nav4').removeClass('active');
        $('.nav1').removeClass('active');
    }

}