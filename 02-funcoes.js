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

// Exercício para relembrar como utilizar os parametros
// 1 - Criar uma função que receba valores numéricos, calcule a diferença entre eles e retorne o resultado.
function soma (numero1, numero2){
    let resultado = numero1 - numero2;
    return resultado; 
};

// 2 - Chame a função duas vezes passando valores diferentes e guardando-os em variáveis de escopo global.
let resultado1 = exercicio(10, 5);
let resultado2 = exercicio(120, 66);
let resultado3 = exercicio(10, 66)

// 3 - Mostre os valores processados pela função no terminal
console.log(resultado1);
console.log(resultado2);

// (resultado absoluto)
console.log(Math.abs(resultado3) );
