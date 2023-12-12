var mathObj = {
    // função anônima
    // não possui um nome e não pode ser chamada
    // apenas com sua declaração
    sum: function(a, b) {
        return a + b;
    }
};

console.log(mathObj.sum(2,3));

// Objeto Math
console.log(Math.abs(-100)); //100
console.log(Math.pow(2,3)); //8
