let nomeCadastro = document.getElementById("inputNome")
let senhaCadastro = document.getElementById("inputSenha")

let nomeLogin = document.getElementById("loginNome")
let senhaLogin = document.getElementById("loginSenha")

let nomePerfil = document.getElementById("nomeLogado")
let senhaPerfil = document.getElementById("senhaLogado")



let vetorUsers = []
let userLogado 



function Cadastrar(){
    
    let usuario = {

        user: '',
        password: '',
        phones: []

    }

    usuario.user = nomeCadastro.value
    usuario.password = senhaCadastro.value
  
    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo')) 
    
if(usuario.user == '' &&  usuario.password == '' &&  usuario. == '' &&  usuario.user == '')

    if(vetorUsers == null){
        vetorUsers=[]
        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        alert("Cadastro realizado")
    }
    
    else{

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        alert("Cadastro realizado")

    }  

    Limpar()

}

function Logar(){

     vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))  

    for(i = 0 ; i< vetorUsers.length; i++)

    if(nomeLogin.value == vetorUsers[i].user && senhaLogin.value == vetorUsers[i].password){
       
    
        userLogado = nomeLogin.value
         localStorage.setItem('userLogado' , JSON.stringify(userLogado))
        alert("Luu")
        window.location.href = "Perfil.html"
    }

}
function carregaUser(){
      
    userLogado = JSON.parse(localStorage.getItem('userLogado')) 
    document.getElementById('Olar').innerHTML = `Olá, ${userLogado}`
    nomePerfil.value = userLogado
    
}


function Limpar(){

    nomeCadastro.value = ''
    senhaCadastro.value = ''
    
}
