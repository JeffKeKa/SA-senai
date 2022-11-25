let login = document.getElementById("abaMidLogin")
let cadastro = document.getElementById("abaMidCadastro")


let nomeCadastro = document.getElementById("InpUsuarioCadastro")
let senhaCadastro = document.getElementById("InpSenhaCadastro")
let repetirSenha = document.getElementById("InpRepetirSenha")


let nomeLogin = document.getElementById("InpUsuarioLogin")
let senhaLogin = document.getElementById("InpSenhaLogin")

let nomePerfil = document.getElementById("nomeLogado")
let senhaPerfil = document.getElementById("senhaLogado")


let vetorUsers = []
let userLogado 

let flag = 0
let flagNumero = 0


function Cadastrar(){
    flagNumero = 0
    flag = 0
    let usuario = {

        user: '',
        password: '',
        confirmPassword: ''
      

    }

    usuario.user = nomeCadastro.value
    usuario.password = senhaCadastro.value
    usuario.confirmPassword = repetirSenha.value
  

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    
        while(usuario.password.length < 6){

            alert("Mínimo 6 caractéres")    
            LimpaSenhaCadastro()
            LimparRepetir()
            InpSenhaCadastro.focus()
            break
                     
        }

        for(i=0;i<usuario.password.length;i++){
            console.log(Number(usuario.password[i]));        

            if(!isNaN(Number(usuario.password[i]))){

                flagNumero = 1

            }
        
        }
        console.log(flagNumero)
        if(flagNumero == 0 ){

            alert("Obrigatório uso de número")
            LimpaSenhaCadastro()
            LimparRepetir()
            InpSenhaCadastro.focus()
        }
        
        
        else{

        

            if(usuario.user == '' ||  usuario.password == '' ||  usuario.confirmPassword == ''){

                alert("Insira os dados")
               
        
            }
        
           
            
           if(usuario.password != usuario.confirmPassword ){
        
                alert("Confirmação de senha incorreta")
                LimparRepetir()
                
            }
        
            
            if(usuario.user != '' &&  usuario.password != '' &&  usuario.confirmPassword != '' && usuario.password == usuario.confirmPassword){
        
                if(vetorUsers == null){
                   
                    vetorUsers=[]
                    vetorUsers.push(usuario)
                    localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
                    alert("Cadastro realizado")
                    LimparTudo()
                    TrocaDiv()
                    
                }
        
                else{
                
                    for(i=0; i<vetorUsers.length; i++){
                    
                        if(vetorUsers[i].user == usuario.user){
                           
                            alert("Login Já Existente")
                            flag = 1
                            LimparNome()  
                             
                            
                        }
                    }
                    
                    
                    if(flag != 1 ){
        
                        vetorUsers.push(usuario)
                        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
                        alert("Cadastro realizado")
                        TrocaDiv()
        
                    }
                  
                }
        
            }  
        }

    }

    
    
    

function Logar(){

    let contSenha = 0
    let contLogin = 0
    let contSenhaLogin = 0 


    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))  

   for(i = 0 ; i< vetorUsers.length; i++){

        if(nomeLogin.value == vetorUsers[i].user && senhaLogin.value == vetorUsers[i].password){
        
            alert("Login efetuado com sucesso")
            userLogado = nomeLogin.value
            localStorage.setItem('userLogado' , JSON.stringify(userLogado))
            window.location.href = "03-SISTEMA.html"

            
        }
    
        if(nomeLogin.value != vetorUsers[i].user){
        
            contLogin++
            
        }

        if(senhaLogin.value != vetorUsers[i].password){
        
            contSenha++
     
        }

        if(nomeLogin.value != vetorUsers[i].user && senhaLogin.value != vetorUsers[i].password ){

            contSenhaLogin++

        }
   }

   if(contLogin == vetorUsers.length && contSenha != vetorUsers.length ){

    alert("Login incorreto")
    LimparUsuarioPerfil()
    InpUsuarioLogin.focus()

   }

   if(contSenha == vetorUsers.length && contLogin != vetorUsers.length ){

    alert("Senha incorreta")
    LimparSenhaPerfil()
    InpSenhaLogin.focus()

   }

   if(contSenhaLogin == vetorUsers.length ){

    alert("Login e Senha Incorretos")


   }

}
  
        
function LimpaSenhaCadastro(){

    senhaCadastro.value = ''

}


function carregaUser(){
      
    userLogado = JSON.parse(localStorage.getItem('userLogado')) 
    document.getElementById('Olar').innerHTML = `Olá, ${userLogado}`
    nomePerfil.value = userLogado
    
}


function LimparTudo(){

    nomeCadastro.value = ''
    senhaCadastro.value = ''
    repetirSenha.value = ''
    
}

function LimparRepetir(){

    repetirSenha.value = ''

}

function LimparNome(){

    nomeCadastro.value = ''

}

function LimparSenhaPerfil(){

    senhaLogin.value = ''

}

function LimparUsuarioPerfil(){

    nomeLogin.value = ''

}

function TrocaDiv(){
    
    if(login.style.display == "none"){
       
    login.style.display = "flex"
    cadastro.style.display = "none"

    }else{

    cadastro.style.display = "flex"
    login.style.display = "none"

    }
}

