import { useEffect, useState } from 'react'
import { View } from 'react-native'
import ReanimatedColorPicker, { HueSlider, Panel1 } from 'reanimated-color-picker'
import { useTheme } from '../hooks/useTheme'
import { TextInput } from './TextInput'

const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

export const ColorPicker = ({ value, onChange, label = 'Color' }: { value: string; onChange: (value: string) => void; label: string }) => {
  const [inputValue, setInputValue] = useState(value)
  const tokens = useTheme()

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleInputChange = (inputValue: string) => {
    // Regular expression to match HEX color values
    if (hexColorRegex.test(inputValue)) {
      onChange(inputValue)
    }

    setInputValue(inputValue)
  }

  return (
    <View
      style={{
        gap: tokens.spacing_s,
        height: 200,
        width: 200,
        overflow: 'hidden',
      }}
    >
      <TextInput size='s' onChange={handleInputChange} value={inputValue} label={label} />

      <ReanimatedColorPicker
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: tokens.spacing_s,
          width: '100%',
        }}
        value={value}
        onComplete={e => onChange(e.hex)}
        thumbAnimationDuration={0}
        thumbSize={8}
      >
        <Panel1
          style={{
            flex: 1,
            height: '100%',
          }}
        />
        <HueSlider sliderThickness={tokens.size_xs} vertical={true} />
      </ReanimatedColorPicker>
    </View>
  )
}
