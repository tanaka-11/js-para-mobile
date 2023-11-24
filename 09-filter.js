// Importando banco de dados de exemplo
import cursos from "./modulos/cursos.js";

// Método Filter(filtrar) - Em resumo ele também passa por elementos de um array (usando uma função callback) e retorna valores de acordo com uma ou mais condições gerando um novo array.

// Exemplo 1 - Nesse exemplo vamos gerar um array com os valores que bateram a meta
const vendas = [1500, 3000, 1000, 500, 750, 5000, 1200];
const meta = 1000;

// Versão da arrow fuction completa
// const vendasAcimaDaMeta = vendas.filter( (venda) => {
//     return venda >= meta
// });

// Versão arrow fuction simplificada
const vendasAcimaDaMeta = vendas.filter(venda => venda >= meta);

console.log('Exemplo 1');
console.log(vendasAcimaDaMeta);
console.log('--');
console.log(vendas);

// Exemplo 2 - Neste exemplo vamos filtrar alunos que o nome começam com a mesma letra atraves do (startsWith)
const alunos = ['Nicolas', 'Eliel', 'André', 'Kaue', 'Barbosa', 'Aline', 'Zimbo', 'Melissa', 'Marina', 'Marcelo', 'Matheus'];

// Versão 1 - arrow fuction completa filtrando todos alunos que começam M
// const resultados = alunos.filter(aluno => {
//     return aluno.startsWith('M') || aluno.startsWith('m')
// } )

// Versão 2 arrow fuction simplificada filtrando alunos que começam com M e terminando com o
const resultados = alunos.filter(aluno => aluno.startsWith('M') && aluno.endsWith('o'));

console.log('---');
console.log('Exemplo 2');
console.log(alunos);
console.log('--');
console.log(resultados);

// Exemplo 3 - Vamos filtrar os dados de categoria onde so filtre os cursos de design
const cursosDesign = cursos.filter( curso => curso.categoria === 'Design');
console.log('---');
console.log('Exemplo 3');
console.log(cursos);
console.log('--');
console.log(cursosDesign);

// Exemplo 4 - Vamos filtrar os dados de categoria que não sejam de "design"
const cursosMenosDesign = cursos.filter(curso => curso.categoria != 'Design');
console.log('---');
console.log('Exemplo 4');
console.log(cursosMenosDesign);

// Exercicio 1 - Gere um novo array com os cursos que atendam os seguintes critérios: 
// Categoria - Front-End e Mobile
// Preços - Acima de 600

// Versão 1 - Como passamos primeiro o ||(ou) tivemos que adicionar parenteses para trata-lo como prioridade
// const cursosCategoria = cursos.filter((curso) => {
//     return (curso.categoria == 'Front-End' || curso.categoria == 'Mobile') && curso.preco > 600
// });

// Versão 2 - Passando diretamente o &&(e) como prioridade
const cursosCategoria = cursos.filter(curso => curso.preco > 600 && curso.categoria == 'Front-End' || curso.categoria == 'Mobile');

console.log('---');
console.log('Exercicio 1');
console.log(cursosCategoria);