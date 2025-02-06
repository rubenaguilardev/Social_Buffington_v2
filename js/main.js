const background = document.getElementById("main");

window.addEventListener("scroll", function() {

    let newSize = 120 - window.pageYOffset / 28;

    if (newSize < 100) {
        newSize = 100;
    }
    background.style.backgroundSize = newSize + "%";
});

