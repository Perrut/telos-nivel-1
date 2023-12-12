
function operacaoAssincrona(numero) {
    // nossa primeira função assíncrona - setTimeout
    // primeiro parâmetro - função que eu quero executar
    // segundo parâmetro - tempo que desejo esperar para que a função fornecida no primeiro
    // parâmetro seja executada
    setTimeout(function () {
        console.log('operacao assíncrona', numero);
    }, 2000);
}

var potencia = Math.pow(2,2); // 1º comando a ser executado
var respostaAssincrona = operacaoAssincrona(potencia); //3º comando a ser executado
console.log(potencia); //2º comando a ser executado