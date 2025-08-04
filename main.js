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