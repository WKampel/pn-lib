import { View } from 'react-native'
import ReanimatedColorPicker, { HueSlider, Panel1 } from 'reanimated-color-picker'
import { styled } from '../libs/wakui'
import TextInput from './TextInput'

const ColorPicker = styled(
  ({ isFocused, isHovered }) => ({
    style: {
      width: 150,
      height: 150,
      gap: 5,
    },
    defaultVariants: {},
    pickerStyle: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      gap: 5,
    },
    panelStyle: {
      flex: 1,
      height: '100%',
    },
    sliderStyle: {
      width: 10,
    },
    variants: {
      size: {
        s: {},
        m: {},
        l: {},
      },
      flex: {
        other: ({ value }) => ({
          flex: value,
        }),
      },
    },
  }),
  ({ style, pickerStyle, panelStyle, sliderStyle, value, onChange, onMouseEnter, onMouseLeave, label }) => {
    return (
      <View onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={style}>
        <TextInput onChange={onChange} value={value} size='xs' label={label || 'Color'} />

        <ReanimatedColorPicker style={pickerStyle} value={value} onComplete={e => onChange(e.hex)} thumbAnimationDuration={100} thumbSize={8}>
          <Panel1 style={panelStyle} />
          <HueSlider sliderThickness={sliderStyle.width} style={sliderStyle} vertical={true} />
        </ReanimatedColorPicker>
      </View>
    )
  }
)

export default ColorPicker
