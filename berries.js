var url = 'https://pokeapi.co/api/v2/berry/?offset=0&limit=64'

function getBerries(urlApi) {
    return fetch(urlApi)
    .then(response => {
        return response.json();
    })
}

function getAllBerriesName() {
    getBerries(url)
        .then(data => {
            data['results'].forEach(datum => {
                console.log(datum['name'])
            });
        })
}

function getBerryDataFromName(berryName) {
    let newUrl = 'https://pokeapi.co/api/v2/berry/' + berryName
    getBerries(newUrl) 
        .then(data => {
            console.log(data)
        })
}

function getAllBerriesFirmnesses() {
    let newUrl = 'https://pokeapi.co/api/v2/berry-firmness'
    getBerries(newUrl)
        .then(data => {
            data['results'].forEach(datum => {
                console.log(datum['name'])
            })
        })
}

function getBerrySortFirmness(firmness) {
    let newUrl = 'https://pokeapi.co/api/v2/berry-firmness/' + firmness
    getBerries(newUrl)
        .then(data => {
            console.log(data)
        })
}
//getBerryDataFromName('cheri')
//getAllBerriesFirmnesses()
//getBerrySortFirmness('soft')

