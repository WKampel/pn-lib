import { useNavigation } from '@react-navigation/native'
import { cloneElement } from 'react'
import { Pressable, Text } from 'react-native'
import { styled } from '../libs/wakui'
import { useParentStyle } from '../libs/wakui/styleProvider'
import Spinner from './Spinner'

const Button = styled(
  ({ isFocused, isHovered, isPressed }) => ({
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    defaultVariants: {
      size: 'm',
      theme: 'primary',
      hoverPressOpacity: true,
    },
    variants: {
      alignSelf: {
        other: ({ value }) => ({ alignSelf: value }),
      },
      size: {
        s: {
          height: 30,
          paddingHorizontal: 15,
          fontSize: 9,
          borderRadius: 9,
          gap: 9,
        },
        m: {
          height: 40,
          paddingHorizontal: 20,
          fontSize: 12,
          borderRadius: 12,
          gap: 12,
        },
        l: {
          height: 50,
          paddingHorizontal: 25,
          fontSize: 15,
          borderRadius: 15,
          gap: 15,
        },
      },
      theme: {
        primary: {
          color: 'black',
          backgroundColor: '$color.primary',
        },
        secondary: {
          borderWidth: 2,
          backgroundColor: 'transparent',
          borderColor: '$color.primary',
          color: '$color.primary',
        },
      },
    },
  }),
  ({ style, children, onMouseEnter, onMouseLeave, onPressIn, onPressOut, onPress: onPressProp, disabled, loading, linkTo }) => {
    const nav = useNavigation()

    const onPress = () => {
      if (onPressProp) onPressProp()
      if (linkTo) nav.navigate(linkTo)
    }

    return (
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        disabled={disabled || loading}
      >
        {loading ? <Spinner /> : children}
      </Pressable>
    )
  }
)

Button.Text = props => {
  const style = useParentStyle()

  return (
    <Text
      style={{
        color: style.color,
        fontSize: style.fontSize,
      }}
    >
      {props.children}
    </Text>
  )
}

Button.Icon = props => {
  const style = useParentStyle()

  return cloneElement(props.children, { color: style.color, size: style.fontSize })
}

export default Button
