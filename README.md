# JavaScript para Mobile

 Revisão e Novos Recursos JS para Mobile

## Principais tópicos de atenção e estudos

### Variáveis e Constantes
`let` e `const` possuem escopo de **BLOCO** quando forem declarados dentro de blocos(condicionais, loops), ou **GLOBAL** quando forem declarados fora desses blocos.

`var` possui escopo **GLOBAL** mesmo quando declarado fora dos blocos. Logo ele se torna acessivel em qualquer lugar da aplicação.

`const` obrigatoriamente precisa ser inicializado com algum valor e este valor **NÃO** pode ser reatribuido.

---

### Funções

Blocos de código reaproveitáveis que podem ser criados de pelo menos 3 formas:

- Função Anônima: Não precisa de um nome
- Função Nomeada/Declarada: Recebe nome
- Arrow Fuction: () => {}

Nas bibliotecas e frameworks as sintaxes mais comuns são Arrow Fuction e Nomeada.

**Obs.** caso utilize as sintaxes anônimas ou arrow, é obrigatorio primeiro declarar a função para só depois executa-la.

---

### Template Literal/String

É a forma mais moderna de manipular dados estáticos e dinâmicos, além de permitir de uma forma mais fácil executar operações dentro de strings/códigos. Lembre-se do uso das crases e do `${}` para execuções de código dinâmico(variáveis, constantes, funções e etc).

---

### Módulos

São uma maneira de separar lógicas/funcionalidades/dados em arquivos dedicados. Ao criar módulos é necessário utilizar os comandos `export` (no módulo a ser exportado) e `import` (no arquivo que você quer usar o módulo).

Ao exportar apenas **um recurso** utilizamos o `export default nomeDoRecurso` ao exportar **mais de um** recurso, utiliza-se `export {recurso1, recurso2}`.

Ao importar apenas **um recurso**, utiliza-se `import nomeDoRecurso from "./local/nomeModulo"`. Ao importa **mais de um** recurso utiliza-se `import {recurso1, recurso2} from "./local/nomeModulo"`

---

### Operadores Spread e Rest

Utilizamos o operador `...` para ambos casos tendo diferenças na forma de utilizar. No **spread** utilizamos para copiar elementos/dados de um array/objeto para dentro de outro array/objeto. Ele é útil para gerar novas estruturas de dados a partir de estruturas já existentes.
 
 Já com o **rest** , usamos para gerar uma lista de parâmetros para uma função à partir dos valores de um array,utilizado para manipular dados de um array sem a nescessidade de criar um loop. Ele é útil para evitar a necessidade de criar parâmetros manualmente em uma função, ou para quando não sabemos quando parâmetros serão necessários

---

### Destructuring(Desestruturação)

Técnica para extrair valores de arrays e objetos para novas variáveis/constantes. Usada para simplificar o acesso a estes dados, podendo ser aplicada também em parâmetros de funções.

---

### Métodos de manipulação de arrays: map, filter e reduce
São metodos que permitem realizar operações diversas em elementos de arrays. Funcionam como `loops` especiais, executando uma função `callback` para cada elemento dentro do array.

- Map: Método que percorre os elementos do array e **executa uma transformação**, gerando um novo array de dados.

- Filter : Método de **filtrar dados de um array** de acordo com uma ou mais condições, gerando um novo array de dados.

- Reduce : Método que **realiza operações** (soma, multiplicação, concatenação e etc), gerando um **ÚNICO** resultado.