import { cloneElement } from 'react'
import { ActivityIndicator, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useTheme } from '../../hooks/useTheme'

export type BaseButtonProps = {
  onPress?: () => void
  text?: string
  icon?: React.ReactElement
  disabled?: boolean
  loading?: boolean
  size?: 's' | 'm' | 'l'
  containerStyle?: BaseButtonContainerStyles
  textStyle?: BaseButtonTextStyles
}

type BaseButtonContainerStyles = {
  backgroundColor: ViewStyle['backgroundColor']
  padding: ViewStyle['padding']
  borderRadius: ViewStyle['borderRadius']
}

type BaseButtonTextStyles = {
  color?: TextStyle['color']
  fontSize?: TextStyle['fontSize']
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

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={handlePress}
      style={[
        {
          height: heightMap[size],
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textStyle?.color} />
      ) : (
        <>
          {text ? <Text style={textStyle}>{text}</Text> : null}
          {icon ? cloneElement(icon, { color: textStyle?.color, size: textStyle?.fontSize }) : null}
        </>
      )}
    </TouchableOpacity>
  )
}
