import { Picker } from '@react-native-picker/picker'
import { useBranding } from '../contexts/Branding'

export default props => {
  const branding = useBranding()
  const onChange = itemValue => props.state.set(itemValue)

  const getLabel = option => (props.getLabel && props.getLabel(option)) || (option && option.label) || option
  const getValue = option => (props.getValue && props.getValue(option)) || (option && option.value) || option

  return (
    <Picker style={branding.input.style} selectedValue={props.state.val} onValueChange={onChange}>
      <Picker.Item key='_SELECT ONE_' label='Select' value={null} disabled />
      {props.options?.map(option => (
        <Picker.Item key={getValue(option)} label={getLabel(option)} value={getValue(option)} />
      ))}
    </Picker>
  )
}
