var myNav = document.getElementById('navbar');
var toTop = document.getElementById('scrolltotop');

//window chceck scroll position
window.onscroll = function () {
  "use strict";

  if (document.body.scrollTop >= 400 && window.innerWidth > 1000) {
    myNav.style.backgroundColor = "rgba(0,0,0,1)";
    toTop.style.display = "block";
  } else {

    if (window.innerWidth < 1000) {
      myNav.style.backgroundColor = "rgba(0,0,0,1)";
    } else {
      myNav.style.backgroundColor = "rgba(0,0,0,0.1)"
    }
    toTop.style.display = "none";
  }

};

//window on load check scroll location
$(window).on("load", function () {
  "use strict";

  if (document.body.scrollTop >= 200 && window.innerWidth > 1000) {
    myNav.style.backgroundColor = "rgba(0,0,0,1)";
    toTop.style.display = "block";
  } else {

    if (window.innerWidth < 1000) {
      myNav.style.backgroundColor = "rgba(0,0,0,1)";
    } else {
      myNav.style.backgroundColor = "rgba(0,0,0,0.1)"
    }
    toTop.style.display = "none";
  }

});
