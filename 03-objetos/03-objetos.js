var car = {
    // propriedades
    name: 'Gol',
    model: 'G3',
    color: 'white',
    weight: 500,
    started: false,

    // métodos
    start: function startCar() {
        this.started = true
    }
};

car.start();

console.log(car.started);

class Square {
    // quando chamamos new, estamos invocando este método constructor da classe
    constructor(height, width) {
        // não declaramos as propriedades fora do constructor
        this.height = height;
        this.width = width;
    }
}

var square = new Square(20, 20);

var square2 = new Square(20, 20);

var square3 = new Square(20, 20);

var square4 = new Square(20, 20);

var square5 = { width: 50 };

console.log(square);
console.log(square2);
console.log(square3);
console.log(square4);
console.log(square5);
