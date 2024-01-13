import { useTokens } from '../../hooks/useTokens'
import { BaseButton, BaseButtonProps } from './BaseButton'

export type SolidButtonProps = BaseButtonProps & {
  variant?: 'primary' | 'secondary' | 'danger'
}

export const SolidButton = (props: SolidButtonProps) => {
  const tokens = useTokens()

  const commonContainerStyle = { padding: tokens.spacing_s, borderRadius: tokens.radius_s }

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
      textStyle: { color: tokens.color_text_on_primary },
      containerStyle: { backgroundColor: tokens.color_danger },
    },
  }

  const disabledContainerStyle = props.disabled ? { opacity: 0.25 } : {}

  const { variant = 'primary' } = props
  const { textStyle, containerStyle } = variantStyles[variant]

  return <BaseButton textStyle={textStyle} containerStyle={{ ...commonContainerStyle, ...containerStyle, ...disabledContainerStyle }} {...props} />
}
