const btnTexto = document.querySelector("#btm"); // Captura o botão no DOM pelo id
const titulo = document.querySelector("#titulo")
let imagem = document.querySelector("#image")
const mudar = document.querySelector("#principal");

btnTexto.addEventListener("click", function () { // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
  if(titulo.innerText == "Guerreiro Feliz"){
    titulo.innerText = "Guerreiro Calmo";
    image.src="./media/calmo.png";
  }else if(titulo.innerText =="Guerreiro Calmo"){
      imagem.src="./media/fumando.png";
      titulo.innerText = "Guerreiro Relaxando"
  }else if(titulo.innerText =="Guerreiro Relaxando"){
      imagem.src="./media/Assassino.png";
      titulo.innerText = "Guerreiro Modo Assassino"
  }else if(titulo.innerText =="Guerreiro Modo Assassino"){
      imagem.src="./media/SuperNervoso.png";
      titulo.innerText = "Guerreiro Modo Assassino Nervoso"
  }else if(titulo.innerText == "Guerreiro Modo Assassino Nervoso"){
      image.src="./media/todoPoderoso.png";
      titulo.innerText="Guerreiro Todo Poderoso";
  }else{
    image.src="./media/Feliz.png";
    titulo.innerText ="Guerreiro Feliz";
  }
});

mudar.addEventListener("mouseover", function(){
  this.style.color="yellow";

});

mudar.addEventListener("mouseout", function(){
  this.style.color="black";

});