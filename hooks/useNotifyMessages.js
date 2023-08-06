import { useSocketEvent } from '../contexts/Socket'

const useNotifyMessages = () => {
  useSocketEvent('new message', data => {
    const array = ('' + window.location).split('/')

    // If on message screen, don't notify user of messages
    if (array?.length > 3 && array[array.length - 2] === 'messages') return

    notify({
      type: 'new message',
      title: 'New Message',
      body: data.body,
      linkTo: { name: 'MessageGroup', params: { screen: 'Message', params: { id: data.patientUserId } } },
    })
  })
}

export default useNotifyMessages
