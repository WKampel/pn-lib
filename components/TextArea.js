import React, { useRef, useState } from 'react'
import { TextInput as ReactNativeTextInput, Text, TouchableWithoutFeedback, View } from 'react-native'
import useInteractive from '../hooks/useInteractive'
import useStyles from '../hooks/useStyles'

const TextArea = ({ containerStyle, disabled, onKeyPress, value, onChange, label, placeholder }) => {
  const inputRef = useRef(null)
  const { hovered, focused, pressed, onMouseEnter, onMouseLeave, onFocus, onBlur } = useInteractive()
  const styles = useStyles(styleConfig, {}, { hovered, focused, pressed })
  const [height, setHeight] = useState()

  const adjustTextInputSize = evt => {
    const el = evt?.target || evt?.nativeEvent?.target
    if (el && el.style) {
      el.style.height = 0
      const newHeight = el.offsetHeight - el.clientHeight + el.scrollHeight
      el.style.height = `${newHeight}px`
    }
  }

  return (
    <TouchableWithoutFeedback focusable={false} onPressIn={() => inputRef.current?.focus()}>
      <View style={[styles.container, containerStyle]} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {label && value && <Text style={styles.label}>{label}</Text>}
        <ReactNativeTextInput
          ref={inputRef}
          value={value}
          onChangeText={onChange}
          onChange={adjustTextInputSize}
          onLayout={adjustTextInputSize}
          placeholder={placeholder || label}
          placeholderTextColor='gray'
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          editable={disabled ? false : true}
          multiline={true}
          style={[styles.input, { height }]}
          // onContentSizeChange={event => setHeight(event.nativeEvent.contentSize.height)}
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
      padding: '$spacing-s',
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
