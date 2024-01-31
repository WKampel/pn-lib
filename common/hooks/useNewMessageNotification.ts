import { Message } from '../../../gql/graphql'
import { RealTimeMessageEventData } from '../../../pn-core-lib/types/socketEvents/IRealTimeMessageEventData'
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

  useSocketEvent('new message', (data: RealTimeMessageEventData) => {
    notify({
      type: 'INFO',
      title: `${data.} ${data} sent you a message`,
      body: data.body,
      linkTo: data.linkTo,
      lifeSpan: data.lifeSpan,
    })
  })
}
