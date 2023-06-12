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
  '#51c961',
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
  '#ff8080', // Light Coral
  '#ffa07a', // Light Salmon
  '#ffa500', // Orange
  '#ffd700', // Gold
  '#ffff00', // Yellow
  '#32cd32', // Lime Green
  '#00ced1', // Dark Turquoise
  '#4169e1', // Royal Blue
  '#800080', // Purple
  '#db7093', // Pale Violet Red
  '#ff69b4', // Hot Pink
  '#ff1493', // Deep Pink
  '#ff4500', // Orange Red
  '#ff8c00', // Dark Orange
  '#ffd700', // Gold
  '#228b22', // Forest Green
  '#008080', // Teal
  '#4682b4', // Steel Blue
  '#4b0082', // Indigo
  '#ba55d3', // Medium Orchid
  '#ff00ff', // Magenta
  '#afeeee', // Pale Turquoise
  '#00bfff', // Deep Sky Blue
  '#7b68ee', // Medium Slate Blue
  '#9370db', // Medium Purple
  '#a0522d', // Sienna
  '#d2691e', // Chocolate
  '#daa520', // Goldenrod
  '#808000', // Olive
  '#556b2f', // Dark Olive Green
  '#2e8b57', // Sea Green
  '#008000', // Green
  '#006400', // Dark Green
  '#8b4513', // Saddle Brown
  '#b22222', // Fire Brick
  '#dc143c', // Crimson
  '#800000', // Maroon
  '#ffb6c1', // Light Pink
  '#add8e6', // Light Blue
  '#00fa9a', // Medium Spring Green
  '#9acd32', // Yellow Green
  '#9932cc', // Dark Orchid
  '#ff7f50', // Coral
  '#20b2aa', // Light Sea Green
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
