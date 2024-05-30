let buttons = document.querySelectorAll(".demo");

const navLinks = document.querySelectorAll(".nav-link");

console.log(navLinks);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const activeLink = document.querySelector(".nav-link.active");
        if (activeLink && activeLink != link) {
            activeLink.classList.toggle("active");
        }
        link.classList.toggle("active");



    })


})





function Learn() {
    let about = document.getElementById("about");
    about.scrollIntoView();
}

function Check() {
    let skills = document.querySelector(".skills");
    skills.scrollIntoView();
}