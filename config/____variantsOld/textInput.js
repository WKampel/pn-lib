export default textInputVariants = ({ color, inputHeight }) => ({
  base: {
    cursor: 'text',
    borderWidth: 1,
    borderColor: color.textInputBorder,
    justifyContent: 'center',
    labelColor: 'gray',
    height: inputHeight.m,
    borderRadius: 5,
    paddingLeft: 15,
    labelFontSize: 12,
    inputFontSize: 14,
    outlineColor: color.outline,
    inputBackgroundColor: color.clear,
    inputOutlineStyle: 'none',
  },
  baseHovered: {
    borderColor: color.textInputBorderHovered,
  },
  baseFocused: {
    borderColor: color.textInputBorderFocused,
    outlineStyle: 'solid',
  },
  xs: {
    height: inputHeight.xs,
    borderRadius: 3,
    paddingLeft: 7,
    labelFontSize: 7,
    inputFontSize: 10,
  },
  s: {
    height: inputHeight.s,
    borderRadius: 4,
    paddingLeft: 10,
    labelFontSize: 9,
    inputFontSize: 13,
  },
})
