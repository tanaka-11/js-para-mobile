const apiUrl = `https://jsonplaceholder.typicode.com/users`;

function carregarDados(){ 
    function acessaAPI() {
        fetch(apiUrl)
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error(
                        `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
                    );
                }
                return resposta.json();
            })
            .then(dados => {
                const usuario = document.getElementById('usuarios');

                dados.forEach(usuarioAPI => {
                    // Criando elementos HTML para cada usuário
                    const hr = document.createElement('hr');
                    const nome = document.createElement('h3');
                    const email = document.createElement('p');
                    const website = document.createElement('p');

                    // Preenchendo os elementos com os dados do usuário
                    nome.textContent = `Nome: ${usuarioAPI.name}`;
                    email.textContent = `Email: ${usuarioAPI.email}`;
                    website.textContent = `Website: ${usuarioAPI.website}`;

                    // Adicionando os elementos criados à seção de usuários no HTML
                    usuario.appendChild(hr); 
                    usuario.appendChild(nome); 
                    usuario.appendChild(email);
                    usuario.appendChild(website); 
                });
            })
            .catch(error => {
                console.error("Erro na operação: " + error.message);
            });
    }
    
    acessaAPI();
}