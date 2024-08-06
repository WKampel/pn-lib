import { ReactElement, cloneElement, isValidElement } from 'react'
import { ColorValue, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export const AppTile = ({
  title,
  icon,
  onPress,
  reddot,
}: {
  icon: ReactElement<{ size: number; color: ColorValue }>
  title: string
  onPress?: () => void
  reddot?: boolean
}) => {
  const { tokens } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tokens.color_ui_primary,
        borderRadius: tokens.radius_xs,
        gap: tokens.spacing_s,
        flex: 1,
      }}
    >
      {isValidElement(icon) ? cloneElement(icon, { size: tokens.size_s, color: tokens.color_text_on_primary }) : null}
      <Text
        style={{
          color: tokens.color_text_on_primary,
          textAlign: 'center',
          fontWeight: tokens.weight_heavy,
          fontSize: tokens.font_size_s,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Text>
      {reddot ? (
        <View
          style={{
            backgroundColor: 'red',
            width: 22,
            height: 22,
            borderRadius: 10,
            position: 'absolute',
            top: 0,
            right: 0,
            transform: [{ translateX: 6 }, { translateY: -6 }],
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>1</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  )
}
