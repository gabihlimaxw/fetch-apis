function buscarUsuarios() {
    const container = document.getElementById("usuarios");
    container.innerHTML = "Carregando...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(usuarios => {
            container.innerHTML = "";
            usuarios.forEach(usuario => {
                container.innerHTML += `
                    <div class="card">
                        <h2>${usuario.name}</h2>
                        <p><strong>E-mail:</strong></p>
                        <p>${usuario.email}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            container.innerHTML = "Erro ao buscar usuários.";
            console.error(error);
        });
}