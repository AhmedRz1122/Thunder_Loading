let head = document.querySelector(".heading");
let dots = 0;

//Add dots every 500ms
setInterval(() => {
    dots = (dots + 1) % 4; // Cycle through 0, 1, 2, 3
    head.innerHTML = "Loading" + ".".repeat(dots);
}, 500); // Update every 500ms
dots.style.backgroundColor="white";

// setInterval(() => {
//     for(let i=0;i<3;i++)
//     {
//         head.innerHTML+=".".repeat(i);
//     }
// }, 500);