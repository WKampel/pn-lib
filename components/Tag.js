import { cloneElement } from 'react'
import { Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'

const Tag = ({ text, icon, kind = 'default' }) => {
  const styles = useStyles(styleConfig, { kind })
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{text}</Text>
      {icon && cloneElement(icon, { size: styles.text.fontSize, color: styles.text.color })}
    </View>
  )
}

const styleConfig = {
  base: {
    tag: {
      borderRadius: '$radius-round',
      paddingVertical: '$spacing-xxs',
      paddingHorizontal: '$spacing-xs',
    },
    text: {
      fontSize: '$font-size-xs',
    },
  },
  kind: {
    default: {
      tag: {
        backgroundColor: '$color-ui-secondary',
      },
      text: {
        color: '$color-text-on-secondary',
      },
    },
    success: {
      tag: {
        backgroundColor: '$color-success',
      },
      text: {
        color: '$color-text-on-surface',
      },
    },
    error: {
      tag: {
        backgroundColor: '$color-danger',
      },
      text: {
        color: '$color-text-on-surface',
      },
    },
  },
}

export default Tag
