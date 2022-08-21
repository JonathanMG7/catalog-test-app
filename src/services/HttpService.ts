import axios from 'axios'
import { envVars } from '../config/env_vars'

export const httpRequest = async (path: string, method: string, paginate = false, params?: any) => {
  let queryParams = params ? Object.keys(params).map(key => key + '=' + params[key]).join('&') : ''

  if (paginate) {
    queryParams += `&limit=${envVars.pageSize}`
  }


  switch (method) {
    case 'GET':
      return await axios.get(`${envVars.apiUrl}/${path}?${queryParams}`)
        .then(res => {
          return res.data
        })
        .catch(error => error)
    default:
      console.log(`Unhandled method ${method}`)
      break
  }
}