let section = document.querySelector(".about");
let nav = document.querySelector(".navbar");
let navbarbrand = document.querySelector(".pri");
let navlink = document.querySelectorAll(".nav-link");
window.onscroll = function(){
    if(window.scrollY >= section.offsetTop - 100){
        nav.style.backgroundColor = "white";
        navbarbrand.style.color = "black";
        navlink.forEach(function(n){
            n.style.color = "black";
        });
    }
    else {
        nav.style.backgroundColor = "transparent";
        navbarbrand.style.color = "white";
        if(window.innerWidth <= 768){
            navlink.forEach(function(n){
                n.style.color = "black";
            });
        }
        else {
            navlink.forEach(function(n){
                n.style.color = "white";
            });
        }
    }

}
if(window.innerWidth <= 768){
    navlink.forEach(function(n){
        n.style.color = "black";
    });
}
else {
    navlink.forEach(function(n){
        n.style.color = "white";
    });
}