// ...rest - Com ele conseguimos mesclar uma lista de parâmetros/argumentos para uma função

// Arrays de exemplo 
const cientistas = [
    'Tesla', 
    'Eisten',
    'Newton',
    'Darwin'
];
const artistas = [
    'Mc Kevin',
    'Mc Paiva',
    'Neguinho BDP',
    'Kyan',
    'Mc Rodolfinho',
    'Tanaka'
];

// Função com a sintaxe de arrow fuction, operador rest e com a palavra-chave sort que serve para organização 
const classificar = (...parametros) => {
    return parametros.sort();
};

// Chamada da função com o operador rest
console.log(classificar(...cientistas)); // Spread
console.log(classificar(...artistas)); // Spread