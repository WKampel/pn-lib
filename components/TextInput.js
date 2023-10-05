import React, { useRef } from 'react'
import { TextInput as ReactNativeTextInput, Text, TouchableWithoutFeedback, View } from 'react-native'
import { styled } from '../libs/wakui'

const TextInput = styled(
  ({ isFocused, isHovered }) => ({
    style: {
      cursor: 'text',
      borderWidth: 1,
      borderColor: isHovered ? 'black' : isFocused ? 'transparent' : 'rgb(200,200,200)',
      justifyContent: 'center',
      backgroundColor: '$color.primaryLightTint',
    },
    defaultVariants: {
      size: 'm',
      outline: isFocused && 'primary',
    },
    inputStyle: {
      backgroundColor: 'transparent',
      outlineStyle: 'none',
    },
    labelStyle: {
      color: 'gray',
    },
    variants: {
      size: {
        xs: {
          height: 30,
          borderRadius: 3,
          paddingLeft: 7,

          labelStyle: {
            fontSize: 7,
          },
          inputStyle: {
            fontSize: 10,
          },
        },
        s: {
          height: 40,
          borderRadius: 4,
          paddingLeft: 10,

          labelStyle: {
            fontSize: 9,
          },
          inputStyle: {
            fontSize: 13,
          },
        },
        m: {
          height: 50,
          borderRadius: 5,
          paddingLeft: 15,

          labelStyle: {
            fontSize: 12,
          },
          inputStyle: {
            fontSize: 14,
          },
        },
        l: {},
      },
      flex: {
        other: ({ value }) => ({
          flex: value,
        }),
      },
    },
  }),
  ({
    style,
    inputStyle,
    labelStyle,
    password,
    email,
    onSubmit,
    disabled,
    onFocus,
    onBlur,
    onKeyPress,
    value,
    onChange,
    ph,
    onMouseEnter,
    onMouseLeave,
    label,
  }) => {
    const inputRef = useRef(null)
    const placeholder = ph || label
    return (
      <TouchableWithoutFeedback focusable={false} onPressIn={() => inputRef.current?.focus()}>
        <View style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {label && value && (
            <Text pointerEvents='none' style={labelStyle}>
              {label}
            </Text>
          )}
          <ReactNativeTextInput
            ref={inputRef}
            secureTextEntry={password}
            style={inputStyle}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
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
