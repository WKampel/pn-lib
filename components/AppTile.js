import { useNavigation } from '@react-navigation/native'
import { cloneElement } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import useStyles from '../hooks/useStyles'

const AppTile = ({ to, title, icon, style }) => {
  const nav = useNavigation()
  const styles = useStyles(styleConfig)

  return (
    <TouchableOpacity onPress={() => nav.navigate(to)} style={[styles.appTile, style]}>
      {icon && cloneElement(icon, { size: styles.icon.size, color: styles.icon.color })}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    appTile: {
      borderRadius: '$radius-xs',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '$color-ui-primary',
      gap: '$spacing-s',
      flex: 1,
    },
    title: {
      color: '$color-text-on-primary',
      textAlign: 'center',
      fontWeight: '$weight-heavy',
      fontSize: '$font-size-s',
      textTransform: 'uppercase',
    },
    icon: {
      size: '$size-m',
      color: '$color-text-on-primary',
    },
  },
}

export default AppTile
