document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slideIMG');
    const slides2 = document.querySelectorAll('.slideIMG2');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlay2 = document.getElementById('overlay2');
    const overlayImage2 = document.getElementById('overlay-image2');
    const closeBtn = document.querySelector('.close');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            overlayImage.src = slide.src;
            overlay.style.display = 'flex';
        });
    });
    slides2.forEach(slide2 => {
        slide2.addEventListener('click', () => {
            overlayImage2.src = slide.src;
            overlay2.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target !== overlayImage) {
            overlay.style.display = 'none';
        }
    });
    overlay2.addEventListener('click', (e) => {
        if (e.target !== overlayImage2) {
            overlay2.style.display = 'none';
        }
    });
});