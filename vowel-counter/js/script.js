function countVowels(){
    const text = document.getElementById("textArea").value.toLowerCase();
    const vowelCount = document.getElementById("result");
    let vowelCont = 0;
    for(let i = 0;i < text.length; i++){
        if (isVowel(text.charAt(i))){
            vowelCont++;
        }
    }
    vowelCount.innerHTML = `Total Vowels: ${vowelCont}`;
}

function isVowel(char){
    var vowels = ["a","e","i","o","u"];
    return vowels.includes(char);

}