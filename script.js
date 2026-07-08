const container = document.querySelector(".container");
const body = document.body;
const pull = document.querySelector(".pull-switch");
const passwordInput = document.querySelector(".password-input");
const togglePassword = document.querySelector(".toggle-password");

let lampOn = false;

pull.addEventListener("click", () => {

    lampOn = !lampOn;

    container.classList.toggle("on");
    body.classList.toggle("on");

    pull.style.transform = "translateX(-50%) translateY(20px)";

    setTimeout(() => {
        pull.style.transform = "translateX(-50%) translateY(0)";
    }, 180);

});

if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        togglePassword.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
    });
}