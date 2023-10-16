import { View } from 'react-native'
import { styled } from '../libs/wakui'
import CheckBox from './CheckBox'
import Label from './Label'

const Radio = styled(
  'radio',
  ({
    style,
    label,
    value,
    onChange,
    options = [],
    getValue = option => (option ? option.value : ''),
    getLabel = option => (option ? option.label : ''),
  } = {}) => {
    return (
      <View style={style}>
        {label && <Label>{label}</Label>}
        {options.map((option, i) => {
          const selected = value === getValue(option)
          const label = getLabel(option, i)
          return <CheckBox key={i} $round value={selected} onChange={onChange?.bind(null, getValue(option))} label={label} />
        })}
      </View>
    )
  }
)

export default Radio
