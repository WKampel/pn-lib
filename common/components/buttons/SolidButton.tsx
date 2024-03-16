import { useTheme } from '../../hooks/useTheme'
import { BaseButton, BaseButtonProps } from './BaseButton'

export type SolidButtonProps = BaseButtonProps & {
  variant?: 'primary' | 'secondary' | 'danger'
}

export const SolidButton = ({ size = 'm', variant = 'primary', disabled, ...other }: SolidButtonProps) => {
  const { tokens } = useTheme()

  const borderRadiusMap = {
    s: tokens.radius_xs,
    m: tokens.radius_s,
    l: tokens.radius_m,
  }

  const commonContainerStyle = { paddingHorizontal: tokens.spacing_s, borderRadius: borderRadiusMap[size] }

  const variantStyles = {
    primary: {
      textStyle: { color: tokens.color_text_on_primary },
      containerStyle: { backgroundColor: tokens.color_ui_primary },
    },
    secondary: {
      textStyle: { color: tokens.color_text_on_secondary },
      containerStyle: { backgroundColor: tokens.color_ui_secondary },
    },
    danger: {
      textStyle: { color: 'black' },
      containerStyle: { backgroundColor: tokens.color_danger },
    },
  }

  const disabledContainerStyle = disabled ? { opacity: 0.25 } : {}

  const { textStyle, containerStyle } = variantStyles[variant]

  return (
    <BaseButton textStyle={textStyle} containerStyle={{ ...commonContainerStyle, ...containerStyle, ...disabledContainerStyle }} size={size} disabled={disabled} {...other} />
  )
}
