/*CADASTRO PROFESSOR*/
let DivCadastrarProfessor = document.getElementById("DivCadastroProfessor")
let DivEditarProfessor = document.getElementById("DivEditaProfessor")
let DivExcluirProfessor = document.getElementById("DivExcluiProfessor")


let cadastro = document.getElementById("InpNomeProfessor")
let VarCpf = document.getElementById("CPFProfessor")
let codigo = document.getElementById("InpCodigoProfessor")

/*-------------------------------------------------------------------------------------*/

let excluir = document.getElementById("InpPesquisaProfessor")
let pesquisa = document.getElementById("InpPesquisaProfessor")




vetorUsers = []

function CadastrarProfessor(){
    flagNumero = 0
    flag = 0
    let professor = {

        nome: '',
        cpf: '',
        rastreio: ''
       
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
               LimparTudo()
               TrocaDiv()
               
            }
                
            else{
                    
                for(i=0; i<vetorUsers.length; i++){
                
                    if(vetorUsers[i].nome == professor.nome){

                        alert("Login Já Existente")
                        flag = 1
                        LimparNome()
                        InpUsuarioCadastro.focus()
                    }
                }
                        
                        
                if(flag != 1 ){
            
                    vetorUsers.push(professor)
                    localStorage.setItem('professoresSalvo', JSON.stringify(vetorUsers))
                    alert("Cadastro realizado")
                    TrocaDiv()
                    InpUsuarioLogin.focus()
                }
                        
            }                  
        }
    }     
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
            fotoEditar.value=vetorUsers[i].foto
            
        }

    }  

    if(ContagemEnter == 0){

        alert("O CPF digitado não existe!")

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
            vetorUsers[i].foto =fotoEditar.value
            alert("Editado")
        }
    }

    if(ContagemEditar == 0){

        alert("O CPF digitado não existe!")

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

function ApareceCadastrarProfessor(){

    DivCadastrarProfessor.style.display = "flex"
    DivEditarProfessor.style.display = "none"
    DivExcluirProfessor.style.display = "none"
}

function ApareceEditarProfessor(){

    DivCadastrarProfessor.style.display = "none"
    DivEditarProfessor.style.display = "flex"
    DivExcluirProfessor.style.display = "none"
}

function ApareceExcluirProfessor(){
   
    DivCadastrarProfessor.style.display = "none"
    DivEditarProfessor.style.display = "none"
    DivExcluirProfessor.style.display = "flex"
}