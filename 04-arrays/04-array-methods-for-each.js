var array = [45, 76, 34, 3, 2, 90, 10];

// iterar por esse array à moda antiga
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// iterando com o método forEach
array.forEach(function (element, index) {
    console.log(element, index);
});
// 1 passo: element será 45, index será 0
// 2 passo: element será 76, index será 1
// ...
// 7 passo: element será 10, index será 6