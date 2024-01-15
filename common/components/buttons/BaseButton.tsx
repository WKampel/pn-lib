import { cloneElement } from 'react'
import { ActivityIndicator, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useNav } from '../../hooks/useNav'

export type BaseButtonProps = {
  to?: string
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

export const BaseButton = ({ size = 'm', onPress, to, loading, disabled, containerStyle, textStyle, text, icon }: BaseButtonProps) => {
  const nav = useNav()

  const handlePress = () => {
    if (onPress) onPress()
    if (to) nav.navigate(to)
  }

  return (
    <TouchableOpacity disabled={disabled || loading} onPress={handlePress} style={containerStyle}>
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
