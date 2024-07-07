function openProject(evt, projectName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementsByClassName("captions").innerHTML = "<div class='imageCaption'><p id='caption'></p></div>";

    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
}