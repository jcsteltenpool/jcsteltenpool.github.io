let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("js-dark-mode-toggle");
const toggleText = document.getElementById("js-toggle-text");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    darkModeToggle.classList.add("darkmode");
    window.setTimeout(function () {
        toggleText.innerHTML = "Lichte modus";
	}, 250);
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    darkModeToggle.classList.remove("darkmode");
    window.setTimeout(function () {
        toggleText.innerHTML = "Donkere modus";
	}, 250);    localStorage.setItem("darkMode", "null");
};

if (darkMode === "enabled") {
    enableDarkMode();
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        console.log(darkMode);
        enableDarkMode();
    } else {
        console.log(darkMode);
        disableDarkMode();
    }
});