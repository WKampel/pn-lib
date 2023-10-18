import { useRoute } from '@react-navigation/native'
import { useNotification } from '../contexts/Notification'
import useScreenBlur from '../hooks/useScreenBlur'
import useScreenFocus from '../hooks/useScreenFocus'
import { styled } from '../libs/wakui'
import Group from './Group'

const Screen = styled('screen', ({ style, children, variants, infoNotify }) => {
  const { notify, clearNotification } = useNotification()
  const route = useRoute()

  useScreenFocus(() => {
    if (infoNotify) {
      notify({
        title: infoNotify.title,
        body: infoNotify.body,
        id: route.name,
      })
    }
  })

  useScreenBlur(() => {
    if (infoNotify) {
      clearNotification(route.name)
    }
  })

  return (
    <Group style={style} {...variants}>
      {children}
    </Group>
  )
})

export default Screen
