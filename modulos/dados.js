// Criando objeto com dados de uma pessoa
const pessoa = {
    nome: 'Marina Tanaka',
    idade: 22,
    cidade: 'São Paulo'
};

const livro = {
    titulo: "Maldição do Titã",
    volume: "Percy Jackson",
    ano: 2013
};

// Exportando como padrão o objeto pessoa 
// Obs. O default so funciona se eu precisar exportar apenas um recurso
// export default pessoa;

// Sintaxe quando vamos exportar mais de um recurso utilizando apenas a palavra-chave export e os recursos entre chaves
export {pessoa, livro};