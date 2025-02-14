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


