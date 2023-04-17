import BaseAPI from '../base'

class AppointmentsAPI extends BaseAPI {
  constructor() {
    super('appointments')
  }
}

export default new AppointmentsAPI()
