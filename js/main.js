const background = document.getElementById("main");

window.addEventListener("scroll", function() {

    let newSize = 120 - window.pageYOffset / 28;

    if (newSize < 100) {
        newSize = 100;
    }
    background.style.backgroundSize = newSize + "%";
});


let backgroundImage = document.querySelector(".skills");
let skillsText = document.querySelector(".skillsText");
let skillsButtons = document.querySelectorAll(".skillButton");
const images = [
    "images/skills/0.png",
    "images/skills/1.png",
    "images/skills/2.png",
    "images/skills/3.png"
];
const mottos = [
    "<span>Creative Storytelling</span> crafted to captivate and inspire",
    "Capturing moments through <span>Photography</span> with artistic flair and emotional resonance",
    "<span>Event Marketing</span> campaigns that engage and amplify brand stories",
    "<span>Food and Beverage</span> presented with irresistible charm and delicious detail"
];

let index = 1;

function changeSkillsSection() {
    backgroundImage.style.setProperty('background-image', `url(${images[index]})`);
    skillsText.innerHTML = mottos[index];
    skillsTextSlide()
    index = (index + 1) % images.length;
}


function skillsTextSlide() {

    skillsText.classList.remove("skillsTextSlideIn");
    void skillsText.offsetWidth;
    skillsText.classList.add("skillsTextSlideIn");
}

function skillButton() {
    skillsButtons.forEach(function(button, buttonIndex) {
        button.addEventListener('click', function() {
            index = buttonIndex - 1;
            changeSkillsSection();
            button.classList.add("skillButtonActive")
            console.log(button, buttonIndex)
        })

    })
}




skillButton();
setInterval(changeSkillsSection, 8000);


const instagramPrev = document.getElementById("instagramPrevBtn");
const instagramNext = document.getElementById("instagramNextBtn");
const list = document.getElementById("instagramItemList");
const itemWidth = 340;
const padding = 10;

instagramPrev.addEventListener('click', function() {
    list.scrollLeft -= (itemWidth + padding); 
    buttonAnimation(instagramPrev)  
});

instagramNext.addEventListener('click', function() {
    list.scrollLeft += (itemWidth + padding);
    buttonAnimation(instagramNext)
});



/* GALLERY SECTION */

document.addEventListener('DOMContentLoaded', () => {
    
    const imgs = document.querySelectorAll('.gallery img');
    const fullPage = document.querySelector('#fullpage');
    let currentIndex = 0;

    function showImage(index) {
        fullPage.style.backgroundImage = `url('${imgs[index].src}')`;
        fullPage.style.backgroundSize = 'contain';
        fullPage.style.backgroundPosition = 'center';
        fullPage.style.backgroundRepeat = 'no-repeat';
    }

    imgs.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
            fullPage.style.display = 'block';
        });
    });

    const photosPrev = document.getElementById("photosPrevBtn");
    const photosNext = document.getElementById("photosNextBtn");

    photosPrev.addEventListener('click', function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        showImage(currentIndex);
    });

    
    photosNext.addEventListener('click', function (event){
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % imgs.length;
        showImage(currentIndex);
    });

});
