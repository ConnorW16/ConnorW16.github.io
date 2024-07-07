function openProject(evt, projectName){
    var i, tabcontent, tablinks;
    projectName = projectName;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
    return projectName;
}

export const projectName = projectName;