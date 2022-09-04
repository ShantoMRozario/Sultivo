// Feahter Icon 
feather.replace();

$(function(){

    // VenuBox For Video
    new VenoBox({
        selector: ".shantomrozario",
        spinner:"bounce",
        maxWidth:"80%",
    });

    // Counter UP
    $('.shantocount').counterUp({
        delay: 15,
        time: 1500
    });

    // Slick Slider
    $('.portfolio_left_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.image_port'
      });
      $('.image_port').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio_left_slide',
        focusOnSelect: true,
        prevArrow: '.prev_arrow',
        nextArrow: '.next_arrow',
        autoplay: true ,
        
      });
    
    
    
    
})