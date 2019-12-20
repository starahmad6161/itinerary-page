$(function() {
    'use strict';
  
    //$('.main-content .content .content-day.main-overview .left-box .box-container.imgs-gallery').addClass('active').siblings().removeClass('active');
    //$("header").css("padding-top", $("header .navbar").innerHeight());
    $("header .main-content").css({
        //height: "calc(100vh - " +$("header .navbar").innerHeight() + "px)",
        paddingTop: $("header .navbar").innerHeight() + 10
    });
    

    let mainContentSwiper = new Swiper('.main-content .custom-tabs .swiper-container', {
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: '.main-content .custom-tabs .swiper-button-next',
            prevEl: '.main-content .custom-tabs .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 7,
            },
            1200: {
                slidesPerView: 8,
            }
        }
    });


    /*When Click Content List Item [overview , Map , ....act] */
    $(".main-content .content .content-day .right-box .list-items .list_item").on('click', function () {  
        let dataBoxContainer = $(this).data("box-container"),
            boxContainer = $(this).parents('.content-day').find(dataBoxContainer);
        $(this).addClass("selected").siblings().removeClass("selected");
        boxContainer.addClass("active d-flex").siblings().removeClass("active d-flex");

        if (window.innerWidth < 767) {
            $(".main-content .content .content-day .right-box").removeClass("active");
        }
    });

    $(".main-content .content .content-day .left-box .box-container .box-head .back-btn").on('click', function () {  
        if (window.innerWidth < 767) {
            let boxContainer = $(this).parents('.box-container');
            boxContainer.removeClass("active");
            $(".main-content .content .content-day .right-box").addClass("active");
        }
    });
    /*When Click Days Items [Day 1 , Day 2 , ....act] */
    $(".main-content .custom-tabs .swiper-slide").on("click", function () {  
        let dataDayContent = $(this).data("day-content"),
            //dayContent = $(this).parents('.main-content').find(dataDayContent);
            dayContent = $(this).parents('header').find(dataDayContent);
        $(this).addClass("selected").siblings().removeClass("selected");
        dayContent.siblings().removeClass("active d-flex").fadeOut(0, function () {  
            dayContent.fadeIn(200).addClass("active d-flex");
            $(".box-content").getNiceScroll().resize();
            $(".right-box_scroll").getNiceScroll().resize();
            
        });
        if (window.innerWidth < 768) {
            $(".main-content .content .content-day .right-box").addClass("active");
            $(".main-content .content .content-day .left-box .box-container.active").removeClass('active');
        }
    });

    /*pricing-box-content */
    $(".main-content .content .content-day.main-overview .left-box .box-container .pricing-box-content").on("click", function () {  
        $(".box-content").getNiceScroll().resize();
    });

    /*itinerary-btn */
    $(".main-content .content .content-day.main-overview .left-box .box-container .pricing-box-content .itinerary-container .itinerary-content").hide(); 
    $(".main-content .content .content-day.main-overview .left-box .box-container .pricing-box-content .itinerary-container .itinerary-btn").on("click", function () {  
        let itineraryContainer = $(this).parents(".itinerary-container").find('.itinerary-content');
        console.log(itineraryContainer);
        itineraryContainer.slideToggle(200, function () {  
            $(".box-content").getNiceScroll().resize();
        });
    });

    /*.select-package-btn */
    $(".main-content .content .content-day.main-overview .left-box .box-container .pricing-box-content .itinerary-container .select-package-btn").on("click", function () {  
        $(this).toggleClass("selected");
    });
    
    /*.card .btn-link */
    $(".main-content .content .content-day.main-overview .left-box .box-container .pricing-box-content .card.active .card-body").slideDown(200);
    $(".main-content .content .content-day.main-overview .left-box .box-container .box-content .custom-accordion .card .btn-link").on("click", function () {  
        let card = $(this).parents('.card');
        card.addClass('active').siblings().removeClass("active");
        card.find(".card-body").slideDown(200).end().siblings().find(".card-body").slideUp(200, function () {  
            $(".box-content").getNiceScroll().resize();
        });
    });

    let niceScrollOptions = {
        cursorwidth:12,
        cursoropacitymin:0.4,
        cursorcolor:'#fff',
        background: '#124374',
        cursorborder:'1px solid #124374',
        cursorborderradius:4,
        autohidemode:'none',
        horizrailenabled:false
    }
    $(".box-container.scrolling .box-content").niceScroll(niceScrollOptions);
    $(".right-box_scroll").niceScroll({
        cursorwidth: 5,
        cursoropacitymin:0.4,
        cursorcolor:'#fff',
        cursorborder:'1px solid #124374',
        cursorborderradius: 4,
        autohidemode:'none'
    });




    /*Gallery */
    $('#lightgallery').lightGallery();
    

    $(".main-content .content .content-day.main-overview .left-box .box-container .box-content .owl-carousel .owl_item").on("click", function () {
        let dataFullImg = $(this).data("full-img");
        $(this).addClass('selected').parents('.owl-item').siblings().find('.owl_item').removeClass('selected');
        $(this).parents('.box-content').find('.full-image').data('lg-index', $(this).parents(".owl-item").index() );
        $(this).parents('.box-content').find('.full-image').attr('src', dataFullImg); 
    });
    
    $(".main-content .content .content-day.main-overview .left-box .box-container .box-content .full-image").on("click", function () {  
        let lgSlider = $(this).parents('.box-content');
        lgSlider.find('#lightgallery .lg-item:eq('+ $(this).data('lg-index') +')').trigger('click');
    });
  

      

    //*Flight Information */
    $(".main-content .content .content-day .left-box .box-container .flight-info-box-content .cards-container .card .card-head svg").on('click', function () {  
        let card = $(this).parents('.card');
        card.siblings().find('.card-body').slideUp(200);
        card.find('.card-body').slideDown(200, function () {  
            $(".box-content").getNiceScroll().resize();
        });
    });
    
   $(window).on("load", function () {
       /* .owl-carousel*/
      $(".main-content .content .content-day.main-overview .left-box .box-container .box-content .owl-carousel").owlCarousel({
        dots: false,
        margin: 10,
        nav: true,
        responsive: {
            0:{
                items: 3
            },
            768:{
                items: 4
            }
        },
        onInitialize: function () {  
            console.log("init");
        }
      });
       $('.main-content .content .content-day .left-box .box-container .flight-info-box-content .cards-container .card.active .card-body').show().parents('.card').siblings().find('.card-body').hide();
       if (window.innerWidth < 768) {
           
           $(".main-content .content .content-day .left-box .box-container.active").removeClass('active');
           $(".main-content .content .content-day .right-box .list-items .list_item.selected").removeClass('selected');
        } 
    });


   
});