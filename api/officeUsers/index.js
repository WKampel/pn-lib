import BaseAPI from 'pn-api-base'

class UsersAPI extends BaseAPI {
  constructor() {
    super('officeUsers')
  }
  /* Custom routes */
  getMe() {
    return this.get('me')
  }
  signIn(data) {
    return this.post('signIn', data)
  }
  signUp(data) {
    return this.post('signUp', data)
  }
}

export default new UsersAPI()
