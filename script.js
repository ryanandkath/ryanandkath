// Replace this with your hashed password (SHA-256 hash)
const correctHashedPassword = 'dc71e742d453ba0320f5797cf44f181b8e946cb48a59baa090c740c6f72b338b'; // Example for "password"

function checkPassword() {
    const inputPassword = document.getElementById("password").value.trim();  // Use trim to remove any extra spaces
    const hashedInputPassword = CryptoJS.SHA256(inputPassword).toString();
    
    // Debugging statements
    console.log(`Input Password: ${inputPassword}`);
    console.log(`Hashed Input Password: ${hashedInputPassword}`);
    console.log(`Correct Hashed Password: ${correctHashedPassword}`);

    const errorMessage = document.getElementById("error-message");

    if (hashedInputPassword === correctHashedPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
        errorMessage.style.color = "red";
    }
}
