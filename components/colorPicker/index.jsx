import React from 'react'
import { StyleSheet, View } from 'react-native'
import ColorPicker, { Panel1, HueSlider, InputWidget } from 'reanimated-color-picker'

export default props => {
  return (
    <View style={styles.card}>
      <ColorPicker
        sliderThickness={10}
        thumbSize={8}
        style={styles.picker}
        value={props.state?.val}
        onComplete={e => props.state?.set && props.state.set(e.hex)}
        thumbAnimationDuration={100}
      >
        <View>
          <Panel1 style={styles.pickerPanel1} />
          <InputWidget inputStyle={styles.inputWidget} formats={['HEX']} inputTitleStyle={{ display: 'none' }} />
        </View>
        <HueSlider style={styles.hueSlider} vertical={true} />
      </ColorPicker>
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'rgb(240,240,240)',
    padding: 7,
    borderColor: 'rgb(220, 220, 220)',
    borderWidth: 2,
    borderRadius: 10,
  },
  pickerPanel1: {
    width: 100,
    height: 100,
  },
  hueSlider: {
    marginLeft: 5,
  },
  inputWidget: {
    width: 100,
    fontSize: 12,
    marginTop: 5,
  },
})
