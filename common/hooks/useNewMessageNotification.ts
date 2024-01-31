import { Message } from '../../../gql/graphql'
import { useNotification } from './useNotification'
import { useSocketEvent } from './useSocketEvent'

id: number;
body: string;
createdAt: Date;
sentBy: MessageSentBy;
adminUserId: string | null;
patientId: string;

export const useNewMessageNotification = () => {
  const { notify } = useNotification()

  useSocketEvent('new message', (data: Message) => {
    notify({
      type: 'INFO',
      title: `${data.} ${data.lastName} sent you a message`,
      body: data.body,
      linkTo: data.linkTo,
      lifeSpan: data.lifeSpan,
    })
  })
}
