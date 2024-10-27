// Load the saved theme when the page is loaded
window.onload = function () {
    loadTheme();
};

// Toggle the theme based on the checkbox state
function toggleTheme() {
    const isDarkTheme = document.getElementById("themeToggle").checked;
    if (isDarkTheme) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}

// Set the theme and save the preference
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("selectedTheme", theme);

    // Update the checkbox state based on the theme
    document.getElementById("themeToggle").checked = (theme === "dark");
}

// Load the saved theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem("selectedTheme") || "light"; // Default to light theme
    setTheme(savedTheme);
}

