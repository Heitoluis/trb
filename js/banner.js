var lastScrollPosition;
var bFixed = false;

window.addEventListener("scroll", function (e) {
  if (bFixed === true) {
    if (document.documentElement.scrollTop < lastScrollPosition) {
      document.getElementById("nav").style.position = "fixed";
      bFixed = false;
    }
  } else {
    if (document.documentElement.scrollTop > lastScrollPosition) {
      bFixed = true;
    }
  }

  lastScrollPosition = document.documentElement.scrollTop;
});

var menu = document.getElementById("menu_icon");

menu.addEventListener("click", function (e) {
  menuLayerShow();
});

var menuselection = document.querySelectorAll(
  ".menu_desktop li, .menu__mobile__layer li"
);

menuselection.forEach(function (selection) {
  selection.addEventListener("click", function (e) {
    bmenuDisplayed = true;
    menuLayerShow();
    console.log("sup");
  });
});

var bmenuDisplayed = null;
function menuLayerShow() {
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
}
