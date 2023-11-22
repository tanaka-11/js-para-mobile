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

- Função Anônima
- Função Nomeada/Declarada
- Arrow Fuction

Nas bibliotecas e frameworks as sintaxes mais comuns são Arrow Fuction e Nomeada.

**Obs.** caso utilize as sintaxes anônimas ou arrow, é obrigatorio primeiro declarar a função para só depois executa-la.
