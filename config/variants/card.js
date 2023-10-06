export default cardVariants = ({ color, shadow }) => ({
  base: {
    backgroundColor: color.cardBackground,
    padding: 25,
    borderRadius: 15,
    ...shadow.m,
    cursor: 'default',
  },
  s: {
    padding: 15,
    borderRadius: 10,
  },
  l: {
    padding: 45,
    borderRadius: 20,
  },
  pressable: {
    cursor: 'pointer',
  },
  pressableHovered: {
    backgroundColor: color.cardBackgroundHovered,
  },
  pressablePressed: {
    backgroundColor: color.cardBackgroundPressed,
  },
})
