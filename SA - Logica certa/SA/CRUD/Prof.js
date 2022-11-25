let opção
let AddNome = []
let nomes = []
let excluirNome, AddPociçãoExcluir, ContagemExcluir=0
let pesquisa, contagemPesquisa=0
let editar, AddEditar, contagemEditar = 0



function funPesquisar(){
    contagemPesquisa = 0
    pesquisa = prompt('Qual nome deseja pesquisar?')

    for(i=0; i < nomes.length; i++){

        if(pesquisa == nomes[i]){

            alert("Está cadastrado")
            break

        }else{
            contagemPesquisa++

        }

    }
    if(contagemPesquisa == nomes.length ){
        alert("Não está cadastrado!")
    }

}
function funCadastrar(){

    AddNome = prompt("Digite seu nome")
    nomes.push(AddNome)
    alert("Nome CADASTRADO!")

}
function funExcluir(){

    ContagemExcluir=0
    excluirNome = prompt('Digite o nome que queira excluir')

    for(i=0; i < nomes.length; i++){
        

        if(excluirNome == nomes[i]){

           nomes.splice(i,1)
           alert("Nome EXCLUIDO")
        
        }
        else{
            ContagemExcluir++

        }
        
    }
    if(ContagemExcluir == nomes.length){
        alert("O nome que você digitou não existe!")
    }

}
function funEditar(){

    editar = prompt('Qual nome deseja editar?')

    for(i=0; i < nomes.length; i++){
        contagemEditar = 0
        if(editar == nomes[i]){
            AddEditar = prompt("Como quer editar o nome?")
            nomes[i] = AddEditar
            alert("Nome EDITADO!")
            break

        }else{
            
           contagemEditar++
            
        }

    }
    if(contagemEditar == nomes.length){
        alert("Este nome não está cadastrado")
    }

}
function funListar(){

    alert(nomes)

}


