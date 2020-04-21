 $(function() {
   "use strict";
      
     //Activate Scrollspy
    
    var topoffset = 80;  
    var wheight = $(window).height(); //get the height of the window
     
    $('.fullheight').css('height', wheight); // set the window height to wheight
     
    $('body').scrollspy({
        target: 'header .navbar',
        offset: topoffset
    });
     
     
    
    var hash = $(this).find('li.active a').attr('href');
        
        if( hash !== '#skills' ) {
            $('header .navbar-fixed-top').addClass('inbody');    
        } else {
            $('header .navbar-fixed-top').removeClass('inbody');
        }     
    
    //add inbody class to nav when scroll spy fires 
    
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
        
        var hash = $(this).find('li.active a').attr('href');
        
        if( hash !== '#skills' ) {
            $('header .navbar-fixed-top').addClass('inbody');    
        } else {
            $('header .navbar-fixed-top').removeClass('inbody');
        }     
    });
    
     // smooth scrolling
    
    
    $(function() {
      $('.navbar a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
      }
    }
  });
});
    
   
    
});


