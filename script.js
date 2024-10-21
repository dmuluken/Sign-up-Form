const button = document.querySelector("button");
const input = document.querySelector("input");
let password = document.querySelector(".pwd");
let confirmPassword = document.querySelector(".conpwd");
let message = document.querySelector(".mismach")

button.addEventListener("click", (event) => {
    // input: invalid.setAttribute("style", "border-color: #ff073a")
    if (password.value !== confirmPassword.value) {
        message.setAttribute("style", "opacity: 1; color: #ff073a");
        console.log("mismach");
        password.value = "";
        confirmPassword.value = "";
    }
})
