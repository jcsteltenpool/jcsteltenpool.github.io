const button = document.getElementById('slide');
const container = document.querySelector(".projects-container");

// button.onclick = () => {
//   document.querySelector(".projects-container").scrollLeft += 600;
// };

button.addEventListener("click", () => {
    container.scrollLeft += 450;
})