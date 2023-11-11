import { Feather } from '@expo/vector-icons'
import useStyles from '../hooks/useStyles'
import Button from './Button'
import Group from './Group'
import TextArea from './TextArea'

const ComposeMessage = ({ onChange, value, onSubmit, loading }) => {
  const styles = useStyles(styleConfig)

  return (
    <Group x style={styles.composeMessage}>
      <TextArea containerStyle={{ flex: 1 }} placeholder='Message...' onChange={onChange} value={value} />
      <Button disabled={!value?.trim().length} loading={loading} onPress={onSubmit} style={styles.button} icon={<Feather name='send' />} />
    </Group>
  )
}

const styleConfig = {
  base: {
    composeMessage: {},
    button: {},
  },
}

export default ComposeMessage
