import { useNavigation } from '@react-navigation/native'
import { cloneElement } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'
import Spinner from './Spinner'

const Button = ({ to, onPress: onPressProp, text, icon, disabled = false, loading = false, size = 'm', round = false, kind = 'primary', style, textStyle }) => {
  const nav = useNavigation()

  const { hovered, focused, pressed, interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig, { size, round, kind }, { hovered, focused, pressed, disabled: disabled || loading })

  const onPress = () => {
    if (onPressProp) onPressProp()
    if (to) nav.navigate(to)
  }

  return (
    <TouchableOpacity disabled={disabled || loading} onPress={onPress} style={[styles.button, style]} {...interactiveEvents}>
      {loading ? (
        <Spinner color={styles.text.color} />
      ) : (
        <>
          {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
          {icon && cloneElement(icon, { color: styles.text.color, size: styles.text.fontSize })}
        </>
      )}
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      '@hovered': {
        opacity: '$opacity-hovered',
      },
      '@disabled': {
        opacity: 0.5,
      },
      gap: 10,
    },
    text: {
      fontWeight: '$weight-semi-heavy',
    },
  },
  size: {
    m: {
      button: {
        height: '$size-m',
        paddingHorizontal: '$spacing-m',
        borderRadius: '$radius-s',
      },
      text: {
        fontSize: '$font-size-s',
      },
    },
    s: {
      button: {
        height: '$size-s',
        paddingHorizontal: '$spacing-s',
        borderRadius: '$radius-xs',
      },
      text: {
        fontSize: '$font-size-xs',
      },
    },
    xs: {
      button: {
        height: '$size-xs',
        paddingHorizontal: '$spacing-xs',
        borderRadius: '$radius-sharp',
      },
      text: {
        fontSize: '$font-size-xxs',
      },
    },
  },
  kind: {
    primary: {
      button: {
        backgroundColor: '$color-ui-primary',
      },
      text: {
        color: '$color-text-on-primary',
      },
    },
    secondary: {
      button: {
        backgroundColor: '$color-ui-secondary',
        borderWidth: 1,
        borderColor: '$color-border-on-surface-semi-intense',
      },
      text: {
        color: '$color-text-on-surface',
      },
    },
    secondarySubtle: {
      button: {
        backgroundColor: 'transparent',
        '@hovered': {
          backgroundColor: '$color-ui-secondary',
        },
      },
      text: {
        color: '$color-text-on-surface',
      },
    },
    danger: {
      button: {
        backgroundColor: '$color-danger',
      },
      text: {
        color: 'black',
      },
    },
    icon: {
      button: {
        paddingHorizontal: 0,
        height: 'auto',
        borderRadius: '$radius-sharp',
      },
      text: {
        color: '$color-text-on-surface',
      },
    },
  },
}

export default Button
