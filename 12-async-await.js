// Comunicação assíncrona (AJAX) para carregamento de dados usando fetch e a sintaxe async/await através de uma função (Obrigatorio uso de função para sintaxe async/await).

// Guardando a url da API numa constante
const apiUrl = `https://jsonplaceholder.typicode.com/photos/300`

// Palavra chave async no começo da função e await no fetch
async function acessaAPI(){
    try {
        // Guardando a resposta numa constante e passando a palavra-chave await para aguardar o processamento
        const resposta = await fetch(apiUrl);

        // Tratativa de erro
        if(!resposta.ok){
            throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
        }

        // Guardando os dados da API em formato json
        const dados = await resposta.json();

        // Exibindo dados da API
        console.log(dados);
    } catch (error) {
        console.error('Erro: '+error.message);
    }
}

// Executando a função de acesso
acessaAPI();
