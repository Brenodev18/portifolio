function login(){
    
    var logado = 0;
    var usuario = document.getElementById("user").value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById("senha").value;
    senha = senha.toLowerCase();
   

    if(usuario == "adm" && senha == "123"){
        window.location = "index.html"
        logado = 1
    }

    if(logado == 0){
        alert("Acesso Negado. Dados incorretos")
    }
}

$(document).ready(function(){
    
    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});

function cadastro(){
    alert("Cadastro com sucesso")
    window.location.href = "login.html"
}