let myBtn = document.getElementById("bottom-top");
window.onscroll = function(){
    scrollFunction();
   }

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        myBtn.style.display = 'block';
    }else{
        myBtn.style.display = 'none';
    }
}

function backToTop(){
    document.body.scrollTo = 0;
    document.documentElement.scrollTop = 0;
}
myBtn.addEventListener('click',backToTop);

//flexise Carousel
$(window).load(function () {
  $("#flexiselCarousel").flexisel({
    visibleItems: 4,
    itemsToScroll: 2,
    animationSpeed: 400,
    infinite: true,
    navigationTargetSelector: null,
    autoPlay: {
      enable: true,
      interval: 5000,
      pauseOnHover: true,
    },
    responsiveBreakpoints: {
      portrait: {
        changePoint: 480,
        visibleItems: 1,
        itemsToScroll: 1,
      },
      landscape: {
        changePoint: 640,
        visibleItems: 2,
        itemsToScroll: 2,
      },
      tablet: {
        changePoint: 768,
        visibleItems: 3,
        itemsToScroll: 3,
      },
    },
  });
});