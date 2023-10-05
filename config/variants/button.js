export default buttonVariants = ({ color, fontSize, space }) => ({
  s: {
    padding: space.s,
    fontSize: fontSize.s,
  },
  m: {
    padding: space.m,
    fontSize: fontSize.m,
  },
  l: {
    padding: space.l,
    fontSize: fontSize.l,
  },
  round: {
    borderRadius: 999,
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
  solidPrimary: {
    backgroundColor: color.buttonSolidPrimaryBackground,
    textColor: color.buttonSolidPrimaryText,
  },
  solidSecondary: {
    backgroundColor: color.buttonSolidSecondaryBackground,
    textColor: color.buttonSolidSecondaryText,
  },
  solidDanger: {
    backgroundColor: color.buttonSolidDangerBackground,
    textColor: color.buttonSolidDangerText,
  },
})
