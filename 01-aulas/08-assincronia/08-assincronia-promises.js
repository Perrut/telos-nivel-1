// Promise é um objeto do javascript usado para obter o resultado de operações assíncronas

// com ele, é possível, detectar o momento em que a operação assíncrona acaba, e 
// tratar o resultado que vem da execução da operação, seja ele um resultado de sucesso
// ou de erro

var promise = new Promise(function(resolve, reject) {
    // função que executa operações assíncronas
    setTimeout(function() {
        var date = new Date();
        if (date.getTime() % 2 === 0) {
            resolve(date);
        } else {
            reject(date);
        }
    }, 2000);
});

promise.then(
    // funcao para quando a promise se resolve com sucesso
    // possui um parâmetro, pois a chamada da função resolve
    // dentro da promise também possui um parâmetro
    function (date) {
        console.log('Promise resolvida ', date);
    },
    // funcao para quando a promise for rejeitada (acontecer algum erro de execução do método
    // assíncrono dentro da promise)
    function (date) {
        console.log('Promise rejeitada ', date);
    }
);