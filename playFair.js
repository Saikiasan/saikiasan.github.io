// create a function to check the password
function checkPassword() {
    // get the password
    var password = document.getElementById("password").value;
    // check the password
    if (password == "password") {
        // if the password is correct, show the message
        document.getElementById("message").innerHTML = "Correct password";
    } else {
        // if the password is incorrect, show the message
        document.getElementById("message").innerHTML = "Incorrect password";
    }
}
