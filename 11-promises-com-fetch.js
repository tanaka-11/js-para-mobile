// Promises com fetch - Em resumo é uma comunicação assíncrona (AJAX) para carregamento de dados usando fetch/then/catch (com Encadeamento)

// Normalmente criamos uma constante para guardar a url da API
const apiUrl =  `https://jsonplaceholder.typicode.com/users/1`;

// Função de acesso da API
function acessaAPI(){  
    // Fetch(Conecte) - Primeiro se conectamos com a api 
    fetch(apiUrl)

    // .then(Então) - Depois capturamos a resposta da API em formato JSON
    .then(resposta => {
        // Se a resposta da requisição não for bem-sucedida
        if(!resposta.ok){
            throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`)
        }
        // Se estiver tudo okay, então retorne a resposta em formato json 
        return resposta.json();
    })

    // .then(Então) - E então capturamos os dados contido na resposta
    .then(dados => console.log(dados) )

    // .catch(Capture) - Por fim passamos o catch para capturar algum erro na aplicação
    .catch(error => {
        console.error('Erro na operação:'+error.message)
    })
}

// Executando a função de acesso
acessaAPI();