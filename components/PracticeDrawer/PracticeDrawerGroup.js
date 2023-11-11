import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import useStyles from '../../hooks/useStyles'

const isRouteNameInGroup = (groupItems, routeName) => {
  for (let item of groupItems) {
    if (item.to === routeName) {
      return true
    }
    if (item.owns?.includes(routeName)) {
      return true
    }
    if (item.items && isRouteNameInGroup(item.items, routeName)) {
      return true
    }
  }
  return false
}

const PracticeDrawerGroup = ({ children, label, currentRouteName, items }) => {
  const [open, setOpen] = useState(false)

  const styles = useStyles(styleConfig, {}, { open })

  useEffect(() => {
    if (!currentRouteName) return
    if (isRouteNameInGroup(items, currentRouteName)) {
      setOpen(true)
    }
  }, [currentRouteName])

  return (
    <View style={styles.practiceDrawerGroup}>
      <TouchableOpacity focusable={false} onPress={() => setOpen(!open)} style={styles.nameContainer}>
        <Text style={styles.label}>{label}</Text>
        <Ionicons name={open ? 'chevron-down' : 'chevron-up'} size={20} />
      </TouchableOpacity>
      {children}
    </View>
  )
}

const styleConfig = {
  base: {
    practiceDrawerGroup: {
      backgroundColor: 'rgb(240,243,245)',
      borderRadius: 10,
      paddingLeft: 15,
      height: 40,
      overflow: 'hidden',
      '@open': {
        height: 'auto',
      },
    },
    nameContainer: {
      height: '$size-m',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: '$spacing-m',
    },
    label: {
      fontWeight: '$weight-heavy',
    },
  },
}

export default PracticeDrawerGroup
