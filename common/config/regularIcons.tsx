import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { IconList } from '../types/IconList'
import { IconMap } from '../types/IconMap'
import { iconMapToList } from '../utils/iconMapToList'

export const iconMap: IconMap = {
  ...Object.keys(AntDesign.glyphMap).reduce(
    (acc, name) => ({ ...acc, [`antdesign:${name}`]: { name, icon: <AntDesign name={name as keyof typeof AntDesign.glyphMap} /> } }),
    {}
  ),
  ...Object.keys(Entypo.glyphMap).reduce((acc, name) => ({ ...acc, [`entypo:${name}`]: { name, icon: <Entypo name={name as keyof typeof Entypo.glyphMap} /> } }), {}),
  ...Object.keys(Feather.glyphMap).reduce((acc, name) => ({ ...acc, [`feather:${name}`]: { name, icon: <Feather name={name as keyof typeof Feather.glyphMap} /> } }), {}),
  ...Object.keys(Ionicons.glyphMap).reduce((acc, name) => ({ ...acc, [`ionicons:${name}`]: { name, icon: <Ionicons name={name as keyof typeof Ionicons.glyphMap} /> } }), {}),
  ...Object.keys(MaterialCommunityIcons.glyphMap).reduce(
    (acc, name) => ({ ...acc, [`materialcommunityicons:${name}`]: { name, icon: <MaterialCommunityIcons name={name as keyof typeof MaterialCommunityIcons.glyphMap} /> } }),
    {}
  ),
  ...Object.keys(MaterialIcons.glyphMap).reduce(
    (acc, name) => ({ ...acc, [`materialicons:${name}`]: { name, icon: <MaterialIcons name={name as keyof typeof MaterialIcons.glyphMap} /> } }),
    {}
  ),
}

export const iconList: IconList[] = iconMapToList(iconMap)
