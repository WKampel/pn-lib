import { useEffect, useState } from 'react'
import { View } from 'react-native'
import ReanimatedColorPicker, { HueSlider, Panel1 } from 'reanimated-color-picker'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'
import TextInput from './TextInput'

const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

const ColorPicker = ({ value, onChange, label = 'Color' }) => {
  const [inputValue, setInputValue] = useState(value)

  const { interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleInputChange = inputValue => {
    // Regular expression to match HEX color values
    if (hexColorRegex.test(inputValue)) {
      onChange(inputValue)
    }

    setInputValue(inputValue)
  }

  return (
    <View {...interactiveEvents} style={styles.colorPicker}>
      <TextInput size='s' onChange={handleInputChange} value={inputValue} label={label} />

      <ReanimatedColorPicker style={styles.picker} value={value} onComplete={e => onChange(e.hex)} thumbAnimationDuration={0} thumbSize={8}>
        <Panel1 style={styles.panel} />
        <HueSlider sliderThickness={styles.slider?.width} vertical={true} />
      </ReanimatedColorPicker>
    </View>
  )
}

const styleConfig = {
  base: {
    colorPicker: {
      gap: '$spacing-s',
      height: 200,
      width: 200,
      overflow: 'hidden',
    },
    panel: {
      flex: 1,
      height: '100%',
    },
    picker: {
      flex: 1,
      flexDirection: 'row',
      gap: '$spacing-s',
      width: '100%',
    },
    slider: {
      width: '$size-xs',
    },
  },
}

export default ColorPicker
