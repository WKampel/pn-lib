import BaseAPI from 'pn-api-base'

class MessagesAPI extends BaseAPI {
  constructor() {
    super('messages')
  }
}

export default new MessagesAPI()
