import React from 'react'
import { StyleSheet, View } from 'react-native'
import ColorPicker, { InputWidget, Swatches } from 'reanimated-color-picker'
import { useBranding } from '../contexts/Branding'
import BorderLabel from './BorderLabel'

// const colors = [
//   'rgb(169,207,84)',
//   'rgb(121,189,143)',
//   'rgb(145,196,108)',
//   'rgb(103,204,142)',
//   'rgb(168,197,69)',
//   'rgb(149,171,99)',
//   'rgb(139,195,74)',
//   'rgb(102,187,106)',
//   'rgb(69,191,85)',
//   'rgb(104,159,56)',
//   'rgb(70,137,102)',
//   'rgb(67,160,71)',
//   'rgb(88,143,39)',
//   'rgb(38,166,154)',
//   'rgb(40,153,118)',
//   'rgb(0,163,136)',
//   'rgb(40,125,125)',
//   'rgb(31,138,112)',
//   'rgb(126, 206, 253)',
//   'rgb(122, 186, 242)',
//   'rgb(89, 216, 230)',
//   'rgb(121, 154, 224)',
//   'rgb(52, 152, 219)',
//   'rgb(27, 118, 255)',
//   'rgb(0, 171, 216)',
//   'rgb(4, 191, 191)',
//   'rgb(41, 128, 185)',
//   'rgb(2, 136, 209)',
//   'rgb(54, 95, 183)',
//   'rgb(0, 146, 178)',
//   'rgb(53, 71, 140)',
//   'rgb(4, 102, 140)',
//   'rgb(13, 71, 161)',
//   'rgb(231, 76, 60)',
//   'rgb(244, 67, 54)',
//   'rgb(255, 29, 35)',
//   'rgb(213, 0, 0)',
//   'rgb(252, 125, 73)',
//   'rgb(255, 130, 46)',
//   'rgb(245, 115, 54)',
//   'rgb(250, 150, 0)',
//   'rgb(255, 102, 0)',
//   'rgb(250, 91, 15)',
//   'rgb(242, 96, 12)',
//   'rgb(222, 109, 0)',
//   'rgb(210, 54, 0)',
//   'rgb(151, 104, 209)',
//   'rgb(171, 71, 188)',
//   'rgb(146, 80, 188)',
//   'rgb(139, 99, 166)',
//   'rgb(115, 45, 217)',
//   'rgb(123, 82, 171)',
//   'rgb(156, 39, 176)',
//   'rgb(103, 58, 183)',
//   'rgb(107, 20, 166)',
//   'rgb(85, 50, 133)',
//   'rgb(242, 193, 46)',
//   'rgb(255, 190, 0)',
//   'rgb(232, 202, 0)',
//   'rgb(140, 140, 140)',
//   'rgb(96, 125, 139)',
//   'rgb(84, 110, 122)',
//   'rgb(89, 89, 89)',
//   'rgb(55, 65, 64)',
// ]

const colors = [
  '#ff4747',
  '#ff5555',
  '#ff7777',
  '#ff8e8e',
  '#ff9696',
  '#ffa949',
  '#ffb239',
  '#ffb547',
  '#ffb655',
  '#ffbf77',
  '#ffc98e',
  '#ffce6d',
  '#ffd454',
  '#ffdb39',
  '#ffeb47',
  '#ffec55',
  '#ffef77',
  '#fff38e',
  '#fff96d',
  '#fff954',
  '#fffc39',
  '#43a047',
  '#45bf55',
  '#67cc8e',
  '#8bc34a',
  '#96ca2d',
  '#a9cf54',
  '#bedb39',
  '#393dff',
  '#4753ff',
  '#555fff',
  '#7780ff',
  '#8e94ff',
  '#6d7cff',
  '#545bff',
  '#6d39ff',
  '#7743ff',
  '#7a54ff',
  '#9455ff',
  '#ae77ff',
  '#b88eff',
  '#7c6dff',
  '#000000',
  '#1A1A1A',
  '#333333',
  '#4D4D4D',
  '#666666',
  '#808080',
  '#999999',
]

export default props => {
  const { brandingStyles } = useBranding('textInput', ['centered', 'small'])

  return (
    <View style={styles.container}>
      <ColorPicker
        style={styles.picker}
        value={props.state?.val}
        onComplete={e => props.state?.set && props.state.set(e.hex)}
        thumbAnimationDuration={100}
      >
        <View>
          <BorderLabel label={props.label} backgroundColor={brandingStyles.input.backgroundColor} />
          <InputWidget
            inputStyle={[brandingStyles.input, styles.inputWidget, { borderColor: props.state?.val }]}
            formats={['HEX']}
            inputTitleStyle={{ display: 'none' }}
          />
        </View>
        <Swatches style={styles.swatches} swatchStyle={styles.swatch} colors={colors} />
      </ColorPicker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    alignSelf: 'flex-start',
  },
  picker: {},
  swatches: {
    height: 127,
    width: 127,
  },
  swatch: {
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 0,
    height: '14.28%',
    width: 'auto',
    aspectRatio: 1,
  },
  inputWidget: {
    marginBottom: 3,
    height: 20,
    width: 127,
  },
})
