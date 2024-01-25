import ReactNativeSlider from '@react-native-community/slider'
import { useEffect, useState } from 'react'

type SliderProps = {
  style?: any
  min?: number
  max?: number
  onChange?: (value: number) => void
  value?: number
}

export const Slider = (props: SliderProps) => {
  const { style, min = 0, max = 1, onChange, value } = props
  // There is a bug in react-native-slider where the slider won't move because the thumb is offset from the mouse.
  // Resizing the web browser causes it to work. This is a hack to fix it by delaying rendering.
  // https://github.com/callstack/react-native-slider/issues/470

  const [render, setRender] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRender(true)
    }, 250)
  })

  if (!render) return

  return (
    <ReactNativeSlider
      style={style}
      minimumValue={min}
      maximumValue={max}
      onValueChange={onChange}
      value={value}
      minimumTrackTintColor='gray'
      maximumTrackTintColor='#000000'
    />
  )
}
