var light = true;

function displayFunction(num){
    var x = document.getElementsByClassName("content");

    if(window.innerWidth>=900) return;

    else{
    for (i = 0; i < x.length; i++)
    {
        if (i == num)
            x[i].style.display = "block";
        else
            x[i].style.display = "none";
    }
    }
}

function showPreview(num){

    switch(num){
        case 0:
            projectDescription.innerHTML = "Project 1 Description";
            projectPicture.src = "img/project1.png";
            break;
        case 1:
            projectDescription.innerHTML = "Project 2 Description";
            projectPicture.src = "img/project2.png";
            break;
    }

    projectPreview.style.display = "inline-block";

}


function removePreview(){
    projectPreview.style.display = "none";
}

function switchColorScheme(){
    if (light == true){
        mode.style.backgroundColor = "#000000";
        mode.style.color = "#FFFFFF";
        mode.style.border = "2px solid #FFFFFF";

        box.className = "darkbox";

        var x = document.getElementsByClassName("links");
        for (i = 0; i < x.length; i++){
            x[i].style.border = "2px solid #FFFFFF";
        }

        document.body.style.backgroundColor = "#000000"
        document.body.style.color = "#FFFFFF";

        projectPreview.style.border = "2px solid #FFFFFF";

        mode.innerHTML = "Light Mode";

        light = false;
    }
    else{
        mode.style.backgroundColor = "#FFFFFF";
        mode.style.color = "#000000";
        mode.style.border = "2px solid #000000";

        box.className = "lightbox";

        var x = document.getElementsByClassName("links");
        for (i = 0; i < x.length; i++){
            x[i].style.border = "2px solid #000000";
        }

        document.body.style.backgroundColor = "#FFFFFF"
        document.body.style.color = "#000000";

        projectPreview.style.border = "2px solid #000000";

        mode.innerHTML = "Dark Mode";

        light = true;

    }

}

window.addEventListener('resize', showContent);

function showContent(){
    if(window.innerWidth>=900){
    var x = document.getElementsByClassName("content");
        for (i = 0; i < x.length; i++){
            x[i].style.display = "block";
        }
    }
    else{
        var x = document.getElementsByClassName("content");
        for (i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        x[0].style.display = "block";
    }
}
