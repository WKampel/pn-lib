import { useNavigation } from '@react-navigation/native'
import { cloneElement } from 'react'
import { Pressable, Text } from 'react-native'
import { styled } from '../libs/wakui'
import Spinner from './Spinner'

const Button = styled('button', ({ style, text, icon, onMouseEnter, onMouseLeave, onPressIn, onPressOut, onPress, disabled, loading, linkTo }) => {
  const nav = useNavigation()

  const handleOnPress = () => {
    if (onPress) onPress()
    if (linkTo) nav.navigate(linkTo)
  }

  return (
    <Pressable
      style={style}
      onPress={handleOnPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled || loading}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {text && <Text style={{ color: style.color, fontSize: style.fontSize, fontWeight: style.fontWeight }}>{text}</Text>}
          {icon && cloneElement(icon, { color: style.color, size: style.fontSize })}
        </>
      )}
    </Pressable>
  )
})

export default Button