import cursos from "./modulos/cursos.js";

// Método Reduce(reduzir) - Ele em resumo passa por elementos de um array igualmente aos outros metodos (usando uma função callback com parâmetros, e um parâmetro com valor inicial) e retorna um único valor/resultado. Pode ser útil para operações matmáticas que geram um único resultado.

// Exemplo 1 Somando valores com reduce - Passamos primeiro um parametro de valores( recebendo o acumulador e o valor inicial) e como se trata de um acumulador precisamos colocar (, 0) apos a função ou (, 1) dependendo da operação matematica a ser feita.
const valores = [10, 5, 50, 200, 1000];
const totalValor = valores.reduce( (acumulador, valor) => {
    return acumulador + valor
}, 0);

console.log('Exemplo 1');
console.log(valores);
console.log('--');
console.log('Versão com Reduce');
console.log(totalValor);

// Versão da soma sem o reduce e com loops
let acumuladora = 0;

// Loop For
// for( let i = 0; i < valores.length; i++){
//     acumuladora += valores[i];
// }

// Loop For Of
for(let valor of valores){
    acumuladora = acumuladora + valor;
}

console.log('Versão com Loop');
console.log(acumuladora);

// Exercicio 1 - Somando o preço dos cursos com reduce
const totalCursos = cursos.reduce( (acumulador, curso) => {
    return acumulador + curso.preco;
}, 0);

console.log('---');
console.log('Exercicio 1');
console.log(totalCursos);

// Desafio
const cursosFullStack = cursos.filter( curso => curso.categoria == 'Front-End' || curso.categoria == 'Back-End').reduce(
    (acumulador, curso) => {
        return acumulador + curso.preco;
    }, 0
);

console.log('---');
console.log('Desafio');
console.log(cursosFullStack);