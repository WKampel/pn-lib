import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import CheckBox from 'expo-checkbox'

export default props => {
  return (
    <TouchableWithoutFeedback onPress={() => props.onValueChange(!props.value)}>
      <View style={styles.container}>
        <CheckBox disabled={props.disabled} value={props.value} onValueChange={props.onValueChange} style={styles.checkbox} />
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
