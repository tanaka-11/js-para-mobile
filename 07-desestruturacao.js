// Destructuring(Desestruturação) - Extrair dados de um array para variáveis/constantes individuais

// DESESTRUTURAÇÃO EM ARRAYS
// Exemplo 1 de destructuring em arrays
const alunas = ['Tanaka', 'Zimbo', 'Melissa'];
const [tanaka, zimbo, melissa] = alunas;

console.log('Exemplo 1');
console.log(tanaka);
console.log(zimbo);
console.log(melissa);

// Exemplo 2 de destructuring em arrays (Neste caso pulamos uma casa para não ter a chamada de um dos elementos do array)
const unidades = ['Penha', 'Vila Prudente', 'Tatuapé', 'São Miguel']; 
const [penha, vp,  , smp] = unidades;

console.log('---');
console.log('Exemplo 2');
console.log(penha);
console.log(vp);
console.log(smp);

// Exemplo 3 de destructuring em arrays (Neste caso fizemos de forma direta sem criar um array previamente)
const [tesla, einstein, newton] = ['Tesla', 'Eistein', 'Newton'];

console.log('---');
console.log('Exemplo 3');
console.log(tesla);
console.log(einstein);
console.log(newton);

// Exemplo 4 de destructuring em arrays (Neste caso utilizamos uma função dentro de uma matriz junto com um array)
const recursos = [
    ['Notebook', 'TV Led', 'Computador Desktop'],
    texto => texto.toUpperCase() // Arrow Fuction Anonima Simplificada
    
];

const [produtos, converter] = recursos; // Desestruturação

console.log('---');
console.log('Exemplo 4');
// console.log(recursos); // Matriz completa
console.log(produtos[1]); // Acessando pela constante gerada pela desestruturação
console.log('--');

// Acessando os dados da desestruturação atraves de um loop
for(const produto of produtos){
    console.log('Produto:'+produto);
}

// Acessando os dados da função com a desestruturação 
console.log('--');
console.log(converter('tanaka'));
console.log(converter('celular'));
console.log(converter(produtos[1]));


// DESESTRUTURAÇÃO EM OBJETOS
// Exemplo 1 destructuring em objetos
const pessoa = {
    nome: 'Tanaka',
    idade: 22,
    bairro: 'Vila Prudente',
    situacao: 'Apaixonada'
};
// Diferentemente do array para desestruturação de objetos é obrigatorio o nome da propriedade ser o mesmo
const { nome, idade, bairro, situacao } = pessoa;

console.log('---');
console.log('Exemplo 5');
console.log(`A aluna ${nome} está ${situacao}.`);
console.log(`Mora na ${bairro} e tem ${idade} anos.`);

// Exemplo 2 destructuring em objetos - Neste caso fizemos o objeto de maneira direta e vamos utilizar o apelido(Passamos o nome que queremos dar juntamente com ':' depois do nome original) para não precisar passar o mesmo nome da propriedade
const {codigo : pedido, cursos, preco} = {
    codigo: '123abc', cursos: ['Figma', 'Node.JS'], preco: 1000
};

console.log('---');
console.log('Exemplo 6');
console.log(pedido);
console.log(cursos[0]);
console.log(preco);

// DESESTRUTURAÇÃO EM FUNÇÕES
// Exemplo 1 de destructuring para parâmetros de função
console.log('---');
console.log('Exemplo 7');

// Neste caso desestruturamos diretamente na função com as chaves e capturando as propriedades nescessarias
function exibirDados({titulo, ano}){
    console.log(`Filme: ${titulo} - Ano Lançamento: ${ano}`);
};

// Objetos para exemplo 
const filme1 = {
    titulo: 'Vingadores',
    ano: 2012
};
const filme2 = {
    titulo: 'Barbie',
    ano: 2023
};

// Exibindo dados da função
exibirDados(filme1);
exibirDados(filme2);