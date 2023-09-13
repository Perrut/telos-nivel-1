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

console.log(array, squares);