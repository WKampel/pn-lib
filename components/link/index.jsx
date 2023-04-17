import { Link, StackActions } from '@react-navigation/native'
import { Context as StyleContext } from 'pn-context-style'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

export default props => {
  const style = useContext(StyleContext)
  return (
    <Link
      to={props.to}
      action={props.replace ? StackActions.replace(props.screen, props.params) : null}
      style={[styles.link, { color: style.primaryColor }, props.style]}
    >
      {props.children}
    </Link>
  )
}

const styles = StyleSheet.create({
  link: {},
})
