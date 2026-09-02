const petNames = ["Rey", "Bootsie", "Schuyler"];
const buttons = document.querySelectorAll(".favoritebutton");q
for (let i = 0; i < buttons.length; i++) {buttons[i].addEventListener("click", function() 
    {
savePet(petNames[i]);
});
}
function savePet(pet) {
localStorage.setItem("favoritePet", pet);
const petMessage = document.querySelector(".favoritemessage");
petMessage.textContent = "Your favorite pet is " + pet;
}
function loadPet() {
const savedPet = localStorage.getItem("favoritePet");
if (savedPet) {
const petMessage = document.querySelector(".favoritemessage");
petMessage.textContent = "Your favorite pet is " + savedPet;
}
}

loadPet();

    function checkForm(event) 
{
const nameBox = document.getElementById("name");
const emailBox = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
nameError.textContent = "";
emailError.textContent = "";
if (nameBox.value === "") {
nameError.textContent = "Please enter your name.";
event.preventDefault();
}
if (!emailBox.value.includes("@")) {
emailError.textContent = "Please enter a valid email.";
event.preventDefault();
}
}

const form = document.getElementById("contactForm");
form.addEventListener("submit", checkForm);