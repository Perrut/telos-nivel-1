var array = [1,2,3,4,5,6,7,8,9,10];

// gerar um array contendo todos os elementos de array que são pares

// podemos fazer isso utilizando o método filter

var evenNumbers = array.filter(function (element) {
    if (element % 2 === 0) {
        return true;
    }
});
// funcionamento
// iteracao 1 - element será 1, evenNumbers []
// iteracao 2 - element será 2, evenNumbers [2]
// iteracao 3 - element será 3, evenNumbers [2]
// iteracao 4 - element será 4, evenNumbers [2, 4]
// ...
// iteracao 10 - element será 10, evenNumbers [2, 4, 6 , 8, 10]
console.log(evenNumbers);

var oddNumbers; // adicionar os números ímpares ao array
