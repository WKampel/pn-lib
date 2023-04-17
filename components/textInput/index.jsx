import { Context as StyleContext } from '../../contexts/style'
import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

export default props => {
  const style = useContext(StyleContext)
  return (
    <View style={[styles.textInputContainer, props.containerStyle]}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        style={[styles.textInput, { outlineColor: style.primaryColor }, props.style]}
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
    backgroundColor: 'rgb(240, 240, 240)',
    borderColor: 'rgb(220, 220, 220)',
    borderWidth: 2,
    flex: 1,
  },
  textInput: {
    fontSize: 12,
    padding: 0,
    paddingLeft: 10,
    minHeight: 35,
    paddingVertical: 0 /* Android fix */,
  },
})
