const regForm = document.querySelector('.regForm');
const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');
const logForm = document.querySelector('.logForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const usernameAndPasswords = {}
const title = document.querySelector('h1');
const time = new Date().toLocaleString();


function checkIfUserExists(username, usernameAndPasswords) {
    if (usernameAndPasswords.hasOwnProperty(username)) {
        return true
    }
}

function validateUserNameAndPassword(username, password, usernameAndPasswords) {
    if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
        return true;
    }
}

regForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
        alert("Fill out all the forms first");
    }
    else if (passwordReg.value.length < 8) {
        alert("Password must be at least 8 characters long");
    }
    else if (!/[a-z]/.test(passwordReg.value) || !/[A-Z]/.test(passwordReg.value)) {
        alert("Password must contain both uppercase and lowercase letters");
    }
    else if (/^\d+$/.test(passwordReg.value)) {
        alert("Password cannot consist of only integers");
    }
    else {
        if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
            alert('Username is already taken');
        }
        
        else {
            usernameAndPasswords[usernameReg.value] = passwordReg.value;
            console.log(usernameAndPasswords);
            logForm.style.display = "block";
            regForm.style.display = "none";
        }
    }
})



logForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {

        logForm.style.display = "none";
        title.style.display = "none";
    
        var currentTime = new Date().toLocaleString();
        var greetingElement = document.querySelector('.welcomePanel #greeting');
        if (greetingElement) {
            greetingElement.textContent = "Good day! " + username.value + ". It's currently " + currentTime;
            greetingElement.style.fontSize = "3.5em"; 
            greetingElement.style.backgroundImage = "linear-gradient(to right, black, blue)";
            greetingElement.style.backgroundClip = "text";
            greetingElement.style.color = "transparent";
            greetingElement.style.margin = "80px";
        }
        
    } else {
        alert("Username and password don't exist");
    }
});




