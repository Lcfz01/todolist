const hex_container = document.getElementById("hex_container");
const colorLabel = document.getElementById("color");

function generateColor(){
    const hex_codes ="1234567890ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color+= hex_codes[Math.floor(Math.random() * hex_codes.length)];
    }

    hex_container.style.backgroundColor = color;
    colorLabel.innerHTML = color;

}