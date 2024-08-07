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
    let captionText4 = document.getElementById("caption4");
    let captionText5 = document.getElementById("caption5");
    let captionText6 = document.getElementById("caption6");
    let captionText7 = document.getElementById("caption7");
    
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
    if(n > 70 && currentTab == 'Project4'){
        slideIndex = 49;
    }
    if(n < 49 && currentTab == 'Project4'){
        slideIndex = 70;
    }
    if(n > 103 && currentTab == 'Project5'){
        slideIndex = 71;
    }
    if(n < 71 && currentTab == 'Project5'){
        slideIndex = 103;
    }
    if(n > 108 && currentTab == 'Project6'){
        slideIndex = 104;
    }
    if(n < 104 && currentTab == 'Project6'){
        slideIndex = 108;
    }
    if(n > 121 && currentTab == 'Project7'){
        slideIndex = 109;
    }
    if(n < 109 && currentTab == 'Project7'){
        slideIndex = 121;
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
    captionText4.innerHTML = dots[slideIndex-1].alt;
    captionText5.innerHTML = dots[slideIndex-1].alt;
    captionText6.innerHTML = dots[slideIndex-1].alt;
    captionText7.innerHTML = dots[slideIndex-1].alt;
}