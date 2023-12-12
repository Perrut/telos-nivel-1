async function getDogBreeds() {
    try {
        var response = await fetch("https://dog.ceo/api/breeds/list/all");
        var responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log('Falha ao obter os dados da API, ', error);
    }
}

getDogBreeds().then(breeds => {
    console.log(breeds);
});
