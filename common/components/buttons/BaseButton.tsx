import { cloneElement } from 'react'
import { ActivityIndicator, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

export type BaseButtonProps = {
  onPress?: () => void
  text?: string
  icon?: React.ReactElement
  disabled?: boolean
  loading?: boolean
  size?: 's' | 'm' | 'l'
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export const BaseButton = ({ size = 'm', onPress, loading, disabled, containerStyle, textStyle, text, icon }: BaseButtonProps) => {
  const handlePress = () => {
    if (onPress) onPress()
  }

  const tokens = useTheme()

  const heightMap = {
    s: tokens.size_s,
    m: tokens.size_m,
    l: tokens.size_l,
  }

  const textStyleAsObject = textStyle && typeof textStyle === 'object' && !Array.isArray(textStyle) ? textStyle : {}
  const { color, fontSize } = textStyleAsObject as TextStyle

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={handlePress}
      style={[
        {
          height: heightMap[size],
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: tokens.spacing_xs,
          opacity: loading ? 0.5 : 1,
        },
        containerStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          {text ? <Text style={textStyle}>{text}</Text> : null}
          {icon ? cloneElement(icon, { color, size: fontSize }) : null}
        </>
      )}
    </TouchableOpacity>
  )
}
