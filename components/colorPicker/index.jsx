import React from 'react'
import { StyleSheet, View } from 'react-native'
import ColorPicker, { Panel1, HueSlider, InputWidget } from 'reanimated-color-picker'

export default props => {
  return (
    <View style={styles.card}>
      <ColorPicker
        sliderThickness={10}
        thumbSize={8}
        width
        style={styles.picker}
        value={props.value}
        onComplete={e => props.onChange && props.onChange(e.hex)}
        thumbAnimationDuration={100}
      >
        <Panel1 style={styles.pickerPanel1} />
        <HueSlider />
        <InputWidget />
      </ColorPicker>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    shadowColor: 'black',
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 0.2,
    alignSelf: 'flex-start',
  },
  picker: {
    width: 100,
    height: 100,
    minHeight: 0,
  },
  pickerPanel1: {
    width: 100,
    height: 100,
    minHeight: 0,
  },
})
