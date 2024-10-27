function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function registerUser() {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Example of localStorage usage to store registered user
    if (name && email && password) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Registration successful! Please log in.");
        showLogin();
        return false; // Prevent form submission
    }
    alert("Please fill in all fields");
    return false;
}

function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Checking credentials stored in localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        // alert("Login successful! Welcome.");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid email or password, Please Use Correct Credentials.");
    }
    return false; // Prevent form submission
}

