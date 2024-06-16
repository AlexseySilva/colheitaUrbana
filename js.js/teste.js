function limparCamposEndereco() {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

function preencherCamposEndereco(dados) {
    document.getElementById('rua').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.uf;
}

async function consultarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP

    if (cep.length !== 8) {
        alert('CEP inválido. Favor inserir um CEP válido.');
        limparCamposEndereco();
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado. Favor verificar o CEP informado.');
            limparCamposEndereco();
        } else {
            preencherCamposEndereco(data);
        }
    } catch (error) {
        console.error('Erro ao consultar API de CEP:', error);
        alert('Erro ao consultar API de CEP. Tente novamente mais tarde.');
        limparCamposEndereco();
    }
}