let mainfnav = document.getElementById("mainfnav");
let bfnavi = document.getElementById("bfnavi");
let bfnav = document.getElementById("bfnav");
let mainfnavHandled = false;


bfnav.setAttribute("tabindex", "0");
bfnavi.setAttribute("tabindex", "0");


mainfnav.addEventListener("click", function(event){
    if(!mainfnavHandled){
        if(bfnavi.style.display == "none"){
            bfnavi.style.display = "block";
        }
        else{
            bfnavi.style.display = "none";
        }
    }
    mainfnavHandled = true;
    setTimeout(() => {
        mainfnavHandled = false
    }, 300);
});


// Add keyboard support for Enter and Space
bfnav.addEventListener("keydown", function(event) {
    if ((event.key === "Enter" || event.key === " ") && !mainfnavHandled) {
        event.preventDefault();
        if(bfnavi.style.display == "none"){
            bfnavi.style.display = "block";
        }
        else{
            bfnavi.style.display = "none";
        }
        mainfnavHandled = true;
        setTimeout(() => {
            mainfnavHandled = false
        }, 300);
    }
});


mainfnav.addEventListener("mouseenter", function() {
    if(!mainfnavHandled){
        bfnavi.style.display = "block";
    }
    mainfnavHandled = true;
    setTimeout(() => {
        mainfnavHandled = false
    }, 300);
});


mainfnav.addEventListener("mouseleave", function() {
    bfnavi.style.display = "none";
});


["click", "keydown"].forEach(element => {
    body.addEventListener(element, function(event) {
        if (mainfnav && mainfnav.contains(event.target)) {
            return;
        }
        else if (bfnavi && bfnavi.style.display === "block") {
                bfnavi.style.display = "none";
        }
    });
});







// Loading Config

window.onload = () => {
    // Optional: wait a short delay to allow final paint
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        // Fully remove after transition
        setTimeout(() => loader.remove(), 300);
        
        document.body.classList.remove("loading");
    }, 100); // tweak this delay if needed
};