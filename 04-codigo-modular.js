// Importando o objeto pessoa
import {pessoa, livro} from './modulos/dados.js';

// Chamando dados
console.log(pessoa);
console.log(pessoa.nome);

// Chamando dados com loop
for(const prop in pessoa) {
    console.log(pessoa[prop]);
}