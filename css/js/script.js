// STICKY NAVIGATION

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 100) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});