$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.navbar').addClass("sticky");
      }
      else{
        $('.navbar').removeClass("sticky");
      }
      if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
      }else{
        $('.scroll-up-btn').removeClass("show");
      }
    });

    //slide Up Script
    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
    });

    //Typeing animation script

    var typed = new Typed(".typing", {
      strings: ["Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    var typed = new Typed(".typing-2", {
      strings: ["Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

      //Toggle menu 
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
      });
       //owl carousel script
       $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false
          }
        }     
      });
    

   