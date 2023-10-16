import React, { useRef } from 'react'
import { TextInput as ReactNativeTextInput, TouchableWithoutFeedback, View } from 'react-native'
import { styled } from '../libs/wakui'
import Label from './Label'

const TextInput = styled(
  'textInput',
  ({
    style,
    password,
    email,
    onSubmit,
    disabled,
    onFocus,
    onBlur,
    onKeyPress,
    value,
    onChange,
    onMouseEnter,
    onMouseLeave,
    label,
    variants,
    multiline,
  }) => {
    const inputRef = useRef(null)
    return (
      <TouchableWithoutFeedback focusable={false} onPressIn={() => inputRef.current?.focus()}>
        <View style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {label && value && <Label {...variants}>{label}</Label>}
          <ReactNativeTextInput
            ref={inputRef}
            secureTextEntry={password}
            style={style.inputStyle}
            value={value}
            onChangeText={onChange}
            placeholder={label}
            placeholderTextColor='gray'
            keyboardType={email && 'email-address'}
            disabled={disabled}
            onSubmitEditing={onSubmit}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            editable={disabled ? false : true}
            multiline={multiline}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
)

export default TextInput
