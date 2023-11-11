import { Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'
import CheckBox from './CheckBox'

const Radio = ({
  label,
  value: valueProp,
  onChange,
  options = [],
  getValue = option => (option ? option.value : ''),
  getLabel = option => (option ? option.label : ''),
} = {}) => {
  const styles = useStyles(styleConfig)
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {options.map((option, i) => {
        const selected = valueProp === getValue(option)
        const label = getLabel(option, i)
        const value = getValue(option)
        return <CheckBox key={i} round value={selected} onChange={() => onChange(value)} label={label} />
      })}
    </View>
  )
}

const styleConfig = {
  base: {
    container: {
      gap: '$spacing-s',
    },
  },
}

export default Radio
