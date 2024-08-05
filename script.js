// IF YOU'RE READING THIS PLEASE DON'T GO ANY FURTHER PLEASE AND IF YOU DO YOU REALLY SUCK

function checkPassword() {
    if (sessionStorage.getItem("authenticated") !== "true") {
        var password = prompt("Please enter the password to access this site:", "");
        if (password === "Teamo") {
            sessionStorage.setItem("authenticated", "true");
        } else if (password === "teamo"){
            sessionStorage.setItem("authenticated", "true");  
        } else {
            window.location = "about:blank";
        }
    }
}