import React from 'react'
import { View } from 'react-native'
import { useNav } from '../hooks/useNav'
import { useTheme } from '../hooks/useTheme'
import { SolidButton } from './buttons/SolidButton'

type PageSwitcherItem = {
  name: string
  icon?: React.ReactElement
  to?: { name: string; params: { id: string } }
}

type PageSwitcherProps = {
  items: PageSwitcherItem[]
  active: Extract<PageSwitcherItem['name'], string>
}

export const PageSwitcher = ({ items, active }: PageSwitcherProps) => {
  const nav = useNav()

  const onPress = (item: PageSwitcherItem) => {
    if (active !== item.name) {
      if (item.to) nav.navigate(item.to)
    }
  }

  const tokens = useTheme()

  return (
    <View
      style={{
        flexDirection: 'row',
        overflow: 'hidden',
        gap: tokens.spacing_s,
      }}
    >
      {items.map(item => (
        <SolidButton key={item.name} variant={active === item.name ? 'primary' : 'secondary'} text={item.name} icon={item.icon} onPress={() => onPress(item)} />
      ))}
    </View>
  )
}
