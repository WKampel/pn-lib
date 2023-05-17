import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import Spinner from './Spinner'

const Button = props => {
  const nav = useNavigation()

  const branding = useBranding()

  const buttonStyle = {
    ...branding.button.style,
    ...(props.secondary ? branding.button.secondary.style : branding.button.primary.style),
    ...props.style,
    ...((props.disabled || props.loading) && branding.button.disabled.style),
  }
  const buttonTextStyle = {
    ...branding.button.text.style,
    ...props.textStyle,
    ...(props.secondary ? branding.button.secondary.text.style : branding.button.primary.text.style),
  }

  if (props.loading) {
    return (
      <View style={buttonStyle}>
        <Spinner />
      </View>
    )
  } else if (props.disabled) {
    return (
      <View style={buttonStyle}>
        <Text style={buttonTextStyle}>
          {props.icon}
          {props.text}
        </Text>
      </View>
    )
  }

  const onPress = () => {
    if (props.onPress) props.onPress()
    if (props.linkTo) nav.navigate(props.linkTo)
  }

  return (
    <Pressable pointerEvents={props.disabled ? 'none' : 'auto'} style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>
        {props.icon}
        {props.text}
      </Text>
    </Pressable>
  )
}

export default Button
