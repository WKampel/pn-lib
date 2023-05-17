import { Picker } from '@react-native-picker/picker'
import { Pressable, Text } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useModal from '../hooks/useModal'

export default props => {
  const branding = useBranding()

  const getLabel = option => (props.getLabel && props.getLabel(option)) || (option && option.label) || option
  const getValue = option => (props.getValue && props.getValue(option)) || (option && option.value) || option

  const onChange = itemValue => {
    props.state.set(itemValue)
  }
  const selectedOption = props.options?.find(option => getValue(option) === props.state.val)

  const modal = useModal(
    () => (
      <Picker selectedValue={props.state.val} onValueChange={onChange}>
        <Picker.Item label='Select' />
        {props.options?.map(option => (
          <Picker.Item key={getValue(option)} label={getLabel(option)} value={getValue(option)} />
        ))}
      </Picker>
    ),
    { marginTop: 'auto', padding: 0 }
  )

  return (
    <>
      <Pressable style={[branding.input.style, { justifyContent: 'center' }]} onPress={modal.open}>
        <Text>{getLabel(selectedOption)}</Text>
      </Pressable>

      {modal.render}
    </>
  )
}
