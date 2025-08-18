// General Variables
const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector('footer');


// Dark Light Mode varibales

// modediv = document.getElementById("modediv");
// fixedmodediv = document.getElementById("fixedmodediv");
modebut = document.getElementById("modebut");
sun = document.getElementById("sun");
moon = document.getElementById("moon");





var nav = document.getElementById("nav");
const navLinks = document.querySelectorAll('nav a');
copyrightYear = document.getElementById('cyear');
const extLinks = document.querySelectorAll('.extlink');



// Euler Angles Calculator
const calculate_ea = document.getElementById("calculate_ea");
const ea_calculator = document.querySelector(".ea_calculator");
let display = document.getElementById("ea_display");














// Function to toggle dark mode
function modechange() {
    const currentMode = body.getAttribute('data-theme');

    if (currentMode === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');

        // modediv.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
        // modediv.style.border = "2px solid white";

        if(modebut){
            modebut.style.backgroundColor = "white";
            modebut.style.border = "3px solid hsl(0, 0.00%, 35.70%)";
            modebut.style.transition = "transform 0.5s ease";
            modebut.title = "Dark Mode Toggle";
            // modebut.style.transform = `translateX(0px)`;
        }

        if(sun){sun.style.display = "block";}
        if(moon){moon.style.display = "none";}
        if(main){ 
            main.style.backgroundColor = "white";
            // main.style.boxShadow = "0 0 4px black" 
        }
        // fixedmodediv.title = "Dark Mode Toggle";
        

        const chbox = main.querySelectorAll(".chbox");
        if(chbox){
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
        }

        const tablesInMain = main.querySelectorAll("table");
        if(tablesInMain){
            tablesInMain.forEach(table => {
                const cells = table.querySelectorAll("td, th");
                cells.forEach(cell => {
                cell.style.color = "black";
                });
            });
        }


        const loader = document.getElementById("loader");
        if(loader){
            loader.style.color = "black";
            loader.style.background = "rgba(255, 255, 255, 0.8)";
            const mloader = loader.querySelector("#mloader");
            mloader.style.background = "white";
            mloader.style.boxShadow = "0 0 8px black";
            const loadingText = loader.querySelector('#loadingText');
            loadingText.style.color = "hsla(120, 100%, 42%, 1.00)";
        }

        if(ea_calculator){
            ea_calculator.style.backgroundColor = "hsla(0, 0%, 97%, 1.00)";
        }
    } 
    
    else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');

        // modediv.style.backgroundColor = "white";
        // modediv.style.border = "2px solid hsl(200, 2%, 30%)";

        if(modebut){
            modebut.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
            modebut.style.border = "3px solid white";
            modebut.style.transition = "transform 0.5s ease";
            modebut.title = "Light Mode Toggle";
            // modebut.style.transform = `translateX(20px)`;
        }
        
        if(sun){sun.style.display = "none";}
        if(moon){moon.style.display = "block";}

        if(main){
            // main.style.boxShadow = "0 0 4px white";
            main.style.backgroundColor = "hsl(216, 5%, 18%)";
        }
        // fixedmodediv.title = "Light Mode Toggle";


        const chbox = main.querySelectorAll(".chbox");
        if(chbox){
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
        }

        const tablesInMain = main.querySelectorAll("table");
        if(tablesInMain){
            tablesInMain.forEach(table => {
                const cells = table.querySelectorAll("td, th");
                cells.forEach(cell => {
                cell.style.color = "black";
                });
            });
        }

        const loader = document.getElementById("loader");
        if(loader){
            loader.style.color = "white";
            loader.style.background= "hsla(225, 4%, 18%, 0.7)";
            const mloader = loader.querySelector("#mloader");
            mloader.style.background = "black";
            mloader.style.boxShadow = "0 0 8px white";
            const loadingText = loader.querySelector('#loadingText');
            loadingText.style.color = "hsl(122, 100%, 50%)";
        }

        if(ea_calculator){
            ea_calculator.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
        }
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

        if(modebut){
            modebut.style.backgroundColor = "white";
            modebut.style.border = "3px solid hsl(0, 0.00%, 35.70%)";
            modebut.style.transition = "transform 0.5s ease";
            modebut.title = "Dark Mode Toggle";
            // modebut.style.transform = `translateX(0px)`;
        }

        if(sun){sun.style.display = "block";}
        if(moon){moon.style.display = "none";}
        if(main){ 
            main.style.backgroundColor = "white";
            // main.style.boxShadow = "0 0 4px black" 
        }
        // fixedmodediv.title = "Dark Mode Toggle";
        

        const chbox = main.querySelectorAll(".chbox");
        if(chbox){
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
        }

        const tablesInMain = main.querySelectorAll("table");
        if(tablesInMain){
            tablesInMain.forEach(table => {
                const cells = table.querySelectorAll("td, th");
                cells.forEach(cell => {
                cell.style.color = "black";
                });
            });
        }

        const loader = document.getElementById("loader");
        if(loader){
            loader.style.color = "black";
            loader.style.background = "rgba(255, 255, 255, 0.8)";
            const mloader = loader.querySelector("#mloader");
            mloader.style.background = "white";
            mloader.style.boxShadow = "0 0 8px black";
            const loadingText = loader.querySelector('#loadingText');
            loadingText.style.color = "hsla(120, 100%, 42%, 1.00)";
        }

        if(ea_calculator){
            ea_calculator.style.backgroundColor = "hsla(0, 0%, 97%, 1.00)";
        }
    } 
    
    else {

        // modediv.style.backgroundColor = "white";
        // modediv.style.border = "2px solid hsl(200, 2%, 30%)";

        if(modebut){
            modebut.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
            modebut.style.border = "3px solid white";
            modebut.style.transition = "transform 0.5s ease";
            modebut.title = "Light Mode Toggle";
            // modebut.style.transform = `translateX(20px)`;
        }
        
        if(sun){sun.style.display = "none";}
        if(moon){moon.style.display = "block";}

        if(main){
            // main.style.boxShadow = "0 0 4px white";
            main.style.backgroundColor = "hsl(216, 5%, 18%)";
        }
        // fixedmodediv.title = "Light Mode Toggle";


        const chbox = main.querySelectorAll(".chbox");
        if(chbox){
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
        }

        const tablesInMain = main.querySelectorAll("table");
        if(tablesInMain){
            tablesInMain.forEach(table => {
                const cells = table.querySelectorAll("td, th");
                cells.forEach(cell => {
                cell.style.color = "black";
                });
            });
        }

        const loader = document.getElementById("loader");
        if(loader){
            loader.style.color = "white";
            loader.style.background= "hsla(225, 4%, 18%, 0.8)";
            const mloader = loader.querySelector("#mloader");
            mloader.style.background = "black";
            mloader.style.boxShadow = "0 0 8px white";
            const loadingText = loader.querySelector('#loadingText');
            loadingText.style.color = "hsl(122, 100%, 50%)";
        }

        if(ea_calculator){
            ea_calculator.style.backgroundColor = "hsl(0, 0.00%, 35.70%)";
        }
    }
});







