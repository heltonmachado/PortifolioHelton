document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-dark-mode");
    const body = document.body;
    const currentMode = localStorage.getItem("theme") || "light";

    if (currentMode === "dark") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Modo Escuro";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "Modo Escuro";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "Modo Claro";
        }
    });
});
