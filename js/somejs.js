$(window).load(function() {

    $(".masonry img").click(function() {
      $(".lightbox").fadeIn(300);
      $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
      $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
      $("html").css("overflow", "hidden");
      if ($(this).is(":last-child")) {
        $(".arrowr").css("display", "none");
        $(".arrowl").css("display", "block");
      } else if ($(this).is(":first-child")) {
        $(".arrowr").css("display", "block");
        $(".arrowl").css("display", "none");
      } else {
        $(".arrowr").css("display", "block");
        $(".arrowl").css("display", "block");
      }
    });
  
    $(".close").click(function() {
      $(".lightbox").fadeOut(300);
      $(".lightbox img").remove();
      $("html").css("overflow", "auto");
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        $(".lightbox").fadeOut(300);
        $(".lightbox img").remove();
        $("html").css("overflow", "auto");
      }
    });
  
    $(".arrowr").click(function() {
      var imgSrc = $(".lightbox img").attr("src");
      var search = $(".masonry").find("img[src$='" + imgSrc + "']");
      var nextImg = search.next();
      $(".lightbox img").attr("src", nextImg.attr("src"));
      $(".filter").css("background-image", "url(" + nextImg.attr("src") + ")");
  
      if (!search.next().is(":last-child")) {
        $(".arrowl").css("display", "block");
      } else {
        $(".arrowr").css("display", "none");
      }
    });
  
    $(".arrowl").click(function() {
      var imgSrc = $(".lightbox img").attr("src");
      var search = $(".masonry").find("img[src$='" + imgSrc + "']");
      var prevImg = search.prev();
      $(".lightbox img").attr("src", prevImg.attr("src"));
      $(".filter").css("background-image", "url(" + prevImg.attr("src") + ")");
  
      if (!search.prev().is(":first-child")) {
        $(".arrowr").css("display", "block");
      } else {
        $(".arrowl").css("display", "none");
      }
    });
  
  });


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        slideSpeed: 5000,
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
    });
  });
