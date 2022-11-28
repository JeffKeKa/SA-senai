/*CADASTRO PROFESSOR*/

let apareceDivProfessor = document.getElementById("ApareceDivCadastroProfessor")
let cadastro = document.getElementById("InpNomeProfessor")
let VarCpf = document.getElementById("CPFProfessor")
let codigo = document.getElementById("InpCodigoProfessor")

/*-------------------------------------------------------------------------------------*/

let excluir = document.getElementById("InpPesquisaProfessor")



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



function ExcluirProfessor(){

    vetorUsers = JSON.parse(localStorage.getItem('professoresSalvo'))
    
    let ContagemExcluir = 0
    
    for(i=0; i < vetorUsers.length; i++){
        

        if(excluir.value == vetorUsers[i].cpf){

           vetorUsers.splice(i,1)
           alert("EXCLUIDO")
           ContagemExcluir = 1
           
        }
        
        
    }
    if(ContagemExcluir == 0){

        alert("O nome que você digitou não existe!")

    }

    localStorage.setItem('professoresSalvo', JSON.stringify(vetorUsers))

}
        

function ListaProfessor(){

    let lista = ''
    vetorUsers = JSON.parse(localStorage.getItem('professoresSalvo'))

    if(vetorUsers == null){

        lista = 'Não existem usuários cadastrados'

    }else{

        for(i=0; i<vetorUsers.length; i++){

            lista = lista + Object.values(vetorUsers.professor[i])

        }

    }

    document.getElementById('Lista').innerHTML = lista


}
























