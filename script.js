// Replace this with your hashed password (SHA-256 hash)
const correctHashedPassword = 'dc71e742d453ba0320f5797cf44f181b8e946cb48a59baa090c740c6f72b338b'; // Example for "password"

function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const hashedInputPassword = CryptoJS.SHA256(inputPassword).toString();
    const errorMessage = document.getElementById("error-message");

    if (hashedInputPassword === correctHashedPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
        errorMessage.style.color = "red";
    }
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}
