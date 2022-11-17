let width = screen.availWidth;




 $('.menu-toggle').click(function(){
     $('#mobile-menu').toggleClass("is-active");
     $('ul').toggleClass("active");
  });

  $(".nav-item").click(function(){
    $("ul").removeClass("active");
    $('#mobile-menu').toggleClass("is-active");
  });
  



  var swiper = new Swiper('.swiper', {  
    slidesPerView: width > 480 ? "3" : "1",
    spaceBetween: 30,
    speed: 600,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

