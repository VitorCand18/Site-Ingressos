iniciandoSite();

function comprar() {
    // Recuperando informação do formulário
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    // Verifica se o tipo de ingresso foi selecionado
    if (tipoIngresso === "") {
        alert("Por favor, selecione o tipo de ingresso.");
        return;
    }

    // Verifica se a quantidade é válida (maior que zero)
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida maior que zero.");
        return;
    }

    // Recuperando o valor dentro do span no HTML
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    // Chama a função condicao e armazena o retorno na variável mensagem
    let mensagem = condicao(tipoIngresso, quantidade, qtdPista, qtdSuperior, qtdInferior);

    // Se houver uma mensagem, exibe o alert
    if (mensagem) {
        alert(mensagem);
    }
}

function iniciandoSite() {
    //Incluindo valores de estoque
    document.getElementById("qtd-pista").textContent = "100";
    document.getElementById("qtd-superior").textContent = "200";
    document.getElementById("qtd-inferior").textContent = "400";
}

function condicao(tipoIngresso, quantidade, qtdPista, qtdSuperior, qtdInferior) {
    // Variável para armazenar mensagens de erro ou sucesso
    let mensagem = "";

    // Verifica se o ingresso de pista está disponível
    if (tipoIngresso == "pista" && qtdPista >= quantidade) {
        qtdPista -= quantidade;
        mensagem = "Compra realizada com sucesso!";
        document.getElementById("qtd-pista").textContent = qtdPista;
    } else if (tipoIngresso == "pista") {
        mensagem = "Quantidade de ingressos de pista indisponível.";
    }

    // Verifica se o ingresso superior está disponível
    if (tipoIngresso == "superior" && qtdSuperior >= quantidade) {
        qtdSuperior -= quantidade;
        mensagem = "Compra realizada com sucesso!";
        document.getElementById("qtd-superior").textContent = qtdSuperior;
    } else if (tipoIngresso == "superior") {
        mensagem = "Quantidade de ingressos superior indisponível.";
    }

    // Verifica se o ingresso inferior está disponível
    if (tipoIngresso == "inferior" && qtdInferior >= quantidade) {
        qtdInferior -= quantidade;
        mensagem = "Compra realizada com sucesso!";
        document.getElementById("qtd-inferior").textContent = qtdInferior;
    } else if (tipoIngresso == "inferior") {
        mensagem = "Quantidade de ingressos inferior indisponível.";
    }

    // Retorna a mensagem para ser usada na função 'comprar'
    return mensagem;
}
