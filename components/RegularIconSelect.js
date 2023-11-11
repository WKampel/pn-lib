import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import BaseIconSelect from './BaseIconSelect'
import RegularIcon from './RegularIcon'

const sets = {
  antdesign: Object.keys(AntDesign.glyphMap),
  feather: Object.keys(Feather.glyphMap),
  ionicons: Object.keys(Ionicons.glyphMap),
  materialicons: Object.keys(MaterialIcons.glyphMap),
  materialcommunityicons: Object.keys(MaterialCommunityIcons.glyphMap),
  entypo: Object.keys(Entypo.glyphMap),
}

const RegularIconSelect = props => {
  return <BaseIconSelect getIcon={props => <RegularIcon {...props} />} sets={sets} {...props} />
}

export default RegularIconSelect
