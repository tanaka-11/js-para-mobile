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