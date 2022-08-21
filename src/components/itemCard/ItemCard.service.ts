import { httpRequest } from '../../services/HttpService'

export const getPokemonInfo = async (name: string) => {
  const path = `pokemon/${name}`
  const response = await httpRequest(path, 'GET', false)
  return {
    types: response['types'],
    name: response['name'],
    id: response['id'],
    image: response['sprites']['front_default'],
    height: response['height'],
    moves: response['moves'],
    weight: response['weight']
  }

}