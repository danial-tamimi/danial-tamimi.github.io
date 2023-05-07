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

// Retreat SubMenu MD
const RETREATMENUMD = document.querySelector(".motherSubMenumdRetreat");
const RETREATSUBMENUMD = document.querySelector(".subMenumdRetreat");
let retreatMenuMDChevron = document.querySelector(".chevronSubMenumdRetreat");
RETREATMENUMD.addEventListener("click", function () {
    if (THERAPIESSUBMENUMD.classList.contains("heightMenumdRetreat")) {
        THERAPIESSUBMENUMD.classList.remove("heightMenumdRetreat");
        therapiesMenuMDChevron.classList.add("bi-chevron-down");
        therapiesMenuMDChevron.classList.remove("bi-chevron-up");
    }

    setTimeout(function () {
        if (RETREATSUBMENUMD.classList.contains("heightMenumdRetreat")) {
            RETREATSUBMENUMD.classList.remove("heightMenumdRetreat");
            retreatMenuMDChevron.classList.add("bi-chevron-down");
            retreatMenuMDChevron.classList.remove("bi-chevron-up");
        }

        else {
            RETREATSUBMENUMD.classList.add("heightMenumdRetreat");
            retreatMenuMDChevron.classList.remove("bi-chevron-down");
            retreatMenuMDChevron.classList.add("bi-chevron-up");
        }
    }, 1);

});

// Therapies SubMenu MD
const THERAPIESMENUMD = document.querySelector(".motherSubMenumdTherapies");
const THERAPIESSUBMENUMD = document.querySelector(".subMenumdTherapies");
let therapiesMenuMDChevron = document.querySelector(".chevronSubMenumdTherapies");
THERAPIESMENUMD.addEventListener("click", function () {
    if (RETREATSUBMENUMD.classList.contains("heightMenumdRetreat")) {
        RETREATSUBMENUMD.classList.remove("heightMenumdRetreat");
        retreatMenuMDChevron.classList.add("bi-chevron-down");
        retreatMenuMDChevron.classList.remove("bi-chevron-up");
    }
    setTimeout(function () {
        if (THERAPIESSUBMENUMD.classList.contains("heightMenumdRetreat")) {
            THERAPIESSUBMENUMD.classList.remove("heightMenumdRetreat");
            therapiesMenuMDChevron.classList.add("bi-chevron-down");
            therapiesMenuMDChevron.classList.remove("bi-chevron-up");
        }

        else {
            THERAPIESSUBMENUMD.classList.add("heightMenumdRetreat");
            therapiesMenuMDChevron.classList.remove("bi-chevron-down");
            therapiesMenuMDChevron.classList.add("bi-chevron-up");
        }
    }, 1);
});

// Slider
const SLIDERNEXTBTN = document.querySelector(".sliderNext");
const SLIDERPREVIOUSBTN = document.querySelector(".sliderPrevious");
const FIRSTSLIDERITEM = document.querySelector(".firstSliderItem");
let ww = document.querySelector("body").clientWidth;
let activeSliderItem = 0;
const SLIDERNAVITEM = document.querySelectorAll(".sliderNavItem");
console.log(SLIDERNAVITEM);
function nextSliderItem() {
    activeSliderItem++;
    if (activeSliderItem == 5) {
        activeSliderItem = 0;
    }
    SLIDERNAVITEM[activeSliderItem].classList.add("sliderNavItemHover");
    let previousSliderNavItem = activeSliderItem - 1;
    if (previousSliderNavItem == -1) {
        previousSliderNavItem = 4;
    }
    SLIDERNAVITEM[previousSliderNavItem].classList.remove("sliderNavItemHover");
    FIRSTSLIDERITEM.style.marginLeft = `-${ww * activeSliderItem}px`;
}

setInterval(nextSliderItem, 10000);

SLIDERNEXTBTN.addEventListener("click", nextSliderItem);

SLIDERPREVIOUSBTN.addEventListener("click", function () {
    activeSliderItem--;
    if (activeSliderItem == -1) {
        activeSliderItem = 4;
    }
    let nextSliderNavItem = activeSliderItem + 1;
    FIRSTSLIDERITEM.style.marginLeft = `-${ww * activeSliderItem}px`;
    SLIDERNAVITEM[activeSliderItem].classList.add("sliderNavItemHover");
    if (nextSliderNavItem == 5) {
        nextSliderNavItem = 0
    }
    SLIDERNAVITEM[nextSliderNavItem].classList.remove("sliderNavItemHover");
});

// Scroll Effect
const OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showScrollEffect");
        } else {
            entry.target.classList.remove("showScrollEffect")
        }
    });
});
const HIDDENELEMENTS = document.querySelectorAll(".hiddenScrollEffect");
HIDDENELEMENTS.forEach((el) => OBSERVER.observe(el));

// Navigation Effect
let motherNavBg = document.querySelector(".motherNavBg");
let subMenuBg = document.querySelector(".subMenuBg");
let startAgain = document.querySelector(".startAgain");
let menuMDNewColor = document.querySelectorAll(".menuMDNewColor");
let navXSBgScroll = document.querySelector(".navXSBgScroll");
window.addEventListener('scroll', function () {
    if (this.document.documentElement.scrollTop > 100) {
        motherNavBg.classList.add("NavBackGroundColorBlue");
        subMenuBg.classList.add("backGroundColorGray");
        startAgain.classList.remove("opacity-0");
        startAgain.classList.add("opacity-1");
        navXSBgScroll.classList.add("navXSBg");
        for (let i = 0; i <= 5; i++) {
            menuMDNewColor[i].classList.remove("text-white");
            menuMDNewColor[i].classList.add("submenuColorA");
        }
    }
    else {
        motherNavBg.classList.remove("NavBackGroundColorBlue");
        subMenuBg.classList.remove("backGroundColorGray");
        startAgain.classList.remove("opacity-1");
        startAgain.classList.add("opacity-0");
        navXSBgScroll.classList.remove("navXSBg");
        for (let i = 0; i <= 5; i++) {
            menuMDNewColor[i].classList.add("text-white");
            menuMDNewColor[i].classList.remove("submenuColorA");
        }
    }
});
// pre-loading Page
let closePreLoadingPage = document.querySelector(".closePreLoadingPage");
let closePreLoadingPageIcon = document.querySelector(".closePreLoadingPageIcon");
closePreLoadingPageIcon.addEventListener("click", function () {
    closePreLoadingPage.classList.add("d-none");
});