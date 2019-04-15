$(() => {
    	var feedbackSlider = jQuery('.feedback-slider');
        feedbackSlider.owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsTabletSmall: [550,1],
            itemsMobile : [480,1],
        });

        $('.post-module').hover(function() {
            $(this).find('.description').stop().animate({
              height: "toggle",
              opacity: "toggle"
            }, 300);
          });
 var typed = $(".typed");

  $(function() {
      
      
    typed.typed({
      strings: ["Alex Smith.", "Designer.", "Developer.", "Freelancer.", "Photographer"],
      typeSpeed: 100,
      loop: true,
    });
  });


          
function isInView(elem){
    if(!$(elem).offset())
      return false;
    return $(elem).offset().top - $(window).scrollTop() < $(elem).height() ;
  }
  
$(window).scroll(function(){
    if (isInView($('#counter'))){
      $('.counting').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
  
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        },{
            duration: 2000,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          });
        });
    }
 })
});

