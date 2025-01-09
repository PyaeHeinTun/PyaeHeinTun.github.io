var open_menu = document.getElementById("open_menu");
var close_menu = document.getElementById("close_menu");

open_menu.addEventListener("click",openMenu)
close_menu.addEventListener("click",closeMenu)

function openMenu() {
    document.getElementsByTagName("nav")[0].classList.remove("hidden")
    document.getElementById("main_content").classList.remove("col-span-5")
    document.getElementById("main_content").classList.add("col-span-2")
    document.getElementById("main_content").classList.add("overflow-hidden")
    // Change Icon to Close
    open_menu.classList.add("hidden")
    close_menu.classList.remove("hidden")
}

function closeMenu() {
    document.getElementsByTagName("nav")[0].classList.add("hidden")
    document.getElementById("main_content").classList.remove("col-span-2")
    document.getElementById("main_content").classList.add("col-span-5")
    document.getElementById("main_content").classList.remove("overflow-hidden")
    // Change Icon to Open
    close_menu.classList.add("hidden")
    open_menu.classList.remove("hidden")
}