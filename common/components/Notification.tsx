import { AntDesign } from '@expo/vector-icons'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { useNav } from '../hooks/useNav'
import { useTheme } from '../hooks/useTheme'
import { NotificationType } from '../types/NotificationType'

type NotificationProps = {
  title: string
  body: string
  linkTo?: string
  type: NotificationType
  onPress?: () => void
  onDelete?: () => void
}

const iconMap = {
  INFO: 'infocirlceo',
  ERROR: 'closecircleo',
} as const

export const Notification = (props: NotificationProps) => {
  const nav = useNav()
  const { title, body, linkTo, type, onPress, onDelete } = props
  const tokens = useTheme()

  const bgColorMap = {
    INFO: tokens.color_info,
    ERROR: tokens.color_danger,
  }

  const handlePress = () => {
    if (onPress) onPress()
    if (linkTo) nav.navigate(linkTo)
  }

  return (
    <Pressable
      style={{
        flexDirection: 'row',
        padding: tokens.spacing_m,
        borderRadius: tokens.radius_s,
        marginBottom: tokens.spacing_m,
        gap: tokens.spacing_s,
      }}
      onPress={handlePress}
    >
      <AntDesign name={iconMap[type]} size={30} color='white' />

      <View style={{ flex: 1 }}>
        {title ? (
          <Text
            style={{
              fontSize: tokens.font_size_m,
              textTransform: 'uppercase',
              fontWeight: tokens.weight_heavy,
              marginBottom: tokens.spacing_xs,
              color: 'white',
              backgroundColor: bgColorMap[type],
            }}
          >
            {title}
          </Text>
        ) : null}
        {body ? (
          <Text
            style={{
              fontSize: tokens.font_size_m,
              color: 'white',
            }}
          >
            {body}
          </Text>
        ) : null}
      </View>

      <TouchableOpacity onPress={onDelete}>
        <AntDesign name='delete' size={20} color='white' />
      </TouchableOpacity>
    </Pressable>
  )
}
