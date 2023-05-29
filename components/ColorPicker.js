import React from 'react'
import { StyleSheet, View } from 'react-native'
import ColorPicker, { InputWidget, Swatches } from 'reanimated-color-picker'
import { useBranding } from '../contexts/Branding'

const colors = [
  '#69b4f5',
  '#f56969',
  '#b569f5',
  '#696bf5',
  '#6995f5',
  '#f569df',
  '#f59c69',
  '#54c432',
  '#32c4b8',
  '#c43232',
  '#32c4ad',
  '#c4b032',
  '#3c33c4',
  '#8f8f8f',
  '#000000',
  '#a783bb',
  '#838dbb',
  '#74a7a5',
  '#9fa774',
  '#a79074',
]

export default props => {
  const branding = useBranding()

  if (!props.state.val) {
    props.state.set('#69b4f5')
    return
  }

  return (
    <View style={[branding.input.style, styles.input]}>
      <ColorPicker
        style={styles.picker}
        value={props.state?.val}
        onComplete={e => props.state?.set && props.state.set(e.hex)}
        thumbAnimationDuration={100}
      >
        <Swatches style={styles.swatches} swatchStyle={styles.swatch} colors={colors} />
        <InputWidget inputStyle={styles.inputWidget} formats={['HEX']} inputTitleStyle={{ display: 'none' }} />
      </ColorPicker>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 'unset',
    paddingLeft: 'unset',
  },
  picker: {
    flex: 1,
    justifyContent: 'space-between',
  },
  swatches: {
    justifyContent: 'flex-start',
  },
  swatch: {
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 0,
    width: '20%',
    height: 'auto',
    aspectRatio: 1,
  },
  inputWidget: {
    fontSize: 10,
    marginTop: 5,
    flex: 1,
  },
})
