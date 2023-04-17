import BaseAPI from '../base'

class MessagesAPI extends BaseAPI {
  constructor() {
    super('messages')
  }
}

export default new MessagesAPI()
