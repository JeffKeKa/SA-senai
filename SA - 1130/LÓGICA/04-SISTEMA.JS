let DivCadastrarProfessor = document.getElementById("DivCadastroProfessor")
let DivEditarProfessor = document.getElementById("DivEditaProfessor")
let DivExcluirProfessor = document.getElementById("DivExcluiProfessor")
let DivLocalizarProfessor = document.getElementById("DivLocalizarProfessor")
let DivListarProfessor = document.getElementById("DivListarProfessor")

/*CADASTRO PROFESSOR*/

let apareceDivProfessor = document.getElementById("ApareceDivCadastroProfessor")
let cadastro = document.getElementById("InpNomeProfessor")
let VarCpf = document.getElementById("CPFProfessor")
let codigo = document.getElementById("InpCodigoProfessor")
let foto = document.getElementById("FotoProfessor")

/*-------------------------------------------------------------------------------------*/

let excluir = document.getElementById("InpPesquisaProfessor")
let pesquisa = document.getElementById("InpPesquisaProfessor")
let Enter = document.getElementById("InpEditaProfessor")
let editar = document.getElementById("InpEditaProfessor")

let nomeEditar = document.getElementById("InpEditaNome")
let cpfEditar = document.getElementById("InpEditaCpf")
let codigoEditar = document.getElementById("InpEditaCodigo")
let fotoEditar = document.getElementById("InpEditaFoto")

let ExcluiInp = document.getElementById("InpPesquisaProfessor")


vetorUsers = []

function CadastrarProfessor(){
    flagNumero = 0
    flag = 0
    let professor = {

        nome: '',
        cpf: '',
        rastreio: '',
    
    }

    professor.nome = cadastro.value
    professor.rastreio = codigo.value
    professor.cpf = VarCpf.value
   
    vetorUsers = JSON.parse(localStorage.getItem('professoresSalvo'))
    
    if(professor.nome == '' ||  professor.cpf == '' ||  professor.rastreio == ''){

        alert("Insira os dados")
        
    }   
    else{
       if(professor.nome != '' &&  professor.cpf != '' &&  professor.rastreio != ''){
    
           if(vetorUsers == null){
              
               vetorUsers=[]
               vetorUsers.push(professor)
               localStorage.setItem('professoresSalvo', JSON.stringify(vetorUsers))
               alert("Cadastro realizado")
               ApagaTudoCadastro()
               
            }
                
            else{
                    
                for(i=0; i<vetorUsers.length; i++){
                
                    if(vetorUsers[i].nome == professor.nome){

                        alert("Login Já Existente")
                        flag = 1
                        InpNomeProfessor.focus()
                        ApagaNomeCadastro()

                    }
                }
                        
                        
                if(flag != 1 ){
            
                    vetorUsers.push(professor)
                    localStorage.setItem('professoresSalvo', JSON.stringify(vetorUsers))
                    alert("Cadastro realizado")
                    ApagaTudoCadastro()  
            
                }          
            }                  
        }
    }   
} 



function ExcluirProfessor(){

    vetorUsers = JSON.parse(localStorage.getItem('professoresSalvo'))
    
    let ContagemExcluir = 0
    
    for(i=0; i < vetorUsers.length; i++){
        
        if(excluir.value == vetorUsers[i].cpf){

           vetorUsers.splice(i,1)
           alert("EXCLUIDO")
           ApagaExcluir()
           ContagemExcluir = 1
           
        }        
    }

    if(ContagemExcluir == 0){

        alert("O nome digitado não existe!")

    }

    localStorage.setItem('professoresSalvo', JSON.stringify(vetorUsers))

}
        

function ListaProfessor(){

    
    vetorUsers = JSON.parse(localStorage.getItem('professoresSalvo'))
    let nome = ''
    let cpf = ''
    let codigoRastreio = ''

    if(vetorUsers == null){

        nome = 'Não existem usuários cadastrados'

    }else{

        for(i=0; i<vetorUsers.length; i++){

            if(pesquisa.value == vetorUsers[i].cpf){
                nome = nome + (vetorUsers[i].nome)
            }
            if(pesquisa.value == vetorUsers[i].cpf){
                cpf = cpf + (vetorUsers[i].cpf)
            }
            if(pesquisa.value == vetorUsers[i].cpf){
              
                codigoRastreio = codigoRastreio + (vetorUsers[i].rastreio)
            }
        }
    }

    document.getElementById('Nome').innerHTML = nome
    document.getElementById('Cpf').innerHTML = cpf
    document.getElementById('Codigo').innerHTML = codigoRastreio

}

