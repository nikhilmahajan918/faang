// select DOM(Document object Model) Items
const menubtn = document.querySelector(".menu-btn"); //menubtn is var & queryselector is behave as jQuery here.
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".nav-item");

// initial state of menu i.e when on starting we open our portfolio,i do not want that menu is open by default.
let showMenu = false;

menubtn.addEventListener("click", toggleMenu); //togglemenu is a function

function toggleMenu() {
  if (!showMenu) {
    menubtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    //for Menu State
    showMenu = true;
  } else {
    menubtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    //for Menu State
    showMenu = false;
  }
}
