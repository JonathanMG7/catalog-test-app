import { httpRequest } from '../../services/HttpService'
import { envVars } from '../../config/env_vars'

export const getPokemonList = async (offset: number, name = '') => {
  const path = `pokemon/${name}`
  const params = {
    offset: offset * envVars.pageSize
  }
  try {
    const response = await httpRequest(path, 'GET', true, params)
    if (!response.code) {
      return response.results || [response]
    } else return []
  } catch {
    return []
  }
}