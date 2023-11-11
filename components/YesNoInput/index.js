import React from 'react'
import { Text, View } from 'react-native'
import useStyles from '../../hooks/useStyles'
import Option from './Option'

const YesNoInput = ({ style, label, value, onChange }) => {
  const styles = useStyles(styleConfig)

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.buttonContainer}>
        <Option type='yes' value={value} onChange={onChange} />
        <Option type='no' value={value} onChange={onChange} />
      </View>
    </View>
  )
}
const styleConfig = {
  base: {
    container: {
      gap: '$spacing-xs',
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: '$spacing-s',
    },
    label: {
      fontSize: '$font-size-m',
      textAlign: 'center',
    },
  },
}

export default YesNoInput
