iniciandoSite();

function comprar(){
    //Recuperando informação do formulário
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    //Recuperando o valor dentro do span no HTML
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    // Variável para armazenar mensagens de erro, caso necessário
    let mensagem = ""; 

    // Verifica se o ingresso de pista está disponível
    if (tipoIngresso == "pista" && qtdPista >= quantidade) {
        qtdPista -= quantidade;
        document.getElementById("qtd-pista").textContent = qtdPista;
    } else if (tipoIngresso == "pista") {
        mensagem = "Quantidade de ingressos de pista indisponível.";
    }

    // Verifica se o ingresso superior está disponível
    if (tipoIngresso == "superior" && qtdSuperior >= quantidade) {
        qtdSuperior -= quantidade;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
    } else if (tipoIngresso == "superior") {
        mensagem = "Quantidade de ingressos superior indisponível.";
    }

    // Verifica se o ingresso inferior está disponível
    if (tipoIngresso == "inferior" && qtdInferior >= quantidade) {
        qtdInferior -= quantidade;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
    } else if (tipoIngresso == "inferior") {
        mensagem = "Quantidade de ingressos inferior indisponível.";
    }

    // Se houver uma mensagem, exibe o alert
    if (mensagem) {
        alert(mensagem);
    }
}


function iniciandoSite(){
    document.getElementById("qtd-pista").textContent = "100";
    document.getElementById("qtd-superior").textContent = "200";
    document.getElementById("qtd-inferior").textContent = "400";
}