import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export type ExpoVectorSet = typeof AntDesign | typeof Entypo | typeof Feather | typeof Ionicons | typeof MaterialCommunityIcons | typeof MaterialIcons

export type Icon = {
  label: string
} & (
  | {
      type?: 'expo-vector'
      name: string
      set: ExpoVectorSet
    }
  | {
      type?: 'image'
      source: string
    }
)

export type IconSet = Record<string, Icon>
