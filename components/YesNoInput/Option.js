import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import useStyles from '../../hooks/useStyles'

const Option = ({ type, value, onChange }) => {
  if (!['yes', 'no'].includes(type)) throw Error('Invalid type')

  const styles = useStyles(styleConfig, {}, { selected: type === value })

  return (
    <TouchableOpacity style={styles.option} onPress={() => onChange(type)}>
      <Text style={styles.text}>Yes</Text>
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    option: {
      borderRadius: '$radius-xs',
      borderWidth: 1,
      borderColor: '$color-border-on-surface',
      '@selected': {
        borderColor: '$color-border-on-surface-intense',
        backgroundColor: '$color-bg-surface-emphasis',
      },
      backgroundColor: '$color-bg-surface',
      paddingVertical: '$spacing-s',
      flex: 1,
    },
    text: {
      textAlign: 'center',
      '@selected': {
        fontWeight: '$weight-heavy',
      },
    },
  },
}

export default Option
