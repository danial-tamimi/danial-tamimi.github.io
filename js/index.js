// Submenu xsm sm med
const SUBMENU = document.querySelector(".submenu");
let closeMenu = document.querySelector(".closeMenu");
const MENUBUTTON = document.querySelector(".menuButton");
// Open Sub Menu
MENUBUTTON.addEventListener("click", function () {
    SUBMENU.classList.remove("closeSubMenu");
    SUBMENU.classList.add("openSubMenu");
});

// Close Sub Menu
closeMenu.addEventListener("click", function () {
    SUBMENU.classList.remove("openSubMenu");
    SUBMENU.classList.add("closeSubMenu");
});
// Retreat SubMenu XS
const RETREATMENU = document.querySelector(".motherRetreatSubMenu");
const RETREATSUBMENU = document.querySelector(".retreatSubMenu");
let retreatMenuChevron = document.querySelector(".retreatMenuChevron");
RETREATMENU.addEventListener("click", function () {
    if (THERAPYSUBMENU.classList.contains("h-100")) {
        THERAPYSUBMENU.classList.add("h-0");
        therapyMenuChevron.classList.add("bi-chevron-down");
        therapyMenuChevron.classList.remove("bi-chevron-up");
    }
    if (RETREATSUBMENU.classList.contains("h-0")) {
        RETREATSUBMENU.classList.remove("h-0");
        RETREATSUBMENU.classList.add("h-100");
        retreatMenuChevron.classList.remove("bi-chevron-down");
        retreatMenuChevron.classList.add("bi-chevron-up");
    }

    else {
        RETREATSUBMENU.classList.add("h-0");
        RETREATSUBMENU.classList.remove("h-100");
        retreatMenuChevron.classList.add("bi-chevron-down");
        retreatMenuChevron.classList.remove("bi-chevron-up");
    }
});

// Therapy SubMenu XS
const THERAPYMENU = document.querySelector(".motherTherapySubMenu");
const THERAPYSUBMENU = document.querySelector(".therapySubMenu");
let therapyMenuChevron = document.querySelector(".therapyMenuChevron");
THERAPYMENU.addEventListener("click", function () {
    if (RETREATSUBMENU.classList.contains("h-100")) {
        RETREATSUBMENU.classList.add("h-0");
        retreatMenuChevron.classList.add("bi-chevron-down");
        retreatMenuChevron.classList.remove("bi-chevron-up");
    }
    if (THERAPYSUBMENU.classList.contains("h-0")) {
        THERAPYSUBMENU.classList.remove("h-0");
        THERAPYSUBMENU.classList.add("h-100");
        therapyMenuChevron.classList.remove("bi-chevron-down");
        therapyMenuChevron.classList.add("bi-chevron-up");
    }

    else {
        THERAPYSUBMENU.classList.add("h-0");
        THERAPYSUBMENU.classList.remove("h-100");
        therapyMenuChevron.classList.add("bi-chevron-down");
        therapyMenuChevron.classList.remove("bi-chevron-up");
    }
});