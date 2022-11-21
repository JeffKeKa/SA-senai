let login = document.getElementById("abaMidLogin")
let cadastro = document.getElementById("abaMidCadastro")

function TrocaDiv(){
    
    if(login.style.display == "none"){
    login.style.display = "flex"
    cadastro.style.display = "none"
    }else{
    cadastro.style.display = "flex"
    login.style.display = "none"
    }
}