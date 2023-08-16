import React from 'react'
import { StyleSheet, View } from 'react-native'
import ColorPicker, { HueSlider, InputWidget, Panel1 } from 'reanimated-color-picker'
import { useBranding } from '../contexts/Branding'
import BorderLabel from './BorderLabel'

export default props => {
  const { brandingStyles } = useBranding('textInput', ['centered', 'small'])

  return (
    <View style={styles.container}>
      <ColorPicker
        style={styles.picker}
        value={props.state?.val}
        onComplete={e => props.state?.set && props.state.set(e.hex)}
        thumbAnimationDuration={100}
        sliderThickness={10}
        thumbSize={8}
      >
        <View>
          <View>
            <BorderLabel label={props.label} backgroundColor={brandingStyles.input.backgroundColor} />
            <InputWidget
              inputStyle={[brandingStyles.input, styles.inputWidget, { borderColor: props.state?.val }]}
              formats={['HEX']}
              inputTitleStyle={{ display: 'none' }}
            />
          </View>
          <Panel1 style={styles.pickerPanel1} />
        </View>
        <HueSlider sliderThickness={20} style={styles.hueSlider} vertical={true} />
      </ColorPicker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    alignSelf: 'flex-start',
  },
  picker: {
    flexDirection: 'row',
  },
  inputWidget: {
    marginBottom: 3,
    height: 20,
    width: 127,
  },
  pickerPanel1: {
    width: 127,
    height: 127,
  },
  hueSlider: {
    marginLeft: 3,
  },
})
