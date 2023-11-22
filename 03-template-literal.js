const nome = 'Marina';
const sobrenome = 'Tanaka';
let idade = 22;
let cidade = 'São Paulo';
let estado = 'SP';

// Frase Exemplo:
// Meu nome é Marina Tanaka tenho 22 anos e moro em São Paulo - SP. 

// Exemplo 1 - Concatenação tradicional em JS utilizamos o operador '+'
// Obs. Utilizei \"\" por ter feito a mensagem com aspas simples inves de duplas, se utilizar a dupla a barra invertida não se torna necessaria e devemos utilizar as aspas simples.
let mensagem1 = 'Meu nome é <b class=\"destaque\">'+nome+' '+sobrenome+'</b>, tenho '+idade+' anos e moro em '+cidade+' - '+estado+'.';

console.log(mensagem1);


// Exemplo 2 - Template Literal/String
// Obs. Diferentemente da sintaxe tradicional no template literal utilizamos a crase e cifrão com chaves para concatenar
let mensagem2 = `Meu nome é ${nome.toUpperCase()} ${sobrenome.toUpperCase()}, tenho ${idade} anos e moro em ${cidade} - ${estado}. Sou ${idade >= 18 ? 'maior' : 'menor'} de idade.`;

console.log(mensagem2);