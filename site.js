$("document").ready(function() {
  var menu = false;
  
  $("#navbar-page").css("left","50%");
  
  $("#hamburger-menu-container").click(function() {
    if (!menu) {
      $("#top-line").css("top", "10px");
      $("#bottom-line").css("top", "10px");
      $("#mid-line").css("visibility", "hidden");
      $("#mobile-menu").css("left", "0");
      $("#hamburger-menu span").css("background-color", "white");
      $("#navbar-name a").css("color", "white");
      $("#mobile-menu-overlay").css("display","block");
      $("#bottom-line").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        $("#top-line").css("transform", "rotate(45deg)");
        $("#bottom-line").css("transform", "rotate(-45deg)");
      });
      menu = true;
    } else {
      $("#bottom-line").css("transform", "rotate(0deg)");
      $("#top-line").css("transform", "rotate(0deg)");
      $("#mobile-menu").css("left", "-300px");
      
      $("#hamburger-menu span").css("background-color", "black");
      $("#navbar-name a").css("color", "black");
      $("#mobile-menu-overlay").css("display","none");
      $("#top-line").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        $("#mid-line").css("visibility", "visible");
        $("#top-line").css("top", "0px");
        $("#bottom-line").css("top", "20px");
      });
      menu = false;
    }
  });
  
  $(".about").click(function() {
  	if (menu) {
  		$("#hamburger-menu-container").trigger("click");
  	}
  	$('html, body').animate({
        scrollTop: $("#about-txt").offset().top
    }, 500);
  });
});