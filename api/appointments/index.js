import BaseAPI from 'pn-api-base'

class AppointmentsAPI extends BaseAPI {
  constructor() {
    super('appointments')
  }
}

export default new AppointmentsAPI()
