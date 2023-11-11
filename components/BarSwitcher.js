import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import useStyles from '../hooks/useStyles'
import Button from './Button'

const BarSwitcher = ({ style, items, active }) => {
  const styles = useStyles(styleConfig)
  const nav = useNavigation()

  const onPress = item => {
    if (active !== item.name) {
      item.to && nav.navigate(item.to)
    }
  }

  return (
    <View style={[styles.barSwitcher, style]}>
      {items.map(item => (
        <Item key={item.name} activated={active === item.name} name={item.name} icon={item.icon} onPress={() => onPress(item)} />
      ))}
    </View>
  )
}

const Item = ({ icon, name, activated, onPress }) => {
  return <Button size='s' kind={activated ? 'primary' : 'secondary'} text={name} icon={icon} onPress={onPress} />
}
const styleConfig = {
  base: {
    barSwitcher: {
      flexDirection: 'row',
      gap: '$spacing-s',
      overflow: 'hidden',
    },
  },
}

export default BarSwitcher
