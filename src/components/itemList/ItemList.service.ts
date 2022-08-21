import { httpRequest } from '../../services/HttpService'
import { pageSize } from '../../config/env_vars.json'

export const getPokemonList = async (offset: number) => {
  const path = `pokemon/`
  const params = {
    offset: offset * pageSize
  }
  const response = await httpRequest(path, 'GET', true, params)
  return response.results
}