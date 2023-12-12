// Exercício 01
// Calculadora Simples:
// Crie uma função calculadora que recebe dois números e uma operação (adição,
// subtração, multiplicação ou divisão) como parâmetros e retorna o resultado da
// operação. Certifique-se de lidar com a divisão por zero.

// exemplos
// console.log(calculadora(5, 2, 'adicao')); // Deve imprimir 7
// console.log(calculadora(10, 3, 'multiplicacao')); // Deve imprimir 30

function calculadora(operando1, operando2, operacao) {
    if (operacao === 'adicao') {
        return operando1 + operando2;
    } else if (operacao === 'subtracao') {
        return operando1 - operando2;
    } else if (operacao === 'multiplicacao') {
        return operando1 * operando2;
    } else if (operacao === 'divisao') {
        if (operando2 === 0) {
            throw new Error('Divisão por zero.');
        } else {
            return operando1 / operando2;
        }
    } else {
        throw new Error('Operação inválida. Operações válidas: adicao, subtracao, multiplicacao e divisao.');
    }
}

console.log(calculadora(5, 2, 'adicao')); // Deve imprimir 7
console.log(calculadora(10, 3, 'multiplicacao')); // Deve imprimir 30
console.log(calculadora(11, 3, 'subtracao'));
console.log(calculadora(32, 8, 'divisao'));
// console.log(calculadora(32, 0, 'divisao'));
// console.log(calculadora(32, 0, 'potenciacao'));