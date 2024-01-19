import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { ExpoVectorSet, IconSet } from '../types/IconSet'

const generateSetIcons = (set: ExpoVectorSet, setName: string): IconSet => {
  return Object.keys(set.glyphMap).reduce((acc, name) => ({ ...acc, [`${setName}:${name}`]: { name, label: name, set } }), {} as IconSet)
}

export const reviewLinkIconSet: IconSet = {
  ...generateSetIcons(AntDesign, 'antdesign'),
  ...generateSetIcons(Entypo, 'entypo'),
  ...generateSetIcons(Feather, 'feather'),
  ...generateSetIcons(Ionicons, 'ionicons'),
  ...generateSetIcons(MaterialCommunityIcons, 'material-community'),
  ...generateSetIcons(MaterialIcons, 'material'),
}
