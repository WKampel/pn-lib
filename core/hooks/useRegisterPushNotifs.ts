import { useEffect } from 'react'
import { UpdatePushTokenMutation, UpdatePushTokenMutationVariables } from '../../../gql/graphql'
import { UpdatePushToken } from '../../../mutations/UpdatePushToken'
import { useMutation } from '../../common/hooks/useMutation'
import { requestPushNotifToken } from '../utils/registerForPushNotifs'

export const useRegisterPushNotifs = () => {
  const updatePushToken = useMutation<UpdatePushTokenMutation, UpdatePushTokenMutationVariables>(UpdatePushToken, {
    variables: {
      pushToken: '',
    },
  })

  useEffect(() => {
    ;(async () => {
      const token = await requestPushNotifToken()

      if (token) {
        await updatePushToken.exec({
          variables: {
            pushToken: token,
          },
        })
      }
    })()
  }, [])
}
