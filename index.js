// modediv = document.getElementById("modediv");
modebut = document.getElementById("modebut");
// fixedmodediv = document.getElementById("fixedmodediv");
sun = document.getElementById("sun");
moon = document.getElementById("moon");
const body = document.body;
const main = document.querySelector("main");
const navLinks = document.querySelectorAll('nav a');















// Function to toggle dark mode
function modechange() {
    const currentMode = body.getAttribute('data-theme');

    if (currentMode === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');

        // modediv.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
        // modediv.style.border = "2px solid white";

        modebut.style.backgroundColor = "white";
        modebut.style.border = "3px solid hsl(0, 0.00%, 35.70%)";
        modebut.style.transition = "transform 0.5s ease";
        // modebut.style.transform = `translateX(0px)`;
        sun.style.display = "block";
        moon.style.display = "none";  
        main.style.backgroundColor = "white";
        main.style.boxShadow = "0 0 4px black" 
        // fixedmodediv.title = "Dark Mode Toggle";
        modebut.title = "Dark Mode Toggle";

        const chbox = main.querySelectorAll(".chbox");
        chbox.forEach(element => 
            {element.style.border = "2px solid black";
             element.style.boxShadow = "0 0 3px black";
             element.style.color = "black";

            const img = element.querySelector("img");
            if (img) {
                img.style.border = "1px solid white";
                // img.style.backgroundColor = "white";
            }

            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = "white";
                element.style.color = "hsl(214, 100%, 50%)"
            })

            element.addEventListener("mouseout", () => {
                element.style.backgroundColor = "transparent";
                element.style.color = "black";
            });
        });

        const tablesInMain = main.querySelectorAll("table");
        tablesInMain.forEach(table => {
            const cells = table.querySelectorAll("td, th");
            cells.forEach(cell => {
            cell.style.color = "black";
            });
        });

    } 
    
    else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');

        // modediv.style.backgroundColor = "white";
        // modediv.style.border = "2px solid hsl(200, 2%, 30%)";

        modebut.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
        modebut.style.border = "3px solid white";
        modebut.style.transition = "transform 0.5s ease";
        // modebut.style.transform = `translateX(20px)`;
        sun.style.display = "none";
        moon.style.display = "block";  
        main.style.boxShadow = "0 0 4px white";
        main.style.backgroundColor = "hsl(216, 5%, 18%)";
        // fixedmodediv.title = "Light Mode Toggle";
        modebut.title = "Light Mode Toggle";


        const chbox = main.querySelectorAll(".chbox");
        chbox.forEach(element => 
            {element.style.border = "2px solid white";
             element.style.boxShadow = "0 0 3px white";
             element.style.color = "white";

            const img = element.querySelector("img");
             if (img) {
                img.style.border = "1px solid white";
                // img.style.backgroundColor = "white";
             }

            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = "black";
                element.style.color = "hsl(214, 100%, 50%)"
            })

            element.addEventListener("mouseout", () => {
                element.style.backgroundColor = "transparent";
                element.style.color = "white";
            });
        });                                           


        const tablesInMain = main.querySelectorAll("table");
        tablesInMain.forEach(table => {
            const cells = table.querySelectorAll("td, th");
            cells.forEach(cell => {
            cell.style.color = "black";
            });
        });
    }
}






// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    const currentMode = body.getAttribute('data-theme');

    if (currentMode === 'light') {

        // modediv.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
        // modediv.style.border = "2px solid white";

        modebut.style.backgroundColor = "white";
        modebut.style.border = "3px solid hsl(0, 0.00%, 35.70%)";
        modebut.style.transition = "transform 0.5s ease";
        // modebut.style.transform = `translateX(0px)`;
        sun.style.display = "block";
        moon.style.display = "none";  
        main.style.backgroundColor = "white";
        main.style.boxShadow = "0 0 4px black"
        // fixedmodediv.title = "Dark Mode Toggle";
        modebut.title = "Dark Mode Toggle";
 

        const chbox = main.querySelectorAll(".chbox");
        chbox.forEach(element => 
            {element.style.border = "2px solid black";
             element.style.boxShadow = "0 0 3px black";
             element.style.color = "black";

            const img = element.querySelector("img");
             if (img) {
                img.style.border = "1px solid white";
                // img.style.backgroundColor = "white";
             }

            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = "white";
                element.style.color = "hsl(214, 100%, 50%)"
            })

            element.addEventListener("mouseout", () => {
                element.style.backgroundColor = "transparent";
                element.style.color = "black";
            });
        });

        const tablesInMain = main.querySelectorAll("table");
        tablesInMain.forEach(table => {
            const cells = table.querySelectorAll("td, th");
            cells.forEach(cell => {
            cell.style.color = "black";
            });
        });   
    } 
    
    else {

        // modediv.style.backgroundColor = "white";
        // modediv.style.border = "2px solid hsl(200, 2%, 30%)";

        modebut.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
        modebut.style.border = "3px solid white";
        modebut.style.transition = "transform 0.5s ease";
        // modebut.style.transform = `translateX(20px)`;
        sun.style.display = "none";
        moon.style.display = "block";  
        main.style.backgroundColor = "hsl(216, 5%, 18%)";
        main.style.boxShadow = "0 0 4px white";
        // fixedmodediv.title = "Light Mode Toggle";
        modebut.title = "Light Mode Toggle";


        const chbox = main.querySelectorAll(".chbox");
        chbox.forEach(element => 
            {element.style.border = "2px solid white";
             element.style.boxShadow = "0 0 3px white";
             element.style.color = "white";

            const img = element.querySelector("img");
             if (img) {
                img.style.border = "1px solid white";
                // img.style.backgroundColor = "white";
             }

            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = "black";
                element.style.color = "hsl(214, 100%, 50%)"
            })

            element.addEventListener("mouseout", () => {
                element.style.backgroundColor = "transparent";
                element.style.color = "white";
                });
        });                                           


        const tablesInMain = main.querySelectorAll("table");
        tablesInMain.forEach(table => {
            const cells = table.querySelectorAll("td, th");
            cells.forEach(cell => {
            cell.style.color = "black";
            });
        });
    }
});







navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
        
    }
});
function ocnav() {
    var nav = document.getElementById("nav");
    var navbar = document.getElementById("navbar");
    var navclo = document.getElementById("navclo")
    var computedStyle = window.getComputedStyle(nav);
    window.addEventListener("resize", function() {
        if (window.innerWidth > 700) {
            nav.style.display = "flex";
            navbar.style.display = "none";
            navclo.style.display = "none";
        }
        else{
            nav.style.display = "none";
            navbar.style.display = "block";
            navclo.style.display = "none";
        }
    });
    // Check if the current display is "none" using computed style
    if (computedStyle.display === "none") {
        nav.style.display = "block";  // Show the nav
        navbar.style.display = "none";
        navclo.style.display = "block";
    }
    else{
        nav.style.display = "none";
        navbar.style.display = "block";
        navclo.style.display = "none";
    
    }
}
main.addEventListener("click", function(){
    if(nav.style.display == "block"){
        ocnav();
    }
})


document.getElementById('cyear').textContent = new Date().getFullYear();