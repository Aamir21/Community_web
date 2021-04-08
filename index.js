var x = document.getElementById("button1");

x.addEventListener("click", function(){
    document.getElementById("toast1").style.display="block";
});


function nav(){

    var navbar = document.getElementById("ul1");

    if(navbar.style.display === "block"){
        navbar.style.display = "none";
        document.getElementById("segment1").style.height = "90px";

    }else{
        navbar.style.display ="block";
        document.getElementById("segment1").style.height = "320px";
    }

}



//$(document).ready(function(){

        

//});


    




   







