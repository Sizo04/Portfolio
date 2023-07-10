let buttons = document.querySelectorAll(".demo");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        window.alert('This website is not hosted at the moment')
    })
})

function Learn(){
    let about = document.getElementById("about");
    about.scrollIntoView();
}

function Check(){
    let skills = document.querySelector(".skills");
    skills.scrollIntoView();
}