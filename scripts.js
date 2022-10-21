let nome = document.getElementById("inptUsuario")
let senha = document.getElementById("inptSenha")
let usuario = {
    usernome:'',
    passord:'',
}

function cadastrar(){

    usuario.usernome = nome.value
    usuario.passord = senha.value

    alert(Object.values(usuario))
    
}