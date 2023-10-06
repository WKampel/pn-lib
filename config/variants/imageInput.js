export default imageInputVariants = ({ color, fontSize, space, inputHeight }) => ({
  base: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 0.7,

    labelContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    },

    labelStyle: {
      fontSize: 20,
      color: 'black',
    },
    imageStyle: {
      height: '100%',
      width: '100%',
    },
  },
  baseHovered: {
    opacity: 0.85,
  },
  basePressed: {
    opacity: 1,
  },
})
