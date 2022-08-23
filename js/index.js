// menu btn working js
let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header ul");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active")
});

//navigation buttons working js 
let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
function prev() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

// photo gallery working js
document.querySelectorAll(".small-image").forEach(item =>{
    item.addEventListener("click", () =>{
        let src = item.getAttribute("src");
        document.querySelector(".big-image").src = src;
    });
});

// star rating working js
const starWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars i");
stars.forEach((star, clickedIdx) => {
    star.addEventListener('click', () => {
        starWrapper.classList.add("disabled");
        stars.forEach((otherStar, otherIdx) => {
            if(otherIdx <= clickedIdx) {
                otherStar.classList.add("active");
            } 
        });
    });
});
