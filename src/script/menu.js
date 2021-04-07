
let show = true;
const navWrapper = document.querySelector(".header__nav-wrapper");
const menuToggle = navWrapper.querySelector(".header__menu-toggle");
const linksNav = document.querySelectorAll(".header__link-event-click");

const addEvent = arrayLinks => {
  arrayLinks.forEach(element => element.addEventListener("click", menuResponsive));
};

const removeEvent = arrayLinks => {
  arrayLinks.forEach(element => element.removeEventListener("click", menuResponsive));
};

const menuResponsive = () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  show ? addEvent(linksNav) : removeEvent(linksNav);
  navWrapper.classList.toggle("header__nav--responsive", show);
  show = !show;
};

menuToggle.addEventListener("click", menuResponsive);
