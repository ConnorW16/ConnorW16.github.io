let slideIndex;

function moveSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    slideIndex = n;
    let currentTab = [document.querySelectorAll('.tablinks')];
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("displayedImage");
    let captionText = document.getElementById("caption");
    let captionText2 = document.getElementById("caption2");

    currentTab.forEach(console.log(innerHTML));

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    captionText2.innerHTML = dots[slideIndex-1].alt;
}