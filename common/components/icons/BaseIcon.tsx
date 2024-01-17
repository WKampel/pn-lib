import { cloneElement } from 'react'
import { TextStyle } from 'react-native'
import { IconMap } from '../../types/IconMap'

export type BaseIconProps = {
  id: string
  color?: TextStyle['color']
  size?: TextStyle['fontSize']
  icons: IconMap
}

export const BaseIcon = ({ id, color, size, icons }: BaseIconProps) => {
  const iconEntry = icons[id]
  if (!iconEntry) throw new Error(`Icon ${id} not found`)
  return cloneElement(iconEntry.icon, { color, size }) ?? null
}