if(navLinks){
    navLinks.forEach(link => {
        // Remove .html from link.href for comparison
        const linkHref = link.href.replace(/\.html$/, '');
        if (linkHref === window.location.href) {
            link.classList.add('active');
        }
    });
}


function ocnav() {
    var navbar = document.getElementById("navbar");
    var navclo = document.getElementById("navclo")
    var computedStyle = window.getComputedStyle(nav);
    window.addEventListener("resize", function() {
        if (window.innerWidth > 800) {
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

body.addEventListener("click", function(event) {
    // If the click is inside the header, do nothing
    if (header && header.contains(event.target)) {
        return;
    }
    else if (nav && nav.style.display === "block") {
            ocnav();
    }
});


if(copyrightYear){
    copyrightYear.textContent = new Date().getFullYear();
}

// ['DOMContentLoaded', 'resize'].forEach((event) => {document.addEventListener(`${event}`, () => {
//     if (document.documentElement.scrollHeight <= window.innerHeight && footer && main) {
//         document.documentElement.style.height = '100vh';
//         document.body.style.height = 'auto';
//         footer.style.position = 'absolute';
//         footer.style.bottom = '0';
//         footer.style.left = '0';
//         footer.style.width = '100%';
//     }
// })
// });


if (extLinks) {
    extLinks.forEach(extLink => {
        extLink.setAttribute('target', '_blank');
        extLink.setAttribute('rel', 'noopener noreferrer');
        extLink.insertAdjacentHTML('beforeend', `
            <sup class="fa-sup">
                <i class="fa-solid fa-arrow-up-right-from-square fa-2xs" aria-hidden="true"></i>
            </sup>`);
        extLink.addEventListener("mouseover", function() {
            const i = this.querySelector('i');
            if (i) {
                i.classList.add('fa-bounce');
                setTimeout(() => i.classList.remove('fa-bounce'), 1000);
            }
        });
        // extLink.addEventListener("mouseout", function() {
        //     this.querySelector('i').classList.remove('fa-bounce')
        // });
    });
}





if(footer){
    // Remove the fa icon if the anchor's href matches the current page
    const footerLinks = footer.querySelectorAll('.extlink');
    footerLinks.forEach(link => {
        // Normalize both URLs for comparison (remove .html and handle relative/absolute)
        const linkUrl = new URL(link.getAttribute('href'), window.location.origin);
        const currentUrl = new URL(window.location.pathname, window.location.origin);
        const linkPath = linkUrl.pathname.replace(/\.html$/, '');
        const currentPath = currentUrl.pathname.replace(/\/$/, '');
        if (linkPath === currentPath) {
            const sup = link.querySelector('.fa-sup');
            if (sup){ 
                sup.remove();
                link.classList.remove("extlink");
                if (link.hasAttribute("target")) {
                    link.removeAttribute("target");
                }
                if (link.hasAttribute("rel")) {
                    link.removeAttribute("rel");
                }
            }
        }
    });
}






// Euler Angles API


if(calculate_ea){
    document.getElementById("calculate_ea").addEventListener("click", async function (e) {
        const form = e.target.closest("form");
    
        // If form is invalid, stop here
        if (!form.checkValidity()) {
            form.reportValidity(); // shows native validation popup
            return;
        }

        e.preventDefault();

        const xi = parseFloat(document.getElementById("xi").value) || 0;
        const xj = parseFloat(document.getElementById("xj").value) || 0;
        const xk = parseFloat(document.getElementById("xk").value) || 0;

        const ri = parseFloat(document.getElementById("ri").value) || 0;
        const rj = parseFloat(document.getElementById("rj").value) || 0;
        const rk = parseFloat(document.getElementById("rk").value) || 0;

        try {
            const res = await fetch("https://python-server-euler-angles.onrender.com/process", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    a: xi,
                    b: xj,
                    c: xk,
                    d: ri,
                    e: rj,
                    f: rk
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }

            // const data = await res.json();
            if("alpha" in data){
                display.className = "success";
                document.getElementById("ea_display").innerText = 
                    `$$\\begin{align}\\alpha &= ${data.alpha}\\\\[4px]\\beta&= ${data.beta}\\\\[4px] \\gamma&= ${data.gamma}\\\\[4px] \\theta&= ${data.theta}\\end{align}$$`;
                MathJax.typeset([display]);
            }
            else if("warning" in data){
                display.className = "warning";
                document.getElementById("ea_display").innerText = 
                    `\u26A0 ${data.warning}`;
            }
            else if("error" in data){
                display.className = "error";
                document.getElementById("ea_display").innerText = 
                    `\u274C ${data.error}`;
            }
        } catch (err) {
            display.className = "error";
            console.error(err);
            document.getElementById("ea_display").innerHTML = `\u274C An unexpected error occured! If you believe this is a bug, please report it to us on our <a href="/contact.html">contact</a> page. Please mention the input vectors. We would try to correct that as soon as possible.`;
        }
    });
}