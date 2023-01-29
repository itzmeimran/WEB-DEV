const digit = document.getElementsByClassName('box');
const generate = document.getElementById('button');

generate.addEventListener("click", function(){
        // characters to use in the password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  
    // variable to hold the password
    let password = '';
  
    // for loop to generate 8 characters for the password
    for (let i = 0; i < 8; i++) {
      // pick a random character from the characters string
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    // return the password
    // return console.log(password);
    for (let i=0;i<=password.length;i++) {
        digit[i].innerHTML = password[i];
    };

    
});


// function generatePassword() {

  
// console.log()