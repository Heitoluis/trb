var lastScrollPosition;
var bFixed = false;

window.addEventListener("scroll", function (e) {
  if (bFixed === true) {
    if (document.documentElement.scrollTop < lastScrollPosition) {
      document.getElementById("nav").style.position = "fixed";
      //   document.getElementById("nav").style.display = "block";
      document.getElementById("nav").style.opacity = 1;
      bFixed = false;
      console.log(bFixed);
    }
  } else {
    if (document.documentElement.scrollTop > lastScrollPosition) {
      document.getElementById("nav").style.opacity = 0;
      bFixed = true;
      console.log(bFixed);
    }
  }

  lastScrollPosition = document.documentElement.scrollTop;
  console.log(document.documentElement.scrollTop);
});
