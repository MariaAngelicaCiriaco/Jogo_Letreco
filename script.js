
import { PALAVRAS } from "./palavras.mjs";

const NUMERO_DE_TENTATIVAS = 6;
let indexPalavra = Math.floor(Math.random() * PALAVRAS.length);
let palavra = PALAVRAS[indexPalavra];
let palavrativaAtual = 0;

const gerador_Tabuleiro = () => {
    let tabuleiro = document.getElementById('tabuleiro');
    for (let i = 0; i < NUMERO_DE_TENTATIVAS; i++) {
        let linha = document.createElement('div');
        linha.className = "tabuleiro-linha";
        for (let j = 0; j < palavra.length; j++) {
            let box = document.createElement("div");
            box.className = "letra";
            linha.appendChild(box);
        }
        tabuleiro.appendChild(linha);
    }
}

gerador_Tabuleiro();

import { PRIMEIRA_LINHA } from "./palavras.mjs";
import { SEGUNDA_LINHA } from "./palavras.mjs";
import { TERCEIRA_LINHA } from "./palavras.mjs";

const gerador_Teclado = () => {
    let teclado = document.getElementById('teclado');

    const enviar = document.createElement("button");
    enviar.className = 'botao-teclado';
    enviar.textContent = "Enviar";
    enviar.addEventListener('click', enviarPalavra);
    teclado.appendChild(enviar);

    const apagar = document.createElement("button");
    apagar.className = 'botao-teclado';
    apagar.textContent = "Apagar";
    apagar.addEventListener("click", apagarLetra);
    teclado.appendChild(apagar);

    teclado.appendChild(document.createElement('br'));

    for (let i = 0; i < PRIMEIRA_LINHA.length; i++) {
        let letra = PRIMEIRA_LINHA[i];
        let caixa = document.createElement('div');
        caixa.className = 'linha-teclado';
        caixa.textContent = letra;
        caixa.addEventListener("click", () => {
            adicionarLetras(letra);
        });
        teclado.appendChild(caixa);
    }

    teclado.appendChild(document.createElement('br'));

    for (let i = 0; i < SEGUNDA_LINHA.length; i++) {
        let letra = SEGUNDA_LINHA[i];
        let caixa = document.createElement('div');
        caixa.className = 'linha-teclado';
        caixa.textContent = letra;
        caixa.addEventListener("click", () => {
            adicionarLetras(letra);
        });
        teclado.appendChild(caixa);
    }

    teclado.appendChild(document.createElement('br'));

    for (let i = 0; i < TERCEIRA_LINHA.length; i++) {
        let letra = TERCEIRA_LINHA[i];
        let caixa = document.createElement('div');
        caixa.className = 'linha-teclado';
        caixa.textContent = letra;
        caixa.addEventListener("click", () => {
            adicionarLetras(letra);
        });
        teclado.appendChild(caixa);
    }
}
gerador_Teclado();

function adicionarLetras(letra) {
    if (palavrativaAtual < NUMERO_DE_TENTATIVAS) {
        let letrasTabuleiro = document.querySelectorAll(".tabuleiro-linha")[palavrativaAtual].getElementsByClassName("letra");
        for (let i = 0; i < letrasTabuleiro.length; i++) {
            if (letrasTabuleiro[i].textContent === "") {
                letrasTabuleiro[i].textContent = letra;
                break; 
            }
        }
    }
}

function apagarLetra() {
    if (palavrativaAtual < NUMERO_DE_TENTATIVAS) {
        let letrasTabuleiro = document.querySelectorAll(".tabuleiro-linha")[palavrativaAtual].getElementsByClassName("letra");
        for (let i = letrasTabuleiro.length - 1; i >= 0; i--) {
            if (letrasTabuleiro[i].textContent !== "") {
                letrasTabuleiro[i].textContent = "";
                break; 
            }
        }
    }
}

function enviarPalavra(){
    if (palavrativaAtual.length === palavra.length) {
        alert('Você ganhou!');
    } else {
        alert('Palavra incorreta. Tente novamente.');
    }
}



