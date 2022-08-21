import axios from 'axios'
import { apiUrl, pageSize } from '../config/env_vars.json'

export const httpRequest = async (path: string, method: string, paginate = false,params?: any) => {
  let queryParams = params ? Object.keys(params).map(key => key + '=' + params[key]).join('&') : ''

  if (paginate) {
    queryParams += `&limit=${pageSize}`
  }


  switch (method) {
    case 'GET':
      return await axios.get(`${apiUrl}/${path}?${queryParams}`)
        .then(res => {
          return res.data
        })
        .catch(error => error)
    default:
      console.log(`Unhandled method ${method}`)
      break
  }
}