import { ReactElement, cloneElement, isValidElement } from 'react'
import { ColorValue, Text, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type TagProps = {
  text: string
  icon?: ReactElement<IconProps>
  variant: Variant
}

type IconProps = {
  color?: ColorValue
  size?: number
}

type Variant = 'DEFAULT' | 'SUCCESS' | 'ERROR'

export const Tag = ({ text, icon, variant = 'DEFAULT' }: TagProps) => {
  const tokens = useTheme()

  // Determine bg color by variant

  const backgroundColorMap: { [key in Variant]: ColorValue } = {
    DEFAULT: tokens.color_ui_secondary,
    SUCCESS: tokens.color_success,
    ERROR: tokens.color_danger,
  }

  const textColorMap: { [key in Variant]: ColorValue } = {
    DEFAULT: tokens.color_text_on_secondary,
    SUCCESS: tokens.color_text_on_surface,
    ERROR: tokens.color_text_on_surface,
  }

  return (
    <View
      style={{
        borderRadius: tokens.radius_round,
        paddingVertical: tokens.spacing_xxs,
        paddingHorizontal: tokens.spacing_xs,
        backgroundColor: backgroundColorMap[variant],
      }}
    >
      <Text
        style={{
          fontSize: tokens.font_size_xs,
          color: textColorMap[variant],
        }}
      >
        {text}
      </Text>
      {isValidElement(icon) ? cloneElement(icon, { size: tokens.font_size_xs, color: textColorMap[variant] }) : null}
    </View>
  )
}
