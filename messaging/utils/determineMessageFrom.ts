import { MessageSentBy } from '../../../gql/graphql'
import { AppType } from '../../core/types/AppType'
import { MessageFrom } from '../types/MessageFrom'

export const determineMessageFrom = (sentBy: MessageSentBy, app: AppType): MessageFrom => {
  if (sentBy === 'ADMIN') {
    return app === 'OFFICE' ? 'ME' : 'PENPAL'
  }
  if (sentBy === 'PATIENT') {
    return app === 'OFFICE' ? 'PENPAL' : 'ME'
  } else {
    return 'SERVER'
  }
}
