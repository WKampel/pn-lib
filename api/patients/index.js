import BaseAPI from '../base'

class PatientsAPI extends BaseAPI {
  constructor() {
    super('patients')
  }
}

export default new PatientsAPI()
