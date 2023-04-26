import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import CheckBox from 'expo-checkbox'

export default props => {
  const value = props.state ? props.state.val : props.value
  const onPress = () => {
    if (props.state) props.state.set(!value)
    if (props.onValueChange) props.onValueChange(!value)
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <CheckBox disabled={props.disabled} value={value} onValueChange={props.onValueChange} style={styles.checkbox} />
        <Text style={styles.label}>{props.label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 7,
  },
  label: {},
})
