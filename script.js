function generatePass(){

    const length = document.querySelector('#inputLength').value;
    const lower = document.querySelector('#checkbox1').checked;
    const upper = document.querySelector('#checkbox2').checked;
    const number = document.querySelector('#checkbox3').checked;
    const symbol = document.querySelector('#checkbox4').checked;

    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+-=[]{}";

    let allowedChars = "";
    let pass = "";



    if (lower){
        allowedChars += lowers;
    }
    if (upper){
        allowedChars += uppers;
    }
    if (number){
        allowedChars += numbers;
    }
    if (symbol){
        allowedChars += symbols;
    }


    if (allowedChars.length === 0) {
        console.log("Please select at least one character type");
        return null;
    }

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        pass += allowedChars[randomIndex];
    }

    return pass;
    

}

function openModal(){
    const password = generatePass();

    if (password){
        document.querySelector('#generatedPass').innerHTML = "<Strong>Generated Password:</Strong>" + password;
        document.querySelector('#modal').style.display = 'flex';
    }else{
        document.querySelector('#generatedPass').innerHTML = "<Strong>INVALID!!!</Strong>";
        document.querySelector('#modal').style.display = 'flex';
    }

}

function closeModal(){
    document.querySelector('#modal').style.display = 'none';
}

