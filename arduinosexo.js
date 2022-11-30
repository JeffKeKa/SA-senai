let qualSala = 0





function registraAcesso(){
   qualSala = Math.round(Math.random() * (4 - 1) + 1)
   if(entradaAnalogica == "09 3D AD 98" || entradaAnalogica == "99 D1 18 98"){
    document.getElementById(`sala${qualSala}`).innerHTML = 
    entradaAnalogica = ""
    }
}


setInterval(registraAcesso, 500)