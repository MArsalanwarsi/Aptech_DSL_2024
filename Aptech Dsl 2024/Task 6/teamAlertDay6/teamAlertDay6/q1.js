//secure login program
let maximumAttempts = 3; // Maximum attempts
let Time = 5 * 60 * 1000; // 5 minutes timer in milliseconds

let failedAttempts = 0; //  failed attempts
let Timer = null; // timer store

// Function to hash the password
function hash(password) {
    // used method to hash password
    return password.split('').map(c => c.charCodeAt(0).toString(16)).join('');
}

// login Function 
function login() {
    // Check if timer is active
    if (Timer !== null) {
        document.getElementById("print").innerText = "Login blocked. Please try again later.";
        return;
    }

    // fixed values
    let getUsername = "Aptech";
    let getPassword = "617074656368313233"; // Hashed password "aptech123"

    // username and password target from html
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if username and password match with provided credentials
    if (username && password) {
        if (username === getUsername && hash(password) === getPassword) {
            document.getElementById("print").innerText = "Login successful!";
            document.getElementById("print").style.color = "green";
            location.href = "dashboard.html"
            failedAttempts = 0; // Reset failed attempts
        } else {
            failedAttempts++;
            if (failedAttempts >= maximumAttempts) {
                document.getElementById("print").innerText = "Maximum attempts reached. Please try again later.";
                document.getElementById("print").style.color = "red";
                Timer = setTimeout(reset, Time); // Start timer
            } else {
                document.getElementById("print").innerText = "Incorrect credentials. Please try again.";
                document.getElementById("print").style.color = "red";
            }
        }
    } else {
        document.getElementById("print").innerText = "Every Field Must Be Fill Out";
        document.getElementById("print").style.color = "red";
    }
}

// Function to reset failed attempts and timer
function reset() {
    failedAttempts = 0;
    Timer = null;
    document.getElementById("print").innerText = "";
}