window.onload = initialize;

function initialize(){
    var formSignup = document.getElementById("form-signup");
    formSignup.addEventListener("submit", validateFormSignup);
}

function validateFormSignup(event){
    var formSignup = event.target;

    var username = formSignup["username"].value;

    if(!username || username == ""){
        event.preventDefault();
        console.log("error: username required");
        document.getElementById("error-username-required").style.display = "block";
    } else {
        document.getElementById("error-username-required").style.display = "none";
    }

    var password = formSignup["password"].value;

    if(!password || password == ""){
        event.preventDefault();
        console.log("error: contraseña obligatoria");
        document.getElementById("error-password-required").style.display = "block";
    } else {
        document.getElementById("error-password-required").style.display = "none";
    }

    var passwordConfirm = formSignup["password-confirm"].value;

    if(!passwordConfirm || passwordConfirm == ""){
        event.preventDefault();
        console.log("error: confirmación de la contraseña obligatorio");
        document.getElementById("error-password-confirm-required").style.display = "block";
    } else {
        document.getElementById("error-password-confirm-required").style.display = "none";
    }

    if(passwordConfirm != "" && password != "" && password != passwordConfirm){
        event.preventDefault();
        console.log("error: las contraseñas deben coincidir");
        document.getElementById("error-password-match-required").style.display = "block";
    } else {
        document.getElementById("error-password-match-required").style.display = "none";
    }
    
}