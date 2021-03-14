var lastScrollPosition;
var bFixed = false;

var menu = document.getElementById("menu_icon");

window.addEventListener("scroll", function (e) {
  if (bFixed === true) {
    if (document.documentElement.scrollTop < lastScrollPosition) {
      document.getElementById("nav").style.position = "fixed";
      document.getElementById("nav").style.opacity = 1;
      bFixed = false;
    }
  } else {
    if (
      document.documentElement.scrollTop > lastScrollPosition &&
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("nav").style.opacity = 0;
      bFixed = true;
    }
  }

  lastScrollPosition = document.documentElement.scrollTop;
  console.log(document.documentElement.scrollTop);
});

var bmenuDisplayed = null;

menu.addEventListener("click", function (e) {
  if (document.getElementById("nav").style.opacity == 0) return;

  if (bmenuDisplayed === false) {
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("menu__mobile__layer").style.visibility = "hidden";
    document.getElementById("menu__mobile__layer").style.opacity = 0;

    document.getElementById("icon_menu").style.display = "block";
    document.getElementById("icon_x").style.display = "none";
  } else {
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("menu__mobile__layer").style.visibility = "visible";
    document.getElementById("menu__mobile__layer").style.opacity = 1;

    document.getElementById("menu__mobile__layer").style.position = "fixed";

    document.getElementById("icon_menu").style.display = "none";
    document.getElementById("icon_x").style.display = "block";
  }

  bmenuDisplayed = !bmenuDisplayed;
});
