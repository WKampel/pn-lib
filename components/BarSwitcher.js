import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'

export default props => {
  const branding = useBranding()
  const nav = useNavigation()

  const onPress = item => {
    if (props.active === item.name) return
    item.to && nav.navigate(item.to)
  }

  return (
    <View style={[branding.input.style, styles.barSwitcher]}>
      {props.items.map((item, i) => (
        <Pressable key={i} onPress={() => onPress(item)} style={[styles.item, props.active === item.name ? styles.itemActive : {}]}>
          <Text style={styles.name}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  barSwitcher: {
    flexDirection: 'row',
    marginBottom: 20,
    flex: Platform.OS === 'web' ? 'unset' : null,
    paddingLeft: Platform.OS === 'web' ? 'unset' : null,
  },
  item: { flex: 1, padding: 7, borderRadius: 5 },
  itemActive: {
    backgroundColor: 'white',
  },
  name: { fontSize: 12, textAlign: 'center' },
})
