let input = document.getElementById("inputSenhaADM")
let img = document.getElementById("olho")
let botaoOlho

function Olho() {
    botaoOlho = input.getAttribute("type")

    if(botaoOlho == "password"){

        input.setAttribute("type", "text" )
        img.setAttribute("src", "../IMAGENS/OLHO-OFF.svg")
        
    }
    else{

        input.setAttribute("type", "password" )
        img.setAttribute("src", "../IMAGENS/OLHO-ON.svg")
    
    }
}