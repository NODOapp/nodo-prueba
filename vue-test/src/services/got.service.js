import mainService from './main.service'

const pokemonService = {
  listsAllCharacters,
  getACharacter
}

export function listsAllCharacters () {
  return mainService.get('/characters').then((res) => {
    return res.data
  }).catch((error) => {
    console.error(error)
    return { error: error }
  })
}

export function getACharacter (id) {
  return mainService.get(`/characters/byId/${id}`).then((res) => {
    return res.data
  }).catch((error) => {
    console.error(error)
    return { error: error }
  })
}

export default pokemonService
