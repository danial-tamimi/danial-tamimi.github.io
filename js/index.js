$(document).ready(function () {
    // Navigation
    const FIRSTSUBMENU = document.querySelectorAll(".submenu1")[0];
    let menuIcon=document.querySelectorAll(".menuicon")[0];
    let closeIcon=document.querySelectorAll(".closeicon")[0];
    $($(".openmenu")[0]).click(function () {
        if(FIRSTSUBMENU.classList.contains("h-90")){
            $($(".menu")[0]).text("Menu");
            FIRSTSUBMENU.classList.remove("h-90");
            FIRSTSUBMENU.classList.add("h-0");
            menuIcon.classList.remove("d-none");
            closeIcon.classList.add("d-none");
        }
        else{
            $($(".menu")[0]).text("Close");
            FIRSTSUBMENU.classList.remove("h-0");
            FIRSTSUBMENU.classList.add("h-90");
            closeIcon.classList.remove("d-none");
            menuIcon.classList.add("d-none");
        }

    });

});