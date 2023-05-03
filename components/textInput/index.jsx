import { Context as StyleContext } from '../../contexts/style'
import React, { useContext, useEffect, useRef } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import useState from '../../libs/useState'

export default props => {
  const style = useContext(StyleContext)
  const value = props.state?.val
  const ref = useRef()

  const onChange = text => {
    if (props.state) props.state.set(text)
  }

  useEffect(() => {
    if (props.autoHeight) {
      ref.current.style.height = 0
      ref.current.style.height = ref.current.scrollHeight + 'px'
    }
  }, [value])

  return (
    <View style={[styles.textInputContainer, props.containerStyle]}>
      <TextInput
        ref={ref}
        placeholder={props.placeholder}
        onChangeText={onChange}
        value={value}
        style={[styles.textInput, { outlineColor: style.primaryColor }, props.textInputStyle]}
        secureTextEntry={props.secureTextEntry}
        multiline={props.multiline}
        editable={props.editable === false ? false : true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    backgroundColor: 'rgb(230, 230, 240)',
    flex: 1,
  },
  textInput: {
    borderRadius: 10,
    fontSize: 12,
    padding: 0,
    paddingLeft: 10,
    minHeight: 38,
    paddingVertical: 0 /* Android fix */,
    borderColor: 'rgb(200, 200, 220)',
    borderWidth: 1,
  },
})
