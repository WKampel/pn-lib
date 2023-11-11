import { AntDesign } from '@expo/vector-icons'
import { cloneElement, useEffect, useRef, useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'
import Overlay from './Overlay'
import TextInput from './TextInput'

const Select = ({
  containerStyle,
  value,
  onChange,
  options = [],
  label = 'Select',
  getLabel = option => option.label,
  getValue = option => option.value,
  getLabelIcon = option => <></>,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef()
  const styles = useStyles(styleConfig)

  // Close when value changes
  useEffect(() => {
    setIsOpen(false)
  }, [value])

  const onKeyPress = e => {
    // Close on tab
    if (e.keyCode === 9) setIsOpen(false)
  }

  const renderOption = ({ item: option }) => {
    const itemValue = getValue(option)
    const itemLabel = getLabel(option)
    const itemLabelIcon = getLabelIcon(option)

    return (
      <Pressable style={styles.option} onPress={onChange?.bind(null, itemValue)} key={itemValue}>
        {itemLabelIcon && cloneElement(itemLabelIcon, { color: styles.optionText.color, size: styles.optionText.fontSize })}
        <Text style={styles.optionText}>{itemLabel}</Text>
      </Pressable>
    )
  }

  const selectedOption = options.find(option => getValue(option) === value)
  const displayValue = selectedOption ? getLabel(selectedOption) : ''

  return (
    <View style={containerStyle} ref={containerRef}>
      <TextInput inputStyle={{ cursor: 'default' }} onKeyPress={onKeyPress} onFocus={setIsOpen.bind(null, true)} value={displayValue} label={label} />
      <View pointerEvents='none' style={styles.carretContainer}>
        <AntDesign color='rgb(200,200,200)' size={10} name='caretdown' />
      </View>
      <Overlay visible={isOpen} relativeToRef={containerRef} close={setIsOpen.bind(null, false)}>
        <View style={styles.menuStyle}>
          <FlatList keyExtractor={option => getValue(option)} data={options} renderItem={renderOption} />
        </View>
      </Overlay>
    </View>
  )
}

const styleConfig = {
  base: {
    menuStyle: {
      backgroundColor: '$color-bg-surface',
      borderRadius: '$radius-xs',
      overflow: 'scroll',
      width: 300,
      maxHeight: 300,
    },
    option: {
      height: '$size-s',
      alignItems: 'center',
      paddingLeft: '$spacing-s',
      flexDirection: 'row',
      gap: '$spacing-s',
    },
    optionText: {
      color: '$color-text-on-surface',
      fontSize: '$font-size-m',
    },
    carretContainer: {
      position: 'absolute',
      right: '$spacing-m',
      top: '50%',
      transform: [{ translateY: '-50%' }],
    },
  },
}

export default Select
