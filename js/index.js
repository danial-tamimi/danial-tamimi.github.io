// Submenu xsm sm med
const SUBMENU = document.querySelector(".submenu");
const MENUBUTTON = document.querySelector(".menuButton");
let openMenu = document.querySelector(".openMenu");
let closeMenu = document.querySelector(".closeMenu");
MENUBUTTON.addEventListener("click", function () {
    if (closeMenu.classList.contains("d-none")) {
        SUBMENU.classList.add("submenuHeight100");
        openMenu.classList.toggle("d-none");
        closeMenu.classList.toggle("d-none");
    }

    else {
        SUBMENU.classList.remove("submenuHeight100");
        SUBMENU.classList.add("h-0");
        openMenu.classList.toggle("d-none");
        closeMenu.classList.toggle("d-none");
    }
});