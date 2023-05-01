import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, Switch } from 'react-native'

export default props => {
  return <Switch onValueChange={props.state.set} value={props.state.val} />
}

const styles = StyleSheet.create({})
