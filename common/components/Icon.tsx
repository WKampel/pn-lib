import { ColorValue, Text } from 'react-native'
import { IconSet } from '../types/IconSet'
import { Image } from './Image'

export const Icon = ({ id, set, color = 'black', size = 10 }: { id: keyof IconSet; set: IconSet; color?: ColorValue; size?: number }) => {
  const icon = set[id]
  if (icon) {
    if (icon.type === 'expo-vector') {
      const IconComponent = icon.set
      return <IconComponent name={icon.name as any} color={color} size={size} />
    } else if (icon.type === 'image') {
      return <Image source={icon.source} style={{ width: size, height: size }} />
    }
  }
  return <Text>NO-ICON</Text>
}
