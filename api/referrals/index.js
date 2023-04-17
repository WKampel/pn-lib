import BaseAPI from 'pn-api-base'

class ReferralsAPI extends BaseAPI {
  constructor() {
    super('referrals')
  }
}

export default new ReferralsAPI()
