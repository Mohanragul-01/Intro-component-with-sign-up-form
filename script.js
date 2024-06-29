const inputs = document.querySelectorAll(".input-container");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener("click", (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
        const field = input.querySelector("input");

        if (field.classList.contains("email")) {
            if (!field.value.match(emailRegex)) {
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        }
        else {
            if (field.value === "") {
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        }
    })
});
