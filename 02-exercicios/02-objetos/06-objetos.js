// Exercício 06
// Calcular a Hipotenusa:
// Escreva uma função que receba os comprimentos dos catetos de um triângulo
// retângulo e retorne a hipotenusa.
//
// fórmula para o cálculo da hipotenusa: raiz(catetoA^2 + catetoB^2);
// Dica
//   use a função Math.sqrt() para o cálculo da raiz
//   use a função Math.pow() para o cálculo da potenciação
// Documentação
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

function calcularHipotenusa(catetoA, catetoB) {
    return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
}

console.log(calcularHipotenusa(3, 4));
// 3^2 = 9
// 4^2 = 16
// 16 + 9 = 25
// raiz(25) = 5