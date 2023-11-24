// Importando o banco de dados da simulação
import cursos from "./modulos/cursos.js";

// Método(Função) Map(Mapear/Transformar em outra coisa) - Em resumo ele passa por elementos de um array e realiza operações em cada um deles através de uma função(normalmente sendo uma arrow fuction por ser menos verboso e chamada de callback) gerando um outro array.

// Exemplo 1 de Map - Neste caso utilizamos o map para dobrar o array de numeros que tinhamos, passando uma arrow fuction com os dados da multiplicação.
console.log('Exemplo 1');
const numeros = [11, 10, 9, 8, 7, 160];
console.log(numeros);

const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados);

// Exemplo 2 de Map - Neste caso geramos um novo array apenas com os nomes(titulo) dos cursos
console.log('---');
console.log('Exemplo 2');
console.log(cursos);

const titulos = cursos.map(curso => curso.titulo );
console.log(titulos);

// Exercicio utilizando o map para gerar um novo array apenas com os preços calculados e com um desconto de 10%
// Conta para desconto: valor - valor * 0.10
const descontos = cursos.map(curso => curso.preco - curso.preco * 0.10);
console.log('---');
console.log('Exercicio 1');
console.log(descontos);

// Desafio manter o array completo apenas modificando os preços com o desconto
console.log('---');
console.log('Desafio!');

// 1º versão da resolução do desafio com a sintaxe completa
const novosDados = cursos.map(curso => {
    return {...curso, preco: curso.preco - curso.preco * 0.10};
});
console.log(novosDados);

// 2º versão tiramos as chaves de fora e o return e adicionamos parenteses no bloco
const blackfriday = cursos.map(curso => 
    ({...curso, preco: curso.preco - curso.preco * 0.10})
);
console.log('--');
console.log(blackfriday);