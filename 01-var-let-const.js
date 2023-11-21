// var - var é menos utilizado por conta que so podemos utilizar como um escopo global
var idade = 22;
if(idade >= 18){
    var mensagem = "Adulto";
} else {
    var mensagem = "Menor";
}

console.log(idade);
console.log(mensagem);

// let - Maneira mais atualizada de declarar variavel por poder decidir se vamos utilizar escopo de bloco ou um escopo global
// let mensagem; ESCOPO GLOBAL
if(idade >= 18){
   // let mensagem = "Adulto"; ESCOPO DE BLOCO
} else {
   // let mensagem = "Menor"; ESCOPO DE BLOCO
}

// const - a Constante diferentemente da variavel(let) não permite ser reatribuida e é obrigatorio iniciar com um valor
const meuNome = 'Tanaka';
console.log(meuNome);

// Exemplo de erro da retribuição
// meuNome = 'Tanaka Kogici';
// console.log(meuNome);

// Exemplo de erro de iniciação
// const escola;