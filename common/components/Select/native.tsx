import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SelectProps } from '.'

const Select = <TOption extends any, TValue extends string>({ value, onChange, options, getLabel, getValue, label = 'Select' }: SelectProps<TOption, TValue>) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = options.find(option => getValue(option) === value)
  let selectedLabel = ''

  if (selectedOption) {
    selectedLabel = getLabel(selectedOption)
  }

  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        alignSelf: 'flex-start',
        gap: 10,
      }}
    >
      <Text
        style={{
          color: 'black',
        }}
      >
        {label}
      </Text>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgb(230,230,230)',
            alignSelf: 'flex-start',
            paddingVertical: 12,
            paddingHorizontal: 14,
            borderRadius: 8,
          }}
          onPress={() => setIsOpen(true)}
        >
          <Text
            style={{
              color: 'black',
            }}
          >
            {selectedLabel || 'Select'}
          </Text>
        </TouchableOpacity>

        <Modal onRequestClose={() => setIsOpen(false)} visible={isOpen} transparent={true} animationType='fade'>
          <Pressable
            pointerEvents='box-only'
            style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.25)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            onPress={() => setIsOpen(false)}
          />

          <View style={{ marginTop: 'auto', padding: 10, paddingBottom: insets.bottom }}>
            <View style={{ backgroundColor: 'white', borderRadius: 15 }}>
              <Picker selectedValue={value} onValueChange={(itemValue, itemIndex) => onChange(itemValue)}>
                {options.map(option => {
                  const label = getLabel(option)
                  const value = getValue(option)
                  return <Picker.Item key={value} label={label} value={value} />
                })}
              </Picker>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default Select
