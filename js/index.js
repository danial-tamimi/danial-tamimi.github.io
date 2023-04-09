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
const SLIDERRIGHTBTN = document.querySelector(".sliderRightBTN");
const SLIDERLEFTBTN = document.querySelector(".sliderLeftBTN");
const SLIDER = document.querySelector(".slider_containers");
let ww = document.querySelector("body").clientWidth;

function nextParagraph() {
    let firstParagraph = document.querySelector(".sliderItem");
    firstParagraph.style.marginLeft = `-${ww}px`;
    setTimeout(function () {
        let firstSliderItemText = firstParagraph.textContent;
        let newParagraph = document.createElement("span");
        newParagraph.classList.add("sliderItem", "longTransition", "text-white", "fw-bolder", "w-100", "h-100", "d-inline-block");
        newParagraph.textContent = firstSliderItemText;
        firstParagraph.remove();
        SLIDER.appendChild(newParagraph);
    }, 500);
}

// setInterval(nextParagraph, 10000);

SLIDERRIGHTBTN.addEventListener("click", nextParagraph);

SLIDERLEFTBTN.addEventListener("click", function () {
    let lastLeftParagraph = document.querySelectorAll(".sliderItem")[document.querySelectorAll(".sliderItem").length - 1];
    let lastLeftSliderItemText = lastLeftParagraph.textContent;
    let newLeftParagraph = document.createElement("span");
    newLeftParagraph.classList.add("sliderItem", "longTransition", "text-white", "fw-bolder", "w-100", "h-100", "d-inline-block");
    newLeftParagraph.textContent = lastLeftSliderItemText;
    newLeftParagraph.style.marginLeft = `-${ww}px`;
    lastLeftParagraph.remove();
    let firstLeftParagraph = document.querySelector(".sliderItem");
    SLIDER.insertBefore(newLeftParagraph, firstLeftParagraph);
    setTimeout(function () {
        newLeftParagraph.style.marginLeft = `0px`;
    }, 500);
});