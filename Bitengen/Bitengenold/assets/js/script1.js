$('#owl-carousel1').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('#owl-carousel3').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    animateOut: 'fadeOut',
    items:1,
    stagePadding:0,
    smartSpeed:200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})