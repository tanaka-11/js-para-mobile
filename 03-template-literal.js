const nome = 'Marina';
const sobrenome = 'Tanaka';
let idade = 22;
let cidade = 'São Paulo';
let estado = 'SP';

// Concatenação tradicional em JS utilizamos o operador '+'

// Frase Exemplo:
// Meu nome é Marina Tanaka tenho 22 anos e moro em São Paulo - SP. 

// Obs. Utilizei \"\" por ter feito a mensagem com aspas simples inves de duplas, se utilizar a dupla a barra invertida não se torna necessaria e devemos utilizar a aspas simples.
let mensagem1 = 'Meu nome é <b class=\"destaque\">'+nome+' '+sobrenome+'</b>, tenho '+idade+' anos e moro em '+cidade+' - '+estado+'.';

// Exibindo a mensagem de exemplo
console.log(mensagem1);
