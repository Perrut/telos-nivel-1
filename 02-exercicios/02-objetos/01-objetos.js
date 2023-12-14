// Exercício 01
// Manipulação de Propriedades de Objeto:
// Crie um objeto chamado carro com as propriedades marca, modelo e ano.
// Em seguida, adicione uma nova propriedade chamada cor e altere o valor da propriedade ano.
// Por fim, exiba as propriedades do objeto no console.

var carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
};

// podemos adicionar propriedades aos nossos objetos mesmo depois de criá-los
carro.cor = 'vermelho';

carro.ano = 2021;

console.log(carro);
