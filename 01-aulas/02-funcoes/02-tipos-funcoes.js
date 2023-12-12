// funções com identificador
function sum(a, b) {
    return a + b;
}
// sum(5, 10);

// função anônima
var subtract = function (a, b) {
    return a - b;
}
// subtract(5, 2);

// arrow function
var multiply = (a, b) => {
    return a * b;
}
// multiply(2, 2);

function transformNumber(transformFunction, a, b) {
    return transformFunction(a, b);
}
// passar uma função por parâmetro para outra função -> callback

var transformedNumber = transformNumber(multiply, 10, 5);

console.log(transformedNumber);
