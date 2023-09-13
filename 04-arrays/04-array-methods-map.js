var array = [1,2,3,4,5,6,7,8];

// desejo um array com todos os seus valores elevados ao quadrado

// array.forEach(function(element, index) {
//     array[index] = Math.pow(element, 2);
// });

// console.log(array);

// quero manter os valores do array original
// e gerar os quadrados em outro array: map

var squares = array.map(function(element) {
    return Math.pow(element, 2);
});
// primeiro passo: element será 1, squares será [1]
// segundo passo: element será 2, squares será [1,4]
// ...
// oitavo passo: element será 8, squares será [1, 4, 9, 16, 25, 36, 49, 64]
console.log(array, squares);