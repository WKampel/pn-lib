import { TextInput } from 'react-native'
import useStyles from '../hooks/useStyles'

const Signature = ({ onChange, value }) => {
  const styles = useStyles(styleConfig)

  return <TextInput onChangeText={onChange} value={value} placeholderTextColor='gray' style={styles} placeholder='Add your signature*' />
}

const styleConfig = {
  base: {
    fontSize: '$font-size-xl',
    backgroundColor: 'rgb(240,240,240)',
    padding: '$spacing-m',
    fontFamily: 'Allura-Regular',
  },
}

export default Signature
