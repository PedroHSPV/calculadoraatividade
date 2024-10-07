function adicionarNumero(value) {
    const resultado = document.getElementById('resultado');
    resultado.value += value; // Adiciona o número ou operador ao campo de resultado
}


function calcularResultado() {
    const resultado = document.getElementById('resultado').value;

    const calculo = eval(resultado);
    
    document.getElementById('resultado').value = calculo;
}


function apagarConteudo() {
    document.getElementById('resultado').value = ''; 
}


