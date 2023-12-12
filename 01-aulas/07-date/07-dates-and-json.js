var personMary = {
    name: 'Mary',
    birthDate: new Date(1990, 8, 22) // quando criamos data desta forma, 
    // o node considera o horário do sistema operacional e traduz para UTC
};
console.log(JSON.stringify(personMary));

var person = '{ "name": "John", "birthDate": "1990-09-21" }';

var personObj = JSON.parse(person);
personObj.birthDate = new Date(personObj.birthDate); // aqui a data será criada com uma string ISO 8601
                                                    // e por isso o node não vai considerar o horário do 
                                                    // sistema operacional

console.log(personObj);
