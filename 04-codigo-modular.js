// Importando recursos de dados.js
// Obs. Utilizamos o 'as' para resolver o conflito de mesmo nome nos modulos
import {pessoa, livro, alunos as reprovados} from './modulos/dados.js';

// Importando recursos de alunos.js
import alunos from './modulos/alunos.js';

// Importando recursos de funcoes.js
import {converteMaiusculas, converteMinusculas, formataMoeda} from './modulos/funcoes.js'

// Chamando dados do objeto pessoa
console.log(pessoa);
console.log(pessoa.nome);

// Chamando dados com loop do objeto pessoa
for(const prop in pessoa) {
    console.log(pessoa[prop]);
}

// Chamando dados do objeto livro
console.log(livro.titulo);
console.log(livro.volume);

// Chamando dados do array alunos dentro de dados.js utilizando o 'as'
console.log(reprovados);

// Chamando dados do array alunos dentro do alunos.js utilizando o nome original do modulo 
console.log(alunos);

// Chamando função mesclado com outro modulo
console.log(converteMaiusculas(reprovados[0]));
console.log(converteMinusculas(alunos[0]));

// Chamando função do modulo
let preco1 = 1200.85;
let preco2 = 100000.50;
let preco3 = 500.8451;

console.log(formataMoeda(preco1));
console.log(formataMoeda(preco2));
console.log(formataMoeda(preco3));