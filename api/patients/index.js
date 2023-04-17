import BaseAPI from 'pn-api-base'

class PatientsAPI extends BaseAPI {
  constructor() {
    super('patients')
  }
}

export default new PatientsAPI()
