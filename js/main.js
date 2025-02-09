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

let index = 0;

function changeSkillsSection() {
    backgroundImage.classList.add("black");
    setTimeout(() => {
        backgroundImage.style.setProperty('background-image', `url(${images[index]})`);
        skillsText.innerHTML = mottos[index];
        skillsTextSlide()
        setTimeout(() => {
            backgroundImage.classList.remove("black");
        }, 100);
    }, 50);
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

