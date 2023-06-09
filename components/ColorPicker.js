import React from 'react'
import { StyleSheet, View } from 'react-native'
import ColorPicker, { InputWidget, Swatches } from 'reanimated-color-picker'
import { useBranding } from '../contexts/Branding'

const colors = [
  'rgb(169,207,84)',
  'rgb(121,189,143)',
  'rgb(145,196,108)',
  'rgb(103,204,142)',
  'rgb(168,197,69)',
  'rgb(149,171,99)',
  'rgb(139,195,74)',
  'rgb(102,187,106)',
  'rgb(69,191,85)',
  'rgb(104,159,56)',
  'rgb(70,137,102)',
  'rgb(67,160,71)',
  'rgb(88,143,39)',
  'rgb(38,166,154)',
  'rgb(40,153,118)',
  'rgb(0,163,136)',
  'rgb(40,125,125)',
  'rgb(31,138,112)',
  'rgb(126, 206, 253)',
  'rgb(122, 186, 242)',
  'rgb(89, 216, 230)',
  'rgb(121, 154, 224)',
  'rgb(52, 152, 219)',
  'rgb(27, 118, 255)',
  'rgb(0, 171, 216)',
  'rgb(4, 191, 191)',
  'rgb(41, 128, 185)',
  'rgb(2, 136, 209)',
  'rgb(54, 95, 183)',
  'rgb(0, 146, 178)',
  'rgb(53, 71, 140)',
  'rgb(4, 102, 140)',
  'rgb(13, 71, 161)',
  'rgb(231, 76, 60)',
  'rgb(244, 67, 54)',
  'rgb(255, 29, 35)',
  'rgb(213, 0, 0)',
  'rgb(252, 125, 73)',
  'rgb(255, 130, 46)',
  'rgb(245, 115, 54)',
  'rgb(250, 150, 0)',
  'rgb(255, 102, 0)',
  'rgb(250, 91, 15)',
  'rgb(242, 96, 12)',
  'rgb(222, 109, 0)',
  'rgb(210, 54, 0)',
  'rgb(151, 104, 209)',
  'rgb(171, 71, 188)',
  'rgb(146, 80, 188)',
  'rgb(139, 99, 166)',
  'rgb(115, 45, 217)',
  'rgb(123, 82, 171)',
  'rgb(156, 39, 176)',
  'rgb(103, 58, 183)',
  'rgb(107, 20, 166)',
  'rgb(85, 50, 133)',
  'rgb(242, 193, 46)',
  'rgb(255, 190, 0)',
  'rgb(232, 202, 0)',
  'rgb(140, 140, 140)',
  'rgb(96, 125, 139)',
  'rgb(84, 110, 122)',
  'rgb(89, 89, 89)',
  'rgb(55, 65, 64)',
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
    width: 200,
  },
  picker: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
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
    width: '12.50%',
    height: 'auto',
    aspectRatio: 1,
  },
  inputWidget: {
    fontSize: 10,
    marginTop: 5,
    flex: 1,
  },
})
