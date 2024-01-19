import { Text } from 'react-native'
import { IconMap } from '../types/IconMap'
import { Image } from './Image'

export const Icon = ({ id, icons, color, size }: { id: keyof IconMap; icons: IconMap; color?: string; size?: number }) => {
  const icon = icons[id]
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
