import React from 'react'
import { Switch as ReactNativeSwitch } from 'react-native'

const Switch = props => {
  return <ReactNativeSwitch onValueChange={props.state.set} value={props.state.val} />
}

export default Switch
