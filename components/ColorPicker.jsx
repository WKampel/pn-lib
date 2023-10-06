import { useEffect, useState } from 'react'
import { View } from 'react-native'
import ReanimatedColorPicker, { HueSlider, Panel1 } from 'reanimated-color-picker'
import { styled } from '../libs/wakui'
import TextInput from './TextInput'

const ColorPicker = styled('colorPicker', ({ style, value, onChange, onMouseEnter, onMouseLeave, label }) => {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleInputChange = inputValue => {
    // Regular expression to match HEX color values
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if (hexColorRegex.test(inputValue)) {
      onChange(inputValue)
    }

    setInputValue(inputValue)
  }

  return (
    <View onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={style}>
      <TextInput onChange={handleInputChange} value={inputValue} $xs label={label || 'Color'} />

      <ReanimatedColorPicker style={style.pickerStyle} value={value} onComplete={e => onChange(e.hex)} thumbAnimationDuration={100} thumbSize={8}>
        <Panel1 style={style.panelStyle} />
        <HueSlider sliderThickness={style.sliderStyle.width} vertical={true} />
      </ReanimatedColorPicker>
    </View>
  )
})

export default ColorPicker
