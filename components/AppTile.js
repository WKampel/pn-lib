import { useNavigation } from '@react-navigation/native'
import { cloneElement } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import useStyles from '../hooks/useStyles'

const AppTile = ({ to, title, icon }) => {
  const nav = useNavigation()
  const styles = useStyles(styleConfig)

  return (
    <TouchableOpacity onPress={() => nav.navigate(to)} style={styles.appTile}>
      <View style={styles.homeTile}>
        {icon && cloneElement(icon, { size: styles.icon.size, color: styles.icon.color })}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    appTile: {
      width: '50%',
      padding: '$spacing-xs',
    },
    homeTile: {
      padding: '$spacing-m',
      borderRadius: '$radius-xs',
      alignItems: 'center',
      height: 100,
      overflow: 'hidden',
      backgroundColor: '$color-ui-primary',
      gap: '$spacing-s',
    },
    title: {
      color: '$color-text-on-primary',
      textAlign: 'center',
      fontWeight: '$weight-heavy',
      fontSize: '$font-size-s',
      textTransform: 'uppercase',
    },
    icon: {
      size: 40,
      color: '$color-text-on-primary',
    },
  },
}

export default AppTile
