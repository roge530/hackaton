function getBerries() {
    return fetch('https://pokeapi.co/api/v2/berry/?offset=0&limit=64')
    .then(response => {
        return response.json();
    })
}

getBerries()
    .then(data => {
        //console.log(JSON.stringify(data, null, 4))
        //console.log(data['results'][0]['name'])
        data['results'].forEach(datum => {
            console.log(datum['name'])
        });
    })

