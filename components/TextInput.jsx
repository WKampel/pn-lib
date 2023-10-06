import React, { useRef } from 'react'
import { TextInput as ReactNativeTextInput, Text, TouchableWithoutFeedback, View } from 'react-native'
import { styled } from '../libs/wakui'

const TextInput = styled(
  'textInput',
  ({ style, password, email, onSubmit, disabled, onFocus, onBlur, onKeyPress, value, onChange, onMouseEnter, onMouseLeave, label }) => {
    const inputRef = useRef(null)
    return (
      <TouchableWithoutFeedback focusable={false} onPressIn={() => inputRef.current?.focus()}>
        <View style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {label && value && (
            <Text pointerEvents='none' style={{ color: style.labelColor, fontSize: style.labelFontSize }}>
              {label}
            </Text>
          )}
          <ReactNativeTextInput
            ref={inputRef}
            secureTextEntry={password}
            style={{
              outlineStyle: style.inputOutlineStyle,
              fontSize: style.inputFontSize,
              backgroundColor: style.inputBackgroundColor,
            }}
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
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
)

export default TextInput
