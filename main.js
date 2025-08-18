const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorall ('parametro-enha__botao');

botoes(0).onclik = diminuiTamanho;
botoes(1).onclik = aumentaTamanho;

function diminuiTamanho(){
if (tamanhoSenha > 1){
tamanhoSenha =tamanhoSenha - 1;
}
numeroSenha.textContent = tamanhoSenhas
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
     tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
const numeroSenha = document.querySelectout
}

const campoSenha = document.querySelector('#campo-senha');
const chekbox = document.querySelectorAll('.checkbox');

for(i = 0; i < checkbox.lenght; i++)(
    checkbox[

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';


geraSenha();

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaisculas;
    }
        if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
        if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
        if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0 ; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}
