let slideIndex;
let currentTab;

function moveSlide(n, moveTab){
    currentTab = moveTab;
    showSlides(slideIndex += n, currentTab);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n, tab){
    let i;
    slideIndex = n;
    currentTab = tab;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("displayedImage");
    let captionText = document.getElementById("caption");
    let captionText2 = document.getElementById("caption2");
    let captionText3 = document.getElementById("caption3");
    
    if(n > 12 && currentTab == 'Project1'){
        slideIndex = 1;
    }
    if(n < 1 && currentTab == 'Project1'){
        slideIndex = 12;
    }
    if(n > 24 && currentTab == 'Project2'){
        slideIndex = 13;
    }
    if(n < 13 && currentTab == 'Project2'){
        slideIndex = 24;
    }
    if(n > 48 && currentTab == 'Project3'){
        slideIndex = 25;
    }
    if(n < 25 && currentTab == 'Project3'){
        slideIndex = 48;
    }

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
    captionText3.innerHTML = dots[slideIndex-1].alt;
}