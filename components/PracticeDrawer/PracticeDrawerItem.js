import { cloneElement } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import useStyles from '../../hooks/useStyles'

const PracticeDrawerItem = ({ icon, label, onPress, isFocused }) => {
  const styles = useStyles(styleConfig, {}, { activated: isFocused })

  return (
    <TouchableOpacity style={styles.drawerItem} focusable={false} onPress={onPress}>
      {icon && cloneElement(icon, { size: styles.label.fontSize, color: styles.label.color })}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    drawerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '$spacing-s',
      marginLeft: '$spacing-s',
      height: '$size-m',
    },
    label: {
      color: '$color-text-on-surface',
      fontSize: '$font-size-s',
      '@activated': {
        color: '$color-ui-primary',
      },
    },
  },
}

export default PracticeDrawerItem
