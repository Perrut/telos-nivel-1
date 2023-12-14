// Exercício 03
// Objetos e Funções:
// Crie uma função chamada criarPessoa que recebe parâmetros para nome,
// idade e profissao e retorna um objeto representando uma pessoa. Em seguida,
// crie duas instâncias de pessoas utilizando essa função e exiba as informações no
// console. Utilize classes com construtor para resolver esse exercício

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

function criarPessoa(nome, idade, profissao) {
    return new Pessoa(nome, idade, profissao);
}

var pessoa1 = criarPessoa('João', 25, 'Engenheiro');
var pessoa2 = criarPessoa('Ana', 30, 'Professora');

console.log(pessoa1);
console.log(pessoa2);
