import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import Icon from './Icon'

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
          {item.icon ? <Icon set={item.icon.set} name={item.icon.name} size={13} /> : null}
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
    padding: 0,
  },
  item: { flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 5 },
  itemActive: {
    backgroundColor: 'lightgray',
  },
  name: { fontSize: 13, textAlign: 'center' },
})
