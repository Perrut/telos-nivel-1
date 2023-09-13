var personJson = '{"name":"John", "age":30, "car":null}';

var personObject = JSON.parse(personJson);

// console.log(personObject.name);

var city = {
    name: 'Rio de Janeiro',
    population: 5,
    country: 'Brazil'
}

var cityJson = JSON.stringify(city);

console.log(cityJson);

