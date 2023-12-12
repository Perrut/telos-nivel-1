// passagem por valor - entrada de tipos primitivos (números, strings e booleanos)

var number = 10;

function multiplyNumber(num) {
    // exemplo de passagem por valor
    // como number é um dado do tipo número (primitivo)
    // é criada uma cópia de number para num
    // com isso, o valor de number NÃO é alterado
    num = num * 10;
    return num;
}

var multipliedNumber = multiplyNumber(number);

// console.log(number);
// console.log(multipliedNumber);

// passagem por referência - quando passamos objetos como parâmetros

var idDocument = { number: 10 };

function changeIdNumber(idDoc) {
    // exemplo de passagem por referência
    // como idDocument é um objeto
    // não é passada para idDoc uma cópia desse objeto e 
    // sim uma referência que aponta para o mesmo local em
    // memória que idDocument se encontra
    // por isso, uma alteração em idDoc se reflete em idDocument
    idDoc.number = 20;
}

console.log(idDocument);
changeIdNumber(idDocument);
console.log(idDocument);
