export default buttonVariants = ({ color, fontSize, space, inputHeight }) => ({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    // Medium
    height: inputHeight.m,
    paddingHorizontal: space.m,
    fontSize: fontSize.m,
    borderRadius: 10,

    // Solid primary
    backgroundColor: color.buttonSolidPrimaryBackground,
    color: color.buttonSolidPrimaryText,

    opacity: 0.7,
  },
  baseHovered: {
    opacity: 0.85,
  },
  basePressed: {
    opacity: 1,
  },
  s: {
    paddingHorizontal: space.s,
    height: inputHeight.s,
    fontSize: fontSize.s,
    borderRadius: 8,
  },
  l: {
    paddingHorizontal: space.l,
    height: inputHeight.l,
    fontSize: fontSize.l,
    borderRadius: 12,
  },
  round: {
    borderRadius: 999,
  },
  iconFirst: {
    flexDirection: 'row-reverse',
  },
  ghostPrimary: {
    backgroundColor: color.buttonGhostBackground,
    borderColor: color.buttonGhostPrimaryBorder,
    textColor: color.buttonGhostPrimaryText,
    borderWidth: 2,
  },
  ghostPrimaryHover: {
    borderColor: color.buttonGhostPrimaryBorderHover,
  },
  ghostSecondary: {
    backgroundColor: color.buttonGhostBackground,
    borderColor: color.buttonGhostSecondaryBorder,
    textColor: color.buttonGhostSecondaryText,
    borderWidth: 2,
  },
  ghostDanger: {
    backgroundColor: color.buttonGhostBackground,
    borderColor: color.buttonGhostDangerBorder,
    textColor: color.buttonGhostDangerText,
    borderWidth: 2,
  },
  solidSecondary: {
    backgroundColor: color.buttonSolidSecondaryBackground,
    textColor: color.buttonSolidSecondaryText,
  },
  solidDanger: {
    backgroundColor: color.buttonSolidDangerBackground,
    textColor: color.buttonSolidDangerText,
  },
  disabled: {
    backgroundColor: 'gray',
  },
})
