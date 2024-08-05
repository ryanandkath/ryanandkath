function checkPassword() {
    // Check if password is already verified during this session
    if (sessionStorage.getItem("authenticated") !== "true") {
        var password = prompt("Please enter the password to access this site:", "");
        if (password === "teamo") {  // Replace 'yourPassword' with the actual password you choose
            sessionStorage.setItem("authenticated", "true");  // Set the session as authenticated
        } else {
            window.location = "about:blank";  // Redirect to a blank page if the password is incorrect
        }
    }
}