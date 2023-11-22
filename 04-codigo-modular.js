// Importando recursos de dados.js
// Obs. Utilizamos o 'as' para resolver o conflito de mesmo nome nos modulos
import {pessoa, livro, alunos as reprovados} from './modulos/dados.js';

// Importando recursos de alunos.js
import alunos from './modulos/alunos.js';

// Importando recursos de funcoes.js de maneira manual.
// import {converteMaiusculas, converteMinusculas, formataMoeda} from './modulos/funcoes.js'

// Importando recursos de funcoes.js com o 'as'.
import * as minhasFuncoes from './modulos/funcoes.js';

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

// Chamando função mesclada com outro modulo
console.log(minhasFuncoes.converteMaiusculas(reprovados[0]));
console.log(minhasFuncoes.converteMinusculas(alunos[0]));

// Exemplo da função formataMoeda
let preco1 = 1200.85;
let preco2 = 100000.50;
let preco3 = 500.8451;

// Chamando função formataMoeda do modulo
console.log(minhasFuncoes.formataMoeda(preco1));
console.log(minhasFuncoes.formataMoeda(preco2));
console.log(minhasFuncoes.formataMoeda(preco3));