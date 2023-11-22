import meses from "./modulos/meses.js";

// Inves do for of como fiz um objeto inves do array tive que utilizar uma sintaxe diferente no loop utilizando o for in passando o objeto 'meses' e ai sim a chamada individualmente de cada mes atraves do 'mes' em colchetes

// for (const mes in meses) {
//     console.log(`${meses[mes]}`);
// }

// Versão com array utilizando o loop 'for of'
for (const mes of meses) {
    console.log(mes);
}