import { TextInput as ReactNativeTextInput } from 'react-native'

import React from 'react'
import { styled } from '../libs/wakui'

const TextInput = styled(
  ({ isFocused, isHovered }) => ({
    color: 'black',
    size: 'm',
    borderWidth: 1,
    borderColor: isHovered ? 'black' : isFocused ? 'transparent' : 'rgb(200,200,200)',
    outlineStyle: 'none',
    outline: isFocused && 'primary',
    backgroundColor: 'rgb(231 240 254)',
    variants: {
      size: {
        s: {},
        m: {
          height: 40,
          fontSize: 13,
          borderRadius: 10,
          paddingLeft: 15,
        },
        l: {},
      },
    },
  }),
  ({ style, password, email, onSubmit, disabled, onFocus, onBlur, onKeyPress, value, onChange, ph, onMouseEnter, onMouseLeave }) => {
    return (
      <ReactNativeTextInput
        secureTextEntry={password}
        style={style}
        value={value}
        onChangeText={onChange}
        placeholder={ph}
        placeholderTextColor='gray'
        keyboardType={email && 'email-address'}
        disabled={disabled}
        onSubmitEditing={onSubmit}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        editable={disabled ? false : true}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    )
  }
)

export default TextInput
