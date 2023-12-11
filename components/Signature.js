import { TextInput } from 'react-native'
import useStyles from '../hooks/useStyles'

const Signature = ({}) => {
  const styles = useStyles(styleConfig)

  return <TextInput placeholderTextColor='gray' style={styles} placeholder='Add your signature' />
}

const styleConfig = {
  base: {
    fontSize: '$font-size-xl',
    backgroundColor: 'rgb(240,240,240)',
    padding: '$spacing-m',
  },
}

export default Signature
