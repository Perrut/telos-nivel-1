// Exercício 03
// Verificador de Palíndromos:
// Implemente uma função chamada verificarPalindromo que recebe uma string
// como parâmetro e retorna true se a string for um palíndromo e false caso contrário.
// Um palíndromo é uma palavra, frase, número ou outro tipo de sequência que é igual
// quando lida de trás para frente.

// exemplos
// console.log(verificarPalindromo('radar')); // Deve imprimir true
// console.log(verificarPalindromo('javascript')); // Deve imprimir false

function verificarPalindromo(palavra) {
    var palavraMinuscula = palavra.toLowerCase(); // retorna uma nova string em letras minúsculas
    var arrayLetras = palavraMinuscula.split(''); // separa e retorna um array de letras
    var arrayLetrasInvertido = arrayLetras.reverse(); // inverte a ordem dos elementos do array em um novo array e retorna o array com os elementos invertidos
    var palavraInvertida = arrayLetrasInvertido.join(''); // retorna uma string com a junção das letras do array

    return palavraMinuscula === palavraInvertida;
}

console.log(verificarPalindromo('radar')); // Deve imprimir true
console.log(verificarPalindromo('javascript')); // Deve imprimir false
console.log(verificarPalindromo('Ovo'));
