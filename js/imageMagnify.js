document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slideIMG');
    const slides2 = document.querySelectorAll('.slideIMG2');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const closeBtn = document.querySelector('.close');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            overlayImage.src = slide.src;
            overlay.style.display = 'flex';
        });
    });
    slides2.forEach(slide2 => {
        slide2.addEventListener('click', () => {
            overlayImage.src = slide.src;
            overlay.style.display = 'flex';
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
});