import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { IconSet } from '../types/IconSet'
import { generateExpoVectorIconSet } from '../utils/generateExpoVectorIconSet'

export const reviewLinkIconSet: IconSet = {
  ...generateExpoVectorIconSet(AntDesign, 'antdesign'),
  ...generateExpoVectorIconSet(Entypo, 'entypo'),
  ...generateExpoVectorIconSet(Feather, 'feather'),
  ...generateExpoVectorIconSet(Ionicons, 'ionicons'),
  ...generateExpoVectorIconSet(MaterialCommunityIcons, 'material-community'),
  ...generateExpoVectorIconSet(MaterialIcons, 'material'),
}
