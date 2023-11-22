// ...spread(espalhar) - Ele copia elementos/dados de um array/objeto para dentro de outro array/objeto

// Spread com arrays
const bandas = ['Pink Floyd', 'Rush', 'Yes'];
const maisBandas = [...bandas,'Slayer', 'Nightwish'];

console.log(bandas);
console.log(maisBandas);

// Spread com objetos
const cliente = {
    nome: 'Tanaka',
    cidade: 'São Paulo',
    idade: 21
};

const novosDados = {
    ...cliente, // Copiando as propriedades do objeto 'cliente' para o objeto de 'novosDados'
    estado: 'SP',
    pedido: '123xyz',
    total: 123.85,
    idade: 22 // Sobreescrevendo valores de propriedades
};

console.log(cliente);
console.log(novosDados);