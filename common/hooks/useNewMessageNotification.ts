import { Message } from '../../../gql/graphql'
import { useNotification } from './useNotification'
import { useSocketEvent } from './useSocketEvent'


export const useNewMessageNotification = () => {
  const { notify } = useNotification()

  useSocketEvent('new message', (data) => {
    notify({
      type: 'INFO',
      title: `${data.} ${data} sent you a message`,
      body: data.body,
      linkTo: '',
      lifeSpan: data.lifeSpan,
    })
  })
}
