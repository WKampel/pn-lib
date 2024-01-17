import { AntDesign } from '@expo/vector-icons'
import React, { cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import { FlatList, NativeSyntheticEvent, Pressable, Text, TextInputKeyPressEventData, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { Overlay } from './Overlay'
import { TextInput } from './TextInput'
import { BaseIconProps } from './icons/BaseIcon'

export type SelectProps<TOption> = {
  value: any
  onChange: (value: string) => void
  options: TOption[]
  label: string
  getLabel: (option: TOption) => string
  getValue: (option: TOption) => string
  getLabelIcon?: (option: any) => React.ReactElement<BaseIconProps>
}

export const Select = <TOption extends any>({ value, onChange, options, label = 'Select', getLabel, getValue, getLabelIcon }: SelectProps<TOption>) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<View | null>(null)
  const tokens = useTheme()

  // Close when value changes
  useEffect(() => {
    setIsOpen(false)
  }, [value])

  const onKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    // Close on tab
    if (e.nativeEvent.key === 'Tab') setIsOpen(false)
  }

  const renderOption = ({ item }: { item: TOption }) => {
    const itemValue = getValue(item)
    const itemLabel = getLabel(item)
    const itemLabelIcon = getLabelIcon?.(item)

    return (
      <Pressable
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          height: tokens.size_m,
          paddingLeft: tokens.spacing_s,
          gap: tokens.spacing_s,
        }}
        onPress={onChange?.bind(null, itemValue)}
        key={itemValue}
      >
        {isValidElement(itemLabelIcon) ? cloneElement(itemLabelIcon, { color: tokens.color_text_on_surface, size: tokens.font_size_m }) : null}
        <Text
          style={{
            color: tokens.color_text_on_surface,
            fontSize: tokens.font_size_m,
          }}
        >
          {itemLabel}
        </Text>
      </Pressable>
    )
  }

  const selectedOption = options.find(option => getValue(option) === value)
  const displayValue = selectedOption ? getLabel(selectedOption) : ''

  return (
    <View ref={containerRef}>
      <TextInput onChange={() => {}} onKeyPress={onKeyPress} onFocus={() => setIsOpen(true)} value={displayValue} label={label} />
      <View
        pointerEvents='none'
        //@ts-ignore
        style={{
          position: 'absolute',
          right: tokens.spacing_m,
          top: '50%',
          transform: [{ translateY: '-50%' }],
        }}
      >
        <AntDesign color='rgb(200,200,200)' size={10} name='caretdown' />
      </View>
      <Overlay visible={isOpen} relativeToRef={containerRef} close={setIsOpen.bind(null, false)}>
        <View
          style={{
            backgroundColor: tokens.color_bg_surface,
            borderRadius: tokens.radius_xs,
            overflow: 'scroll',
            width: 300,
            maxHeight: 300,
          }}
        >
          <FlatList keyExtractor={option => getValue(option)} data={options} renderItem={renderOption} />
        </View>
      </Overlay>
    </View>
  )
}
