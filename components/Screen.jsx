import { styled } from '../libs/wakui'
import Group from './Group'

const Screen = styled('screen', ({ style, children, variants }) => {
  return (
    <Group style={style} {...variants}>
      {children}
    </Group>
  )
})

export default Screen
