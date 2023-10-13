export default buttonVariants = ({ color, fontSize }) => ({
  base: {
    color: color.link,
    fontSize: fontSize.m,
    opacity: 0.7,
  },
  s: {
    fontSize: fontSize.s,
  },
  l: {
    fontSize: fontSize.l,
  },
  baseHovered: {
    opacity: 0.85,
    textDecoration: 'underline',
  },
  basePressed: {
    opacity: 1,
  },
})
