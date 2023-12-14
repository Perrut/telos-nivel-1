// Exercício 05
// Arredondamento para Baixo:
// Crie uma função que aceite um número decimal como argumento e retorne
// o número inteiro mais próximo para baixo.
// 
// Dica, use a função Math.floor() Documentação
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

function arredondarParaBaixo(numero) {
    return Math.floor(numero);
}

console.log(arredondarParaBaixo(5.9));
console.log(arredondarParaBaixo(4.75));
console.log(arredondarParaBaixo(6.3467));
