// Promises com fetch - Em resumo é uma comunicação assíncrona (AJAX) para carregamento de dados usando fetch/then/catch (com Encadeamento)

// Normalmente criamos uma constante para guardar a url da API
const apiUrl =  `https://jsonplaceholder.typicode.com/users/3`;

// Fetch(Conecte) - Primeiro se conectamos com a api 
fetch(apiUrl)
// .then(Então) - Depois capturamos a resposta da API em formato JSON
.then(resposta => resposta.json())
// .then(Então) - E então capturamos os dados contido na resposta
.then(dados => console.log(dados) )
// .catch(Capture) - Por fim passamos o catch para capturar algum erro na aplicação
.catch(error => {
    console.error('Erro na operação:'+error.message)
})

// Versão em 1 linha
// fetch(apiUrl).then(resposta => resposta.json()).then(dados => console.log(dados)).catch(error => console.error('Erro na operação:'+error.message));