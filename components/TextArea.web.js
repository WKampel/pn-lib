import BaseTextArea from './TextArea.js'

const TextArea = props => {
  const adjustTextInputSize = e => {
    const el = e?.target || e?.nativeEvent?.target
    if (el && el.style) {
      el.style.height = 0
      const newHeight = el.offsetHeight - el.clientHeight + el.scrollHeight
      el.style.height = `${newHeight}px`
    }
  }

  return <BaseTextArea {...props} onChangeRaw={adjustTextInputSize} onLayout={adjustTextInputSize} />
}

export default TextArea
