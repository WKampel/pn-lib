import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import Icon from './Icon'

const BarSwitcher = ({ items, active, variants }) => {
  const { brandingStyles, colors } = useBranding('barSwitcher', variants)
  const nav = useNavigation()

  const onPress = item => {
    if (active !== item.name) {
      item.to && nav.navigate(item.to)
    }
  }

  return (
    <View style={[brandingStyles.container, styles.barSwitcher]}>
      {items.map(item => (
        <Pressable
          key={item.name}
          onPress={() => onPress(item)}
          style={[brandingStyles.item, styles.item, active === item.name && { borderColor: colors.primary, opacity: 1 }]}
        >
          {item.icon ? (
            <Icon color={brandingStyles.text.color} set={item.icon.set} name={item.icon.name} size={brandingStyles.text.fontSize} />
          ) : null}
          <Text style={brandingStyles.text}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  barSwitcher: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  item: { flexDirection: 'row', gap: 5, alignItems: 'center' },
})

export default BarSwitcher
