import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { DentalSet1, DentalSet2, DentalSet3, DentalSet4, DentalSet5, DentalSet6 } from './DentalIcons'

const iconSets = {
  antdesign: AntDesign,
  entypo: Entypo,
  feather: Feather,
  ionicons: Ionicons,
  materialcommunityicons: MaterialCommunityIcons,
  materialicons: MaterialIcons,
  dental1: DentalSet1,
  dental2: DentalSet2,
  dental3: DentalSet3,
  dental4: DentalSet4,
  dental5: DentalSet5,
  dental6: DentalSet6,
}

const Icon = ({ val, set: propSet, name: propName, style, size, color }) => {
  let [set, name] = val ? val.split(':') : [propSet, propName]

  const IconComponent = iconSets[set.toLowerCase()]

  if (!IconComponent) {
    console.error(`Icon set ${set} not found`)
    return null
  }

  return <IconComponent name={name} size={size} style={style} color={color} />
}

export default Icon
