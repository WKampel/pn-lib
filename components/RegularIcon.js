import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import IconBase from './IconBase'

const iconSets = {
  antdesign: AntDesign,
  entypo: Entypo,
  feather: Feather,
  ionicons: Ionicons,
  materialcommunityicons: MaterialCommunityIcons,
  materialicons: MaterialIcons,
}

const RegularIcon = ({ identifier = '', style, size, color }) => {
  const [set, iconName] = identifier.split(':')
  return <IconBase iconSets={iconSets} set={set} name={iconName} style={style} size={size} color={color} />
}

export default RegularIcon
