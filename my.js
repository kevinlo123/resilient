$("#nav ul li a[href^='#']").on('click', function(e) {
    
           // prevent default anchor click behavior
           e.preventDefault();
    
           // animate
           $('html, body').animate({
               scrollTop: $(this.hash).offset().top
             }, 300, function(){
       
               // when done, add hash to url
               // (default click behaviour)
               window.location.hash = this.hash;
             });
    
        });


        $("").on('click', function(e) {
           e.preventDefault();
           $('html, body').animate({
                scrollTop: $("#section-1").offset().top
             }, 300);
        });
