var accordion = document.getElemenyByClassName("accordion");
var i;
for (i=0; i<accordion.length; i++){
    accordion[i].addEventListenedr("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } 
            else {
                panel.style.display = "block";
            }
    });
}