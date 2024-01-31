import { RealTimeMessageEventData } from '../../../pn-core-lib/types/realTimeEvents/RealTimeMessageEventData'
import { useAppConfig } from '../../core/hooks/useAppConfig'
import { useNotification } from './useNotification'
import { useSocketEvent } from './useSocketEvent'

export const useNewMessageNotification = (onPressNotification: (message: RealTimeMessageEventData) => void) => {
  const { notify } = useNotification()
  const config = useAppConfig()

  useSocketEvent('new message', data => {
    if (config.app === 'OFFICE') {
      if (data.sentBy === 'PATIENT') {
        notify({
          type: 'INFO',
          title: `${data.patientFullName} sent you a message`,
          body: data.body,
          onPress: () => onPressNotification(data),
          lifeSpan: 60 * 1000,
        })
      } else if (data.sentBy === 'SERVER') {
        notify({
          type: 'INFO',
          title: `New message`,
          body: data.body,
          onPress: () => onPressNotification(data),
          lifeSpan: 60 * 1000,
        })
      }
    } else if (config.app === 'PATIENT') {
      if (data.sentBy === 'ADMIN') {
        notify({
          type: 'INFO',
          title: `${data.adminFullName} ${data} sent you a message`,
          body: data.body,
          onPress: () => onPressNotification(data),
          lifeSpan: 60,
        })
      } else if (data.sentBy === 'SERVER') {
        notify({
          type: 'INFO',
          title: `New message`,
          body: data.body,
          onPress: () => onPressNotification(data),
          lifeSpan: 60,
        })
      }
    }
  })
}