function EnterEditar(){

    vetorUsers = JSON.parse(localStorage.getItem('professoresSalvo'))

    let ContagemEnter = 0

    for(i=0; i < vetorUsers.length; i++){
        
        if(editar.value == vetorUsers[i].cpf){
            
            ContagemEnter = 1
            nomeEditar.value = vetorUsers[i].nome
            cpfEditar.value =vetorUsers[i].cpf
            codigoEditar.value = vetorUsers[i].rastreio

        }
    }  

    if(ContagemEnter == 0){

        alert("O CPF digitado não existe!")
        ApagaCpfEditar()
        InpEditaProfessor.focus()
    }   
}

function EditarProfessor(){

    vetorUsers = JSON.parse(localStorage.getItem('professoresSalvo'))
    let ContagemEditar = 0

    for(i=0; i < vetorUsers.length; i++){

        if(editar.value == vetorUsers[i].cpf){
            ContagemEditar = 1
            vetorUsers[i].nome = nomeEditar.value
            vetorUsers[i].cpf = cpfEditar.value
            vetorUsers[i].rastreio =codigoEditar.value
            alert("Editado")
            ApagaTodosInpEdita()

        }
    }

    if(ContagemEditar == 0){

        alert("O CPF digitado não existe!")

    }
    localStorage.setItem('professoresSalvo', JSON.stringify(vetorUsers))
}

function ApareceCadastrarProfessor(){

    DivCadastrarProfessor.style.display = "flex"
    DivEditarProfessor.style.display = "none"
    DivExcluirProfessor.style.display = "none"
    DivLocalizarProfessor.style.display = "none"
    DivListarProfessor.style.display = "none"

}

function ApareceEditarProfessor(){

    DivCadastrarProfessor.style.display = "none"
    DivEditarProfessor.style.display = "flex"
    DivExcluirProfessor.style.display = "none"
    DivLocalizarProfessor.style.display = "none"
    DivListarProfessor.style.display = "none"

}

function ApareceExcluirProfessor(){
   
    DivCadastrarProfessor.style.display = "none"
    DivEditarProfessor.style.display = "none"
    DivExcluirProfessor.style.display = "flex"
    DivLocalizarProfessor.style.display = "none"
    DivListarProfessor.style.display = "none"

}
function ApareceLocalizarProfessor(){

    DivCadastrarProfessor.style.display = "none"
    DivEditarProfessor.style.display = "none"
    DivExcluirProfessor.style.display = "none"
    DivLocalizarProfessor.style.display = "grid"
    DivListarProfessor.style.display = "none"


}

function ApareceListarProfessor(){

    DivCadastrarProfessor.style.display = "none"
    DivEditarProfessor.style.display = "none"
    DivExcluirProfessor.style.display = "none"
    DivLocalizarProfessor.style.display = "none"
    DivListarProfessor.style.display = "grid"

}


function ApagaTudoCadastro(){

    cadastro.value = ''
    VarCpf.value = ''
    codigo.value = ''
    foto.value = ''

}

function ApagaNomeCadastro(){

    cadastro.value = ''

}

function ApagaCpfEditar(){


    Enter.value = ''

}

function ApagaTodosInpEdita(){

    nomeEditar.value = ''
    cpfEditar.value = ''
    codigoEditar.value = ''
    fotoEditar.value = ''
    Enter.value = ''

}

function ApagaExcluir(){

    ExcluiInp.value = ''
    document.getElementById('Lista').innerHTML = ''

}


function LogOut(){


window.location.href = '02-CADASTRO-LOGIN.html'



}

function BotãoListaProfessor(){
    let vetorLista = []
    
    vetorUsers = JSON.parse(localStorage.getItem('professoresSalvo'))
    let lista = ''
    for(i=0; i<vetorUsers.length; i++){

        vetorLista.push(vetorUsers[i].nome)

    }
    

    if(vetorUsers == null){

        lista = 'Não existem usuários cadastrados'

    }else{

        for(i=0; i<vetorLista.length; i++){
            
            lista = lista + (vetorLista[i]) +'<br>'
    
        }

    }

    document.getElementById('ListaDeUsuarios').innerHTML = lista
   

}


