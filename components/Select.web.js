import { AntDesign } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'
import { useRef, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Overlay } from '../contexts/Overlay'
import { styled } from '../libs/wakui'
import TextInput from './TextInput'

const Select = styled('webSelect', ({ style, value, onChange, options, label = 'Select', getLabel: getLabelProp, getValue: getValueProp }) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef()

  const getLabel = option => (getLabelProp && getLabelProp(option)) || (option && option.label) || option
  const getValue = option => (getValueProp && getValueProp(option)) || (option && option.value) || option

  const renderOption = ({ item: option }) => {
    const itemValue = getValue(option)
    const itemLabel = getLabel(option)

    return (
      <Pressable style={style.optionStyle} onPress={onChange.bind(null, itemValue)} key={itemValue}>
        <Text>{itemLabel}</Text>
      </Pressable>
    )
  }

  return (
    <View style={style} ref={containerRef}>
      <TextInput onFocus={setIsOpen.bind(null, true)} value={value} label={label} />
      <Carot />
      <Overlay visible={isOpen} relativeToRef={containerRef} close={setIsOpen.bind(null, false)}>
        <View style={style.menuStyle}>
          <FlashList
            keyExtractor={option => getValue(option)}
            data={options}
            estimatedItemSize={style.optionStyle.height}
            renderItem={renderOption}
          />
        </View>
      </Overlay>
    </View>
  )
})

const Carot = ({ color, fontSize }) => (
  <View pointerEvents='none' style={{ position: 'absolute', right: 15, top: '50%', transform: [{ translateY: '-50%' }] }}>
    <AntDesign color={color} size={fontSize} name='caretdown' />
  </View>
)

export default Select
