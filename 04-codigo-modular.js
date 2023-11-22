// Importando o objeto pessoa
import {pessoa, livro} from './modulos/dados.js';

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