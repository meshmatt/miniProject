//objects to store data
let userDetailsDatabase = {}

function getUserDetails(){
    
    //username
    let userName = prompt ("Enter your username")

    if (userName == null){
        return
    }

    function validateUserName(username){
        if(userName.length < 10 && userName.length > 0){
            return true
        }else{
            return false
        }
    }
    
    while(validateUserName(userName) == false){
        userName = prompt("Username must be less than 10 and greater than 0")
    }
    
    userDetailsDatabase["UserName"] = userName

    //email address
    let email = prompt("Enter your email address")

    if (email == null){
        return
    }

    function validateEmail(email){
        const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true){
            return true
        }else {
            return false
        }
    }
    
    while(validateEmail(email) == false){
        email = prompt("Enter a valid email")
    }

    userDetailsDatabase["Email"] = email
    
    //phone number
    let phoneNumber = prompt("Enter your phone number")

    if (phoneNumber == null){
        return
    }

    function validatePhoneNumber(phoneNumber){
        if (phoneNumber.length == 10 ){
            return true
        }else {
            return false
        }
    }
    
    while(validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phone number must be 10 digits, try again")
    }

    userDetailsDatabase["PhoneNumber"] = phoneNumber
    
    //password
    let password = prompt("Enter your password")

    if ((password) == null){
        return
    }

    function validatePassword(password){
        if (password.length < 6 ){
            return false
        }else {
            return true
        }
    }
    
    while(validatePassword(password) == false){
        password = prompt("Password must not be less than 6 digits")
    }

    userDetailsDatabase["Password"] = password
    
    //confirm password
    let confirmPassword = prompt("Confirm your password")

    if (confirmPassword == null){
        return
    }

    function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password){
            return false
        }else {
            return true
        }
    }
    
    while(validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("Confirm password does not match, try again")
    }

    userDetailsDatabase["ConfirmPassword"] = confirmPassword

}

function displayUserDetails(){
    alert("Your Details\n\nUsername: ${userDetailsDatabase.UserName}\nPhone number: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.Email}")
}