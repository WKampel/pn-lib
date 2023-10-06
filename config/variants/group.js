export default groupVariants = ({ color, fontSize, space }) => ({
  base: {
    flexDirection: 'column',
    gap: space.m,
  },
  s: {
    gap: space.s,
  },
  l: {
    gap: space.l,
  },
  x: {
    flexDirection: 'row',
  },
})
