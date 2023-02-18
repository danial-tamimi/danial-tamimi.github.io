$(document).ready(function () {
    // Navigation
    // Menu Submenu
    const FIRSTSUBMENU = document.querySelectorAll(".submenu1")[0];
    let menuIcon = document.querySelectorAll(".menuicon")[0];
    let closeIcon = document.querySelectorAll(".closeicon")[0];
    const PARTS = document.querySelectorAll(".container-fluid");
    $($(".openmenu")[0]).click(function () {
        // for closing search sub-menu
            if (SEARCHSUBMENU.classList.contains("h-100")) {
                $($(".searchbtntext")[0]).text("Search");
                SEARCHSUBMENU.classList.remove("h-100");
                SEARCHSUBMENU.classList.add("h-0");
                searchIconBtn.classList.remove("d-none");
                closeIconSearch.classList.add("d-none");
            }

            if (FIRSTSUBMENU.classList.contains("h-100")) {
                $($(".menu")[0]).text("Menu");
                FIRSTSUBMENU.classList.remove("h-100");
                FIRSTSUBMENU.classList.add("h-0");
                menuIcon.classList.remove("d-none");
                closeIcon.classList.add("d-none");
            }
            else {
                $($(".menu")[0]).text("Close");
                FIRSTSUBMENU.classList.remove("h-0");
                FIRSTSUBMENU.classList.add("h-100");
                closeIcon.classList.remove("d-none");
                menuIcon.classList.add("d-none");
            } 
    });

    // Search Submenu
    const SUBPEOPLE = document.querySelector(".submenu-people");
    const SUBWEB = document.querySelector(".submenu-web");
    const SEARCHINPUT = document.querySelector(".searchinput");
    const PEOPLESUBICON = document.querySelector(".peopleSubmenuIcon");
    const WEBSUBICON = document.querySelector(".webSubmenuIcon");
    const SUBBTNTEXT = document.querySelector(".submenuBtnText");

    SUBPEOPLE.addEventListener("click", function () {
        SEARCHINPUT.setAttribute("placeholder", "&#128269; Search by name,SUNet,email...");
        WEBSUBICON.classList.add("d-none");
        PEOPLESUBICON.classList.remove("d-none");
        SUBBTNTEXT.textContent = "Search People";
    });

    SUBWEB.addEventListener("click", function () {
        SEARCHINPUT.setAttribute("placeholder", "&#128269; Search Stanford Websites");
        WEBSUBICON.classList.remove("d-none");
        PEOPLESUBICON.classList.add("d-none");
        SUBBTNTEXT.textContent = "Serach web";
    });

    const SEARCHSUBMENU = document.querySelector(".submenu2");
    let searchIconBtn = document.querySelector(".searchiconbtn");
    let closeIconSearch = document.querySelector(".closeiconsearch")
    $($(".searchmenu")[0]).click(function () {
        // for closing menu sub-menu
        if (FIRSTSUBMENU.classList.contains("h-100")) {
            $($(".menu")[0]).text("Menu");
            FIRSTSUBMENU.classList.remove("h-100");
            FIRSTSUBMENU.classList.add("h-0");
            menuIcon.classList.remove("d-none");
            closeIcon.classList.add("d-none");
        }

        if (SEARCHSUBMENU.classList.contains("h-100")) {
            $($(".searchbtntext")[0]).text("Search");
            SEARCHSUBMENU.classList.remove("h-100");
            SEARCHSUBMENU.classList.add("h-0");
            searchIconBtn.classList.remove("d-none");
            closeIconSearch.classList.add("d-none");
        }
        else {
            $($(".searchbtntext")[0]).text("Close");
            SEARCHSUBMENU.classList.remove("h-0");
            SEARCHSUBMENU.classList.add("h-100");
            closeIconSearch.classList.remove("d-none");
            searchIconBtn.classList.add("d-none");
        }
    });

    // start part one

});