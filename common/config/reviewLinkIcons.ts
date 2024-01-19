import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { ExpoVectorSet, IconMap } from '../types/IconMap'

const generateSetIcons = (set: ExpoVectorSet, setName: string): IconMap => {
  return Object.keys(set.glyphMap).reduce((acc, name) => ({ ...acc, [`${setName}:${name}`]: { name, label: name, set } }), {} as IconMap)
}

export const reviewLinkIcons: IconMap = {
  ...generateSetIcons(AntDesign, 'antdesign'),
  ...generateSetIcons(Entypo, 'entypo'),
  ...generateSetIcons(Feather, 'feather'),
  ...generateSetIcons(Ionicons, 'ionicons'),
  ...generateSetIcons(MaterialCommunityIcons, 'material-community'),
  ...generateSetIcons(MaterialIcons, 'material'),
}
