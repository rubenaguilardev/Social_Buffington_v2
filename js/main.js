let sidebarAccess = document.querySelector(".sidebarAccess");

sidebarAccess.addEventListener('click', showSidebar);

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

    
}

let sidebarClose = document.querySelector('.sidebarClose');

sidebarClose.addEventListener('click', hideSidebar);


function hideSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';

}

/* MAIN SECTION */

const background = document.getElementById("main");

window.addEventListener("scroll", function() {

    if (window.innerWidth < 850) {
        return;
    }

    let newSize = 120 - window.pageYOffset / 28;

    if (newSize < 100) {
        newSize = 100;
    }
    background.style.backgroundSize = newSize + "%";
});



/* SKILLS SECTION */

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
let currentActiveIndex = 0;
let interval;

function changeSkillsSection() {
    backgroundImage.style.setProperty('background-image', `url(${images[index]})`);
    skillsText.innerHTML = mottos[index];
    
    skillsTextSlide()

    skillsButtons[currentActiveIndex].classList.remove("skillButtonActive");
    currentActiveIndex = index;
    skillsButtons[currentActiveIndex].classList.add("skillButtonActive");

    index = (index + 1) % images.length;
}

function resetBreathingAnimation() {
    backgroundImage.style.animation = 'none';
    void backgroundImage.offsetWidth;
    backgroundImage.style.animation = 'breath 16s infinite';
}


function skillsTextSlide() {

    skillsText.classList.remove("skillsTextSlideIn");
    void skillsText.offsetWidth;
    skillsText.classList.add("skillsTextSlideIn");
}

function skillButton() {   
    skillsButtons.forEach(function(button, buttonIndex) {
        button.addEventListener('click', function() {
            skillsButtons[currentActiveIndex].classList.remove("skillButtonActive");

            currentActiveIndex = buttonIndex;
            button.classList.add("skillButtonActive");

            index = buttonIndex;
            changeSkillsSection();
            
            clearInterval(interval);
            interval = setInterval(changeSkillsSection, 8000);
            
            resetBreathingAnimation();
        })

    })
    skillsButtons[0].classList.add("skillButtonActive");
}

interval = setInterval(changeSkillsSection, 8000);
skillButton();



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


/* INSTAGRAM SECTION */

let igAccess = document.querySelector('.igAccess');
igAccess.addEventListener('click', function() {

    let igOpen = document.querySelector(".instagramHidden");
    if (igOpen.style.display === 'flex') {
        igAccess.innerHTML = '<path d="M480-360 280-559.33h400L480-360Z"/>'
        igOpen.style.display = 'none';
    } else{
        igAccess.innerHTML = '<path d="m280-400 200-200.67L680-400H280Z"/>'
        igOpen.style.display = 'flex';
    } 
});

const instagramPrev = document.getElementById("instagramPrevBtn");
const instagramNext = document.getElementById("instagramNextBtn");
const list = document.getElementById("instagramItemList");
const itemWidth = 340;
const padding = 10;

instagramPrev.addEventListener('click', function() {
    list.scrollLeft -= (itemWidth + padding); 
});

instagramNext.addEventListener('click', function() {
    list.scrollLeft += (itemWidth + padding);
});


/* FACEBOOK SECTION */

let fbAccess = document.querySelector('.fbAccess');
fbAccess.addEventListener('click', function() {

    let fbOpen = document.querySelector(".facebookHidden");
    if (fbOpen.style.display === 'flex') {
        fbAccess.innerHTML = '<path d="M480-360 280-559.33h400L480-360Z"/>'
        fbOpen.style.display = 'none';
    } else{
        fbAccess.innerHTML = '<path d="m280-400 200-200.67L680-400H280Z"/>'
        fbOpen.style.display = 'flex';
    }
    
});


/* BLOG SECTION */

let blogAccess = document.querySelector('.blogAccess');
blogAccess.addEventListener('click', function() {

    let blogOpen = document.querySelector(".blogHidden");
    if (blogOpen.style.display === 'flex') {
        blogAccess.innerHTML = '<path d="M480-360 280-559.33h400L480-360Z"/>'
        blogOpen.style.display = 'none';
    } else{
        blogAccess.innerHTML = '<path d="m280-400 200-200.67L680-400H280Z"/>'
        blogOpen.style.display = 'flex';
    }
    
});



/* ANIMATION */

document.addEventListener("DOMContentLoaded", () => {

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inView');
        return;
      }
    
    });
  });

  const allAnimatedElements = document.querySelectorAll('.animate');
  allAnimatedElements.forEach((element) => observer.observe(element));
}); 
