// Exercício 02
// Iteração em Propriedades de Objeto:
// Crie um objeto chamado aluno com propriedades como nome, idade, notas
// (um array de notas). Utilize um loop para calcular a média das notas e exiba o
// resultado no console.

var aluno = {
    nome: 'Maria',
    idade: 21,
    notas: [8.5, 9, 7.8, 9.2, 8.8]
};

// cálculo da média
var totalNotas = 0;
for (var i = 0; i < aluno.notas.length; i++) {
    totalNotas += aluno.notas[i];
}

var media = totalNotas / aluno.notas.length;

console.log('A média das notas de ' + aluno.nome + ' é: ' + media);
