function limpar_formulario_cep() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('rua').value=(conteudo.logradouro)
        document.getElementById('bairro').value=(conteudo.bairro)
        document.getElementById('cidade').value=(conteudo.localidade)
        document.getElementById('uf').value=(conteudo.uf)
        document.getElementById('ibge').value=("");
    }
    else{
        limpar_formulario_cep();
        alert("CEP não encontrado")
    }
}

function pesquisacep(valor) {
    let cep = valor.replace(/\D/g, '');
    if(cep != ""){
        let validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)){
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            document.getElementById('ibge').value="...";

            let script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            document.body.appendChild(script)
        }
        else {
            limpar_formulario_cep();
            alert("formato de CEP inválido.");
        }
    }
    else {
        limpar_formulario_cep();
    }
};