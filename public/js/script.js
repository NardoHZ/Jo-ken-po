var jogadorEscolha = 0;
var computadorEscolha = 0;
var vencedor = 0;

function jogar(escolha) {
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
    //pedra = 1 
    // papel = 2
    //tesoura = 3   
    if ((jogadorEscolha == 1) && (computadorEscolha == 3)) {
        vencedor = 1

    } else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
        vencedor = 2;
    } else if ((jogadorEscolha == 1) && (computadorEscolha == 1)) {
        vencedor = 0;
    } else if ((jogadorEscolha == 3) && (computadorEscolha == 3)) {
        vencedor = 0;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 2)) {
        vencedor = 0;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 3)) {
        vencedor = 2;
    } else if ((jogadorEscolha == 3) && (computadorEscolha == 2)) {
        vencedor = 1;
    } else if ((jogadorEscolha == 3) && (computadorEscolha == 1)) {
        vencedor = 2;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 1)) {
        vencedor = 2;
    }

    document.getElementById("jogador-escolha-1").classList.remove('selecionado');

    document.getElementById("jogador-escolha-2").classList.remove('selecionado');

    document.getElementById("jogador-escolha-3").classList.remove('selecionado');

    document.getElementById("computador-escolha-1").classList.remove('selecionado');

    document.getElementById("computador-escolha-2").classList.remove('selecionado');

    document.getElementById("computador-escolha-3").classList.remove('selecionado');







    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');
    if (vencedor == 0) {
        document.getElementById('mensagens').innerHTML = 'Empate';

    } if (vencedor == 1) {
        document.getElementById('mensagens').innerHTML = 'Parabéns, você ganhou!!';

    } if (vencedor == 2) {
        document.getElementById('mensagens').innerHTML = 'O computador ganhou, tente novamente...';

    }
}