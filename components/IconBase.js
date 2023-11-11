import React from 'react'

const IconBase = ({ set, name, style, size, color, iconSets }) => {
  const IconComponent = iconSets[set?.toLowerCase()]

  if (!IconComponent) {
    console.error(`Icon set ${set} not found`)
    return null
  }

  return <IconComponent name={name} size={size} style={style} color={color} />
}

export default IconBase
