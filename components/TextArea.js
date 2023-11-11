import React, { useRef } from 'react'
import { TextInput as ReactNativeTextInput, Text, TouchableWithoutFeedback, View } from 'react-native'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'

const TextArea = ({ containerStyle, disabled, onKeyPress, value, onChange, label, placeholder, onChangeRaw, onLayout }) => {
  const inputRef = useRef(null)
  const { hovered, focused, pressed, onMouseEnter, onMouseLeave, onFocus, onBlur } = useInteractive()
  const styles = useStyles(styleConfig, {}, { hovered, focused, pressed })

  return (
    <TouchableWithoutFeedback focusable={false} onPressIn={() => inputRef.current?.focus()}>
      <View style={[styles.container, containerStyle]} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {label && value && <Text style={styles.label}>{label}</Text>}
        <ReactNativeTextInput
          ref={inputRef}
          value={value}
          onChangeText={onChange}
          onChange={onChangeRaw}
          onLayout={onLayout}
          placeholder={placeholder || label}
          placeholderTextColor='gray'
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          editable={disabled ? false : true}
          multiline={true}
          style={styles.input}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styleConfig = {
  base: {
    container: {
      borderWidth: 1,
      borderColor: 'rgb(220,220,220)',
      justifyContent: 'center',
      '@hovered': {
        borderColor: '$color-border-on-surface-intense',
      },
      '@focused': {
        borderColor: '$color-ui-primary',
      },
      borderRadius: '$radius-xs',
      paddingHorizontal: '$spacing-s',
      minHeight: '$size-m',
    },
    input: {
      fontSize: '$font-size-xs',
      outline: 'none',
    },
    label: {
      color: '$color-text-on-surface-subtle',
      fontSize: '$font-size-xs',
    },
  },
}

export default TextArea
