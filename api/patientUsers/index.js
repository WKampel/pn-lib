import BaseAPI from 'pn-api-base'

class UsersAPI extends BaseAPI {
  constructor() {
    super('patientUsers')
  }
  /* Custom routes */
  getMe() {
    return this.get('me')
  }
  getMyFamily() {
    return this.get('myFamily')
  }
  signIn(data) {
    return this.post('signIn', data)
  }
  signUp(data) {
    return this.post('signUp', data)
  }
  joinPractice(data) {
    return this.get('joinPractice', data)
  }
}

export default new UsersAPI()
