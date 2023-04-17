import axios from 'axios'
import { Platform } from 'react-native'

class BaseAPI {
  constructor(route) {
    this.route = route
  }

  static serverUrl() {
    return Platform.OS === 'web' ? 'http://137.184.135.124:3050' : 'http://192.168.1.36:3050'
  }

  baseURL() {
    return BaseAPI.serverUrl() + '/backend/' + this.route + '/'
  }

  createOne(data) {
    return this.post('', data)
  }

  createMany(data) {
    return this.post('', data)
  }

  getMany(params = {}) {
    return this.get('', params)
  }

  getById(id, params = {}) {
    return this.get(id, params)
  }

  updateById(id, data) {
    return this.put(id, data)
  }

  deleteById(id) {
    return this.delete(id)
  }

  //Rest functions
  get(url = '', params = {}) {
    return axios.get(
      this.baseURL() +
        url +
        '?' +
        Object.keys(params)
          .map(key => {
            return key + (params[key] ? '=' + params[key] : '')
          })
          .join('&')
    )
  }
  post(url = '', data) {
    return axios.post(this.baseURL() + url, data, {
      ...(data instanceof FormData && {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    })
  }
  put(url = '', data) {
    return axios.put(this.baseURL() + url, data)
  }
  delete(url = '') {
    return axios.delete(this.baseURL() + url)
  }
}

export default BaseAPI
