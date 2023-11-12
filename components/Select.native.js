import { Picker } from '@react-native-picker/picker'
import { Text, View } from 'react-native'

const Select = ({ label, options, value, onChange, getLabel: getLabelProp, getValue: getValueProp }) => {
  const getLabel = option => getLabelProp?.(option) || option?.label || option
  const getValue = option => getValueProp?.(option) || option?.value || option

  const handleChange = itemValue => {
    onChange?.(itemValue)
  }

  return (
    <View style={{ backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderColor: 'rgb(220,220,220)' }}>
      <Text style={{ marginLeft: 10, marginTop: 10 }}>{label}</Text>
      <Picker selectedValue={value} onValueChange={handleChange}>
        <Picker.Item label='Select' />
        {options?.map(option => (
          <Picker.Item key={getValue(option)} label={getLabel(option)} value={getValue(option)} />
        ))}
      </Picker>
    </View>
  )
}

export default Select
