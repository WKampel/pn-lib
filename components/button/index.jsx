import React, { useContext } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import Spinner from '../../spinner'
import { useNavigation } from '@react-navigation/native'
import { Context as StyleContext } from '../../context-style'

export default props => {
  const nav = useNavigation()
  const style = useContext(StyleContext)

  if (props.status == 'loading') {
    return (
      <View style={[styles.button, styles.disabled, props.style]}>
        <Spinner />
      </View>
    )
  }

  const onPress = () => {
    if (props.onPress) props.onPress()
    if (props.linkTo) nav.navigate(props.linkTo)
  }

  return (
    <Pressable
      pointerEvents={props.disabled ? 'none' : 'auto'}
      style={[styles.button, { backgroundColor: style.primaryColor }, props.style, props.disabled ? styles.disabled : {}]}
      onPress={onPress}
    >
      {props.icon && !props.iconAfter ? <View style={styles.icon}>{props.icon}</View> : null}
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      {props.icon && props.iconAfter ? <View style={(styles.icon, styles.iconAfter)}>{props.icon}</View> : null}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  icon: { marginRight: 5 },
  iconAfter: {
    marginRight: 0,
    marginLeft: 5,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...(Platform.OS !== 'web' && { width: '100%' }),
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: 'lightgray',
  },
})
