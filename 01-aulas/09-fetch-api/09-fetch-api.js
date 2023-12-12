/**
 * Exemplo 01 - Consumindo dados da [Dog API](https://dog.ceo/dog-api/)
 */
function getDogBreeds() {
    var breeds = null;
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => {
            response.json().then(responseData => {
                breeds = responseData;
                console.log(breeds);
            }).catch(() => {
                console.log('Falha ao obter o json da resposta da requisição.');
            });
        })
        .catch(() => {
            console.log('Falha ao obter dados da API, tente novamente.');
        });
}

// getDogBreeds();

/**
 * Exemplo 02 - Consumindo dados da [Cat API](https://alexwohlbruck.github.io/cat-facts/docs/)
 */
function getCatFacts() {
    var facts = null;
    fetch("https://cat-fact.herokuapp.com/facts")
        .then(response => {
            response.json().then(responseData => {
                facts = responseData;
                console.log(facts);
            }).catch(() => {
                console.log('Falha ao obter o JSON da resposta da requisição.');
            });
        })
        .catch(() => console.log('Falha ao executar a requisição, tente novamente.'));
}

getCatFacts();