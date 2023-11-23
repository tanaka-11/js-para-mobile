// Destructuring(Desestruturação) - Extrair dados de um array para variáveis/constantes individuais

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
console.log('---');

// Acessando os dados da desestruturação atraves de um loop
for(const produto of produtos){
    console.log('Produto:'+produto);
}

// Acessando os dados da função com a desestruturação 
console.log('---');
console.log(converter('tanaka'));
console.log(converter('celular'));
console.log(converter(produtos[1]));