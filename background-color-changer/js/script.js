function changeColor(){
    const colors = ["#f54242","#f5c842","#6ff542","#3d7041","#42e6f5","#7542f5","#fa66cb","#ffffff"];
    let randomIndex = Math.floor(Math.random()*colors.length);
    
    document.body.style.backgroundColor = colors[randomIndex];

}