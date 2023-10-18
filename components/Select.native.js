import { Picker } from '@react-native-picker/picker'
import { Text, View } from 'react-native'

export default props => {
  const getLabel = option => (props.getLabel && props.getLabel(option)) || (option && option.label) || option
  const getValue = option => (props.getValue && props.getValue(option)) || (option && option.value) || option

  const onChange = itemValue => {
    if (props.onChange) props.onChange(itemValue)
  }

  return (
    <View style={{ backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderColor: 'rgb(220,220,220)' }}>
      <Text style={{ marginLeft: 10, marginTop: 10 }}>{props.label}</Text>
      <Picker selectedValue={props.value} onValueChange={onChange}>
        <Picker.Item label='Select' />
        {props.options?.map(option => (
          <Picker.Item key={getValue(option)} label={getLabel(option)} value={getValue(option)} />
        ))}
      </Picker>
    </View>
  )
}
