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
        <View style={{ flex: 1 }}>
          <Panel1 style={styles.pickerPanel1} />
          <InputWidget inputStyle={styles.inputWidget} formats={['HEX']} inputTitleStyle={{ display: 'none' }} />
        </View>
        <HueSlider sliderThickness={15} style={styles.hueSlider} vertical={true} />
      </ColorPicker>
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: 'rgb(230,230,240)',
    borderColor: 'rgb(200, 200, 220)',
    borderWidth: 1,
    borderRadius: 10,
    width: 150,
    height: 150,
    padding: 5,
  },
  pickerPanel1: {
    flex: 1,
  },
  hueSlider: {
    marginLeft: 5,
  },
  inputWidget: {
    // width: 100,
    fontSize: 10,
    marginTop: 5,
    height: 15,
  },
})
