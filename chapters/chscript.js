let mainfnav = document.getElementById("mainfnav");
let bfnavi = document.getElementById("bfnavi");
let mainfnavHandled = false;



mainfnav.addEventListener("click", function(){
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
})


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