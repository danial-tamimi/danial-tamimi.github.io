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
const RETREATSUBMENU = document.querySelector(".retreatSubMenuXS");
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
  } else {
    RETREATSUBMENU.classList.add("h-0");
    RETREATSUBMENU.classList.remove("h-100");
    retreatMenuChevron.classList.add("bi-chevron-down");
    retreatMenuChevron.classList.remove("bi-chevron-up");
  }
});

// Therapy SubMenu XS
const THERAPYMENU = document.querySelector(".motherTherapySubMenu");
const THERAPYSUBMENU = document.querySelector(".therapySubMenuxs");
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
  } else {
    THERAPYSUBMENU.classList.add("h-0");
    THERAPYSUBMENU.classList.remove("h-100");
    therapyMenuChevron.classList.add("bi-chevron-down");
    therapyMenuChevron.classList.remove("bi-chevron-up");
  }
});

// Retreat SubMenu MD
const NAVIGATIONMOTHERMDBG = document.querySelector(".NavMDBGAfterClickSelect");
const RETREATSUB = document.querySelector(".RetreatSubMenunew"),
  RETREATMDCHEVRON = document.querySelector(".chevronSubMenumdRetreat");
const RETREATMENUMOTHER = document.querySelector(".motherSubMenumdRetreat");
RETREATMENUMOTHER.addEventListener("click", function () {
  if (THERAPYSUB.classList.contains("showSubMenuMD")) {
    THERAPYSUB.classList.add("opacity-0");
    THERAPYSUB.classList.remove("showSubMenuMD");
    THERAPYMDCHEVRON.classList.remove("bi-chevron-right");
    THERAPYMDCHEVRON.classList.add("bi-chevron-down");
    setTimeout(function () {
      THERAPYSUB.classList.add("d-none");
      THERAPYSUB.classList.remove("d-md-block");
    }, 500);
  }
  if (RETREATSUB.classList.contains("opacity-0")) {
    RETREATSUB.classList.add("d-md-block");
    NAVIGATIONMOTHERMDBG.classList.add("NavMDBGAfterClick");
    setTimeout(function () {
      RETREATMDCHEVRON.classList.add("bi-chevron-right");
      RETREATMDCHEVRON.classList.remove("bi-chevron-down");
      RETREATSUB.classList.add("showSubMenuMD");
      RETREATSUB.classList.remove("opacity-0");
    }, 15);
  } else {
    RETREATSUB.classList.add("opacity-0");
    RETREATSUB.classList.remove("showSubMenuMD");
    RETREATMDCHEVRON.classList.remove("bi-chevron-right");
    RETREATMDCHEVRON.classList.add("bi-chevron-down");
    NAVIGATIONMOTHERMDBG.classList.remove("NavMDBGAfterClick");
    setTimeout(function () {
      RETREATSUB.classList.add("d-none");
      RETREATSUB.classList.remove("d-md-block");
    }, 500);
  }
});

// Therapies SubMenu MD
const THERAPYSUB = document.querySelector(".TherapySubMenunew"),
  THERAPYMDCHEVRON = document.querySelector(".chevronSubMenumdTherapies");
const THERAPYMENUMOTHER = document.querySelector(".motherSubMenumdTherapies");
THERAPYMENUMOTHER.addEventListener("click", function () {
  if (RETREATSUB.classList.contains("showSubMenuMD")) {
    RETREATSUB.classList.add("opacity-0");
    RETREATSUB.classList.remove("showSubMenuMD");
    RETREATMDCHEVRON.classList.remove("bi-chevron-right");
    RETREATMDCHEVRON.classList.add("bi-chevron-down");
    setTimeout(function () {
      RETREATSUB.classList.add("d-none");
      RETREATSUB.classList.remove("d-md-block");
    }, 500);
  }
  if (THERAPYSUB.classList.contains("opacity-0")) {
    THERAPYSUB.classList.add("d-md-block");
    NAVIGATIONMOTHERMDBG.classList.add("NavMDBGAfterClick");
    setTimeout(function () {
      THERAPYMDCHEVRON.classList.add("bi-chevron-right");
      THERAPYMDCHEVRON.classList.remove("bi-chevron-down");
      THERAPYSUB.classList.add("showSubMenuMD");
      THERAPYSUB.classList.remove("opacity-0");
    }, 15);
  } else {
    THERAPYSUB.classList.add("opacity-0");
    THERAPYSUB.classList.remove("showSubMenuMD");
    THERAPYMDCHEVRON.classList.remove("bi-chevron-right");
    THERAPYMDCHEVRON.classList.add("bi-chevron-down");
    NAVIGATIONMOTHERMDBG.classList.remove("NavMDBGAfterClick");
    setTimeout(function () {
      THERAPYSUB.classList.add("d-none");
      THERAPYSUB.classList.remove("d-md-block");
    }, 500);
  }
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
    nextSliderNavItem = 0;
  }
  SLIDERNAVITEM[nextSliderNavItem].classList.remove("sliderNavItemHover");
});

// Scroll Effect
const OBSERVER = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showScrollEffect");
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
window.addEventListener("scroll", function () {
  if (this.document.documentElement.scrollTop > 100) {
    motherNavBg.classList.add("SpecialGreenNavColor");
    navXSBgScroll.classList.add("SpecialGreenNavColor");
  } else {
    motherNavBg.classList.remove("SpecialGreenNavColor");
    navXSBgScroll.classList.remove("SpecialGreenNavColor");
  }
});

// Counter UP
const MOTHERCOUNTERUP = document.querySelector(".motherCounterUp");
const TEXTCOUNTERUP = document.querySelectorAll(".textCounterUp");
const CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speedCounter = 200;
    TEXTCOUNTERUP.forEach((counter, index) => {
      function UpdateCounter() {
        const maxNumber = +counter.dataset.max;
        const initialNumber = +counter.innerText;
        const incPerCount = maxNumber / speedCounter;
        if (initialNumber < maxNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        } else {
          counter.innerText = maxNumber;
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = "";
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / TEXTCOUNTERUP.length + 0.5
        }s`;
      }
    });
    observer.unobserve(MOTHERCOUNTERUP);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(MOTHERCOUNTERUP);

// popUP
const popupMother = document.querySelector(".popUpMother"),
  popUpCover = document.querySelector(".popUpCover"),
  popUpClose = document.querySelector(".popUpClose"),
  popText = document.querySelector(".popText");
const popUpBall = document.getElementById("popBall");
window.addEventListener("load", function () {
  popupMother.classList.remove("popupfirstHeight");
  popupMother.classList.add("popUpHeight");
  setTimeout(function () {
    popText.classList.remove("opacity-0");
    popUpBall.classList.add("animationPopupBall");
    popUpCover.classList.add("popUpCoveranimation");
    setTimeout(function () {
      popUpBall.classList.add("d-none");
      popUpCover.classList.add("d-none");
    }, 2050);
  }, 500);
});

popUpClose.addEventListener("click", function () {
  popupMother.classList.add("popupfirstHeight");
  popupMother.classList.remove("popUpHeight");
});
