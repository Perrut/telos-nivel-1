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
    // quando utilizamos a palavra 'new', estamos na verdade invocando esse método constructor da classe
    constructor(height, width) {
        // não delcaramos as propriedades do objeto fora do método constructor
        this.height = height;
        this.width = width;
    }
}

var square = new Square(50, 50);

console.log(square);

var square2 = new Square(40, 40);

console.log(square2);

var square3 = new Square(60, 60);

var square4 = new Square(25, 25);
