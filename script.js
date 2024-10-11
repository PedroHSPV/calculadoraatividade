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

    const resultado = document.getElementById('resultado') // localiza o id  no html 
    resultado.value = resultado.value.slice(0, -1) // nova string a partir do 0
}

function adicionarNumero(value) { //o parametro rece os valores do numero clicado 
    const resultado = document.getElementById('resultado')
    resultado.value += value // adiciona o valor do botao por conta do parametro 
    valorAtual  += value // armazena o valor atual  para ser calculado apos a escolha do operador 
}


function definirOperador(op){

    operador = op // armazena a operacao na variavel global operador 
    valorAnterior = valorAtual // armazena o promeiro numero antes do operador ser chamado 
    valorAtual = "" // quando o operador e selcionado e limpa o primeiro gaor para que o segundo seja digotado

    document.getElementById('resultado').value = '' //limpa a tela para aparecer apenas o segundo numero

}


function calcular(){

   
    // declaro as variaveis e converto a string para numeor 

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
    



