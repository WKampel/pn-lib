import React from 'react'
import { Switch as ReactNativeSwitch, StyleSheet, Text, View } from 'react-native'

const Switch = props => {
  return (
    <View style={styles.container}>
      <ReactNativeSwitch onValueChange={props.state.set} value={props.state.val} />
      {props.label ? <Text>{props.label}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
})

export default Switch
