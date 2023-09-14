// quando criamos a data pelo NodeJS, ele utiliza o timezone GMT ou (UTC)
// quando criamos a data pelo Browser, ele utiliza o timezone configurado no nosso
// sistema operacional
// var date = new Date(); // retorna data e hora atuais

// console.log(date);

// ISO 8601 YYYY-MM-DD
// console.log(new Date('2022-08-16'));

// console.log(new Date(2023, 8)); // atenção ao mês
// mês no javascript começa a contar a partir do 0
// isso acontece somente com o mês
// console.log(new Date(2023, 8, 13));
// console.log(new Date(2023, 8, 13, 20));
// console.log(new Date(2023, 8, 13, 20, 30));
// console.log(new Date(2023, 8, 13, 20, 30, 15));
// console.log(new Date(2023, 8, 13, 20, 30, 15, 30));

var date = new Date();
// lembrar que os métodos que obtém propriedades de data sem UTC
// utilizam o fuso horário do sistema operacional
// console.log(date.getDate(), date.getUTCDate());
// console.log(date.getMonth(), date.getUTCMonth());
// console.log(date.getFullYear(), date.getUTCFullYear());
// console.log(date.getHours(), date.getUTCHours());
// console.log(date.getMinutes(), date.getUTCMinutes());
// console.log(date.getSeconds(), date.getUTCSeconds());

console.log(date.getTime()); // timestamp
// timestamp é o valor em milissegundos que se passaram entre a data e o primeiro dia
// de 1970