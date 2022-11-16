let login = document.getElementById("abaMidLogin")
let cadastro = document.getElementById("abaMidCadastro")

function TrocaDiv(){
    
    if(login.style.display == "none"){
        alert("oiii")
    login.style.display = "flex"
    cadastro.style.display = "none"
    }else{
        alert("tchau")
    cadastro.style.display = "flex"
    login.style.display = "none"
    }
}