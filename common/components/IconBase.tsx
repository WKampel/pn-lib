import React, { ComponentType } from 'react'

export type IconBaseProps = {
  set: string
  name?: string
  style?: any
  size?: number
  color?: string
  iconSets: Record<string, ComponentType<any>>
}

export const IconBase = ({ set, name, style, size, color, iconSets }: IconBaseProps) => {
  const IconComponent = iconSets[set.toLowerCase()]

  if (!IconComponent) {
    console.error(`Icon set ${set} not found`)
    return null
  }

  return <IconComponent name={name} size={size} style={style} color={color} />
}
