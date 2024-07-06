let slideIndex = 1

if (projectName == 'Project1'){
    slideIndex = 1;
} else if (projectName == 'Project2'){
    slideIndex = 13;
}

showSlides(slideIndex);

function moveSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("displayedImage");
    let captionText = document.getElementById("caption");
    if (n > 12 && projectName == 'Project1') {slideIndex = 1}
    if (n > 24 && projectName == 'Project2') {slideIndex = 13}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}