const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle('open');
});
window.addEventListener("mousewheel", () => {
    if(document.querySelector(".style-switcher").classList.contains('open')) {
        document.querySelector(".style-switcher").classList.remove('open');
    }
})

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    }
)}

const dayNigth = document.querySelector('.day-night');
dayNigth.addEventListener('click', () => {
    dayNigth.querySelector("i").classList.toggle("fa-sun");
    dayNigth.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle('dark');
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNigth.querySelector('i').classList.add('fa-sun');
    } else {
        dayNigth.querySelector('i').classList.add('fa-moon');
    }
})
