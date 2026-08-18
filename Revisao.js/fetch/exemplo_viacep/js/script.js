async function buscarCep() {
    const campoCep = document.getElementById('cep');
    const resultado = document.getElementById('resultado');

    const cep = campoCep.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    //validar CEP com 8 números
    if(campoCep.value.length !== 8) {
        resultado.innerHTML = '<p class="erro">CEP inválido. Digite 8 números.</p>';
        return;
    }

    resultado.innerHTML = '<p>Carregando...</p>';

    try {
       //aguardando a resposta da API
       const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

       //aguarda -await a conversao da resposta em JSON
       const endereco= await response.json();

   if (endereco.erro) {
        resultado.innerHTML = '<p class="erro">CEP não encontrado.</p>';
        return;
    }
     resultado.innerHTML = `
      <h2>Endereço encontrado</h2>
        <p><strong>CEP:</strong> ${endereco.cep}</p>
        <p><strong>Logradouro:</strong> ${endereco.logradouro}</p>
        <p><strong>Bairro:</strong> ${endereco.bairro}</p>
        <p><strong>Cidade:</strong> ${endereco.localidade}</p>
        <p><strong>Estado:</strong> ${endereco.uf}</p>
    `;
    } catch (error) {
        resultado.innerHTML = '<p class="erro">Erro ao buscar o CEP.</p>';

        console.error(error);
    }
}