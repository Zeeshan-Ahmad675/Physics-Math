modediv = document.getElementById("modediv");
modebut = document.getElementById("modebut");
fixedmodediv = document.getElementById("fixedmodediv");
// body = document.querySelector("body");
// main = document.querySelector("main");


// function modechange(){

//     const currentBodyColor = getComputedStyle(body).backgroundColor;
//     const currentMainColor = getComputedStyle(body).backgroundColor;

//     if (currentBodyColor === "rgb(255, 255, 255)" && currentMainColor === "rgb(255, 255, 255)") {
//         body.style.backgroundColor = "black";
//         main.style.backgroundColor = "black";
//         body.style.color = "white";
//         main.style.color = "white";

//         const divsInMain = main.querySelectorAll("div");
//         divsInMain.forEach(div => {
//             div.style.color = "white";
//             // div.addEventListener("mouseover", () => {
//             //     div.style.backgroundColor = "black";
//             // });
//             // div.addEventListener("mouseout", () => {
//             //     div.style.backgroundColor = "";
//             // });
//             // div.style.border = "1px solid white";
//         });                                              

//         // const imgsInMain = main.querySelectorAll("img");
//         // imgsInMain.forEach(img => {
//         //     img.style.color = "white";
//         //     img.style.border = "1px solid white";
//         // });

//         modediv.style.backgroundColor = "white";
//         modediv.style.border = "2px solid black";
//         modebut.style.backgroundColor = "black";
//         modebut.style.border = "3px solid white";
//         modebut.style.transition = "transform 0.5s ease";
//         modebut.style.transform = `translateX(20px)`;
        

//         const tablesInMain = main.querySelectorAll("table");
//         tablesInMain.forEach(table => {
//             const cells = table.querySelectorAll("td, th");
//             cells.forEach(cell => {
//             cell.style.color = "black";
//             });
//         });

//     }

//     else{
//         body.style.backgroundColor = "white";
//         main.style.backgroundColor = "white";
//         body.style.color = "black";
//         main.style.color = "black";

//         const divsInMain = main.querySelectorAll("div");
//         divsInMain.forEach(div => {
//             div.style.color = "black";
//             // div.addEventListener("mouseover", () => {
//             //     div.style.backgroundColor = "";
//             // div.style.color = "hsl(214, 100%, 50%)"
//             // });
//             // div.addEventListener("mouseout", () => {
//             //     div.style.backgroundColor = "";
//             // });
//             // div.style.border = "";
//         });

//         // const imgsInMain = main.querySelectorAll("img");
//         // imgsInMain.forEach(img => {
//         //     img.style.color = "black";
//         //     img.style.border = "0px";
//         // });


//         modediv.style.backgroundColor = "black";
//         modediv.style.border = "2px solid white";
//         modebut.style.backgroundColor = "white";
//         modebut.style.border = "3px solid black";
//         modebut.style.transition = "transform 0.5s ease";
//         modebut.style.transform = `translateX(0px)`;
//     }
// }















// Function to toggle dark mode
function modechange() {
    const body = document.body;
    const main = document.querySelector("main");
    const currentMode = body.getAttribute('data-theme');

    if (currentMode === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        modediv.style.backgroundColor = "black";
        modediv.style.border = "2px solid white";
        modebut.style.backgroundColor = "white";
        modebut.style.border = "3px solid black";
        modebut.style.transition = "transform 0.5s ease";
        modebut.style.transform = `translateX(0px)`;   
        main.style.boxShadow = "0 0 4px black" 
        fixedmodediv.title = "Dark Mode Toggle";

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
        modediv.style.backgroundColor = "white";
        modediv.style.border = "2px solid black";
        modebut.style.backgroundColor = "black";
        modebut.style.border = "3px solid white";
        modebut.style.transition = "transform 0.5s ease";
        modebut.style.transform = `translateX(20px)`;
        main.style.boxShadow = "0 0 4px white";
        fixedmodediv.title = "Light Mode Toggle";


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
    const body = document.body;
    const main = document.querySelector("main");
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    const currentMode = body.getAttribute('data-theme');

    if (currentMode === 'light') {
        modediv.style.backgroundColor = "black";
        modediv.style.border = "2px solid white";
        modebut.style.backgroundColor = "white";
        modebut.style.border = "3px solid black";
        modebut.style.transition = "transform 0.5s ease";
        modebut.style.transform = `translateX(0px)`; 
        main.style.boxShadow = "0 0 4px black"
        fixedmodediv.title = "Dark Mode Toggle";
 

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
        modediv.style.backgroundColor = "white";
        modediv.style.border = "2px solid black";
        modebut.style.backgroundColor = "black";
        modebut.style.border = "3px solid white";
        modebut.style.transition = "transform 0.5s ease";
        modebut.style.transform = `translateX(20px)`;
        main.style.boxShadow = "0 0 4px white";
        fixedmodediv.title = "Light Mode Toggle";


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
