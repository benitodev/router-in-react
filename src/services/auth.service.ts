const baseUrl = 'https://rickandmortyapi.com/api' 
const characterUrl = baseUrl + '/character'
const morty = characterUrl + '/2'

export const getMorty = async() => {
    return fetch(morty).then(res => res.json())
}