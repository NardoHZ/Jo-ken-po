var jogadorEscolha = 0;
var computadorEscolha = 0;
var jogadorPontuacao = 0;
var computadorPontuacao = 0;
var vencedor = 0;
var rodadas = 0;

function limpar() {
    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');
    document.getElementById("jogador-escolha-3").classList.remove('selecionado');
    document.getElementById("computador-escolha-1").classList.remove('selecionado');
    document.getElementById("computador-escolha-2").classList.remove('selecionado');
    document.getElementById("computador-escolha-3").classList.remove('selecionado');
    document.getElementById('mensagens').innerHTML = 'Resultado';
}

function invisivel(){
    document.getElementById("computador-escolha-1").style.display="none";
    document.getElementById("computador-escolha-2").style.display="none";
    document.getElementById("computador-escolha-3").style.display="none";
}

function jogar(escolha) {
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    if (rodadas == 6) {
        computadorPontuacao = 0;
        jogadorPontuacao = 0;
        rodadas = 0;
    }

    rodadas++;

    if (rodadas <= 6) {
        document.getElementById('titulo').innerHTML = "Rodada " + rodadas + "/6";
    }

    if (rodadas == 6) {
        document.getElementById('rodadaFinal').innerHTML = 'Partida finalizada. Salve sua pontuação e tente novamente...';
        document.getElementById('buttonSalvar').disabled = false;
    }else {
        document.getElementById('rodadaFinal').innerHTML = '';
        document.getElementById('buttonSalvar').disabled = true;
    }
    //pedra = 1 
    // papel = 2
    //tesoura = 3   
    if ((jogadorEscolha == 1) && (computadorEscolha == 3)) {
        vencedor = 1
        jogadorPontuacao += 3;
        computadorPontuacao -= 1;
    } else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
        vencedor = 2;
        computadorPontuacao += 3;
        jogadorPontuacao -= 1;
    } else if ((jogadorEscolha == 1) && (computadorEscolha == 1)) {
        vencedor = 0;
        computadorPontuacao += 1;
        jogadorPontuacao += 1;
    } else if ((jogadorEscolha == 3) && (computadorEscolha == 3)) {
        vencedor = 0;
        computadorPontuacao += 1;
        jogadorPontuacao += 1;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 2)) {
        vencedor = 0;
        computadorPontuacao += 1;
        jogadorPontuacao += 1;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 3)) {
        vencedor = 2;
        computadorPontuacao += 3;
        jogadorPontuacao -= 1;
    } else if ((jogadorEscolha == 3) && (computadorEscolha == 2)) {
        vencedor = 1;
        jogadorPontuacao += 3
        computadorPontuacao -= 1;
    } else if ((jogadorEscolha == 3) && (computadorEscolha == 1)) {
        vencedor = 2;
        computadorPontuacao += 3;
        jogadorPontuacao -= 1;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 1)) {
        vencedor = 1;
        jogadorPontuacao += 3;
        computadorPontuacao -= 1;
    }

    // Mostrar o resultado
    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).style.display="inline";
    if (vencedor == 0) {
        document.getElementById('log').innerHTML = 'Empate';
        document.getElementById('jogadorPontuacao').innerHTML = jogadorPontuacao;
        document.getElementById('computadorPontuacao').innerHTML = computadorPontuacao;
    } if (vencedor == 1) {
        document.getElementById('log').innerHTML = 'Parabéns, você ganhou!!';
        document.getElementById('jogadorPontuacao').innerHTML = jogadorPontuacao;
        document.getElementById('computadorPontuacao').innerHTML = computadorPontuacao;

    } if (vencedor == 2) {
        document.getElementById('log').innerHTML = 'O computador ganhou, tente novamente...';
        document.getElementById('jogadorPontuacao').innerHTML = jogadorPontuacao;
        document.getElementById('computadorPontuacao').innerHTML = computadorPontuacao;
    }

    document.getElementById("pontuacao").value = jogadorPontuacao;
}