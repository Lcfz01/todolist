const inputSlider = $("#inputSlider");
const sliderValue = $("#sliderValue");
const inputPassword = $("#passBox");
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "()!¡#$%&/()=?[]_.,-@+{}<>\"";

//checkboxes

const chk_lowercase = $("#lowercase");
const chk_uppercase = $("#uppercase");
const chk_numbers = $("#numbers");
const chk_symbols = $("#symbols");

function changeValue(){
    sliderValue.html(inputSlider.val());
    setPassword();
}

function setPassword(){
    $(".input-box span").html('<i class="fa-regular fa-copy fa-lg">');
    inputPassword.val(generatePassword());
}

function generatePassword(){
    const length = inputSlider.val();
    let characters = '';
    let password = '';

    characters += chk_lowercase.is(':checked') ? lowercaseLetters : '';
    characters += chk_uppercase.is(':checked') ? uppercaseLetters : '';
    characters += chk_numbers.is(':checked') ? numbers : '';
    characters += chk_symbols.is(':checked') ? symbols : '';

    for(let i=0; i < length;i++){
        password+=characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

function copy(){
    if(inputPassword.val().length > 0){
        navigator.clipboard.writeText(inputPassword.val());
        $(".input-box span").html('<i class="fa-solid fa-check"></i>');
    }
    alert("Copied!");
}