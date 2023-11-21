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