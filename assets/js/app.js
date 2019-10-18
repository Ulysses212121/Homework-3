
var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';

var allChars = "";

var passwordOptions = "";

document.getElementById("password-btn").addEventListener("click", function() {
    getPasswordOptions();
});




function getPasswordOptions() {
    var length = parseInt(
        prompt("How many special characters do you want?"));

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
    
    password = "";

    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        document.querySelector("#password").textContent = password;
    }
    return password, passwordOptions;

    
    
};



// console.log(passwordOptions);


    
    // console.log(allChars);




