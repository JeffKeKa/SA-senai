let InpLogin = document.getElementById("InpUsuarioLogin");
let InpSenha = document.getElementById("InpSenhaLogin");

let InpCadastroLogin = document.getElementById("InpUsuarioCadastro");
let InpSenhaCadastro = document.getElementById("InpSenhaCadastro");
let InpConfiSenha = document.getElementById("InpRepetirSenha");
/*cadastrar*/


InpLogin.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("Logar").click();
  }
})

InpSenha.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("Logar").click();
    }
  })


/*------------------------------------------------*---------------*-*-*-*-*-**-*-*-*--*-*--*-*-*-**-*-*--*-**-**/
/*CADASTRO*/

InpCadastroLogin.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
      document.getElementById("cadastrar").click();
      
    }
  })

  InpSenhaCadastro.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
      document.getElementById("cadastrar").click();
      
    }
  })

  InpConfiSenha.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
      document.getElementById("cadastrar").click();
      
    }
  })