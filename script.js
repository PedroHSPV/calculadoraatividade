/*function contaSubtracao(){

    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    const resultadoSubtracao = valor1 - valor2;


    document.getElementById('resultado').value = (resultadoSubtracao)

}


function contaDivisao(){

    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    const resultadoDivisao = valor1 / valor2;


    document.getElementById('resultado').value = (resultadoDivisao)

}


function contaMultiplicacao(){

    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    const resultadox = valor1 * valor2;


    document.getElementById('resultado').value = (resultadox ) 

}

function contaAdicao() {
    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    const resultado = valor1 + valor2;

    document.getElementById('resultado').value = (resultado ) 
}
*/

// armazena
let operador = ''
let valorAnterior = ''
let valorAtual = ''

function apagarConteudo(){ 

    document.getElementById('resultado').value =''
    valorAnterior = ''
    valorAtual = ''
}

function apagarCaracter(){

    const resultado = document.getElementById('resultado')
    resultado.value = resultado.value.slice(0, -1) // nova string a partir do 0
}

function adicionarNumero(value) {
    const resultado = document.getElementById('resultado')
    resultado.value += value // adiciona o valor do botao
    valorAtual  += value
}


function definirOperador(op){

    operador = op // parametro 
    valorAnterior = valorAtual // armazena
    valorAtual = ""

    document.getElementById('resultado').value = '' //limpa
}


function calcular(){

   
    // converter
    let n1 = parseFloat(valorAnterior) 
    let n2 = parseFloat(valorAtual) 
    let resultado; // armazena



    switch(operador){ // pega a operação do parametro
        case '+':
    resultado =  n1 + n2;
    break;
        case '-':
    resultado =  n1 - n2;
    break;
        case '*': 
    resultado =  n1 * n2;
    break;
        case '/':
            if (n2 === 0) {
                alert('Esse número não é valido!')
                }
            resultado = n1 / n2;
    break;

    }

   
document.getElementById('resultado').value = resultado;

 // Reseta
    valorAnterior = ''
    valorAtual = ''
    operador =''

}
    



