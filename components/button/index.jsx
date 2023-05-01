import React, { useContext } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import Spinner from '../../components/spinner'
import { useNavigation } from '@react-navigation/native'
import { Context as StyleContext } from '../../contexts/style'

export default props => {
  const nav = useNavigation()
  const style = useContext(StyleContext)

  if (props.loading) {
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
    minHeight: 38,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...(Platform.OS !== 'web' && { width: '100%' }),
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 500,
  },
  disabled: {
    backgroundColor: 'lightgray',
  },
})
