// variable declarations
var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var allChars = "";
var passwordOptions = "";

// onclick events
document.getElementById("password-btn").addEventListener("click", function () {
    getPasswordOptions();
});

document.getElementById("copy").addEventListener("click", function () {
    var pw = document.getElementById("password");
    pw.select();
    pw.setSelectionRange(0, 9999);
    document.execCommand("copy");
    alert("You're password was copied to the clipboard");

});

// Get password function - prompt legth and special character typeof, creat array from inputs, create password
function getPasswordOptions() {
    var length = parseInt(
        prompt("How many special characters do you want? \nMust enter number between 8-128"));

    if (isNaN(length)) {
        alert("Password length myst be a number");
        return;
    }

    if (length < 8) {
        alert("Password length must be more than 8");
        return;
    }

    if (length > 128) {
        alert("Password length must be less than 128");
        return;
    }

    var specialChars = confirm("Would you like to use special characters?");

    var numericChars = confirm("Would you like to use numeric characters?");

    var uppercaseChars = confirm("Would you like to UPPERCASE characters?");

    var lowercaseChars = confirm("Would you like to use lowercase characters?");

    if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
        alert("We can't help you, you are too picky!");
        return;
    }

    var passwordOptions = {
        specialChars,
        numericChars,
        uppercaseChars,
        lowercaseChars,
    }

    if (passwordOptions["specialChars"]) {
        allChars = allChars + specials;
    }
    if (passwordOptions["numericChars"]) {
        allChars = allChars + numbers;
    }
    if (passwordOptions["uppercaseChars"]) {
        allChars = allChars + uppercase;
    }
    if (passwordOptions["lowercaseChars"]) {
        allChars = allChars + lowercase;
    }

    genPassword = "";

    for (let i = 0; i < length; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        document.querySelector("#password").textContent = genPassword;
        console.log(genPassword);
    }
    return genPassword, passwordOptions;



};





