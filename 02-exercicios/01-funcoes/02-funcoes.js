// Exercício 02
// Média de Números:
// Crie uma função chamada calcularMedia que recebe um array de números como
// parâmetro e retorna a média desses números.

// exemplos
// console.log(calcularMedia([2, 4, 6, 8, 10])); // Deve imprimir 6
// console.log(calcularMedia([1, 3, 5])); // Deve imprimir 3

function calcularMedia(numeros) {
    var quantidadeNumeros = numeros.length;
    var somaTotal = 0;

    for (var i = 0; i < quantidadeNumeros; i++) {
        somaTotal += numeros[i];
    }

    return somaTotal / quantidadeNumeros;
}

console.log(calcularMedia([2, 4, 6, 8, 10])); // Deve imprimir 6
console.log(calcularMedia([1, 3, 5])); // Deve imprimir 3
