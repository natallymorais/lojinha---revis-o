$("#trocaTema").on("click", function(){
    var body = document.querySelector("body")
// pega o body, lista as classes e escolhe contains que verifica se contem o tema claro no body
    if (body.classList.contains("temaClaro")){
        body.classList.replace("temaClaro", "temaEscuro");
        $("#trocaTema").text("🌞");
    }else{
// pega o body, lista as classes e escolhe replace que troca o tema claro pelo escuro
        body.classList.replace("temaEscuro","temaClaro");
        $("#trocaTema").text("🌑");
    }
})
$("#secaoProdutos").hide(0)
$("#secaoProdutos").show(500)

var produtos