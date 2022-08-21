import { httpRequest } from '../../services/HttpService'
import { envVars } from '../../config/env_vars'

export const getPokemonList = async (offset: number) => {
  const path = `pokemon/`
  const params = {
    offset: offset * envVars.pageSize
  }
  const response = await httpRequest(path, 'GET', true, params)
  return response.results
}