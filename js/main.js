$(document).ready(function(){

    let $btns = $('.project_site .button-group button')
    
    $btns.click(function(e){
        $('.project_site .button-group button').removeClass('active')
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project_site .grid').isotope({
            filter: selector
        });
        return false;
    })

    // POPUP
    $('.project_site .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true} 
    })

    // CAROUSSEL
    $('.about_site .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {items: 1},
            544: {items: 2}
        }
    })

    // STICKY NAVIGATION
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area .main_part').addClass('navbar_fixed');
                } else{
                    $('.header_area .main_part').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();
});