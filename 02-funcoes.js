// Formas tradicionais

// 1 - Sintaxe anônima associada à variável/constante (forma mais antiga e vista normalmente com 'var') ela possui um problema por ser obrigatorio declarar a função inicialmente
const exemplo1 = function(){
    console.log("Função anônima");
};
// Chamada da função exemplo1
exemplo1();

// 2 - Sintaxe declarada/nomeada diferentemente da anônima ela não é obrigada declarar inicialmente a função acabando sendo mais vantajosa pela ordem não importar
exemplo2();

function exemplo2(){
    console.log("Função nomeada");
};

/* Exercícios
1) Crie uma função (qualquer sintaxe) que receba dois valores numéricos, calcule a diferença entre
eles e retorne o resultado.*/
// function exercicio(valor1, valor2){
    /* Versão 1: variável de escopo LOCAL */
    // let resultado = valor1 - valor2;
    // return resultado;

    /* Versão 2 */
   // return valor1 - valor2;
// }

// const exercicio = (valor1, valor2) => {
//     return Math.abs(valor1 - valor2);
// };

// Arrow function simplificada (sem chaves, return explícito)
const exercicio = (valor1, valor2) => Math.abs(valor1 - valor2);

/*2) Chame esta função duas vezes passando valores
diferentes e guardando os resultados em variáveis de escopo global.*/
let resultado1 = exercicio(10, 5);
let resultado2 = exercicio(120, 66);
let resultado3 = exercicio(66, 120);

/*3) Mostre os valores processados pela função no terminal. */
console.log(resultado1);
console.log(resultado2);

// Garantindo que o resultado seja absoluto (positivo)
console.log( Math.abs(resultado3) );

/* Sintaxe Arrow Function */
const exemplo3 = () => {
    console.log("Arrow Function!");
};

exemplo3();

// const saudacao = (cliente) => {
//     console.log("Olá " + cliente);
// };

// Omitir os parênteses do parâmetro (SOMENTE QUANDO FOR 1)
// const saudacao = cliente => {
//     console.log("Olá " + cliente);
// }

// Omitir as { } (SOMENTE QUANDO FOR UMA ÚNICA INSTRUÇÃO)
const saudacao = cliente => console.log("Olá "+cliente);

saudacao("Fulano");
saudacao("Beltrano");

// Arrow Function padrão com retorno EXPLÍCITO
const calculaMetadeOriginal = (valor) => {
    return valor / 2;
}

// Arrow Function com retorno IMPLÍCITO
const calculaMetade = valor => valor / 2;

let resultadoA = calculaMetade(100);
let resultadoB = calculaMetade(666);

console.log(resultadoA);
console.log(resultadoB);

console.log("------------------");

/* Exercícios

1) Monte uma Arrow Function que receba um nome de uma pessoa
e converta este nome para letras maiúsculas. */
const converteMaiusculas = nome => nome.toUpperCase();

/* 2) Chame a função 3x (passando nomes diferentes) e exibindo
no console os resultados. */
console.log( converteMaiusculas("Chapolin") );
console.log( converteMaiusculas("chaves") );
console.log( converteMaiusculas("KikO") );