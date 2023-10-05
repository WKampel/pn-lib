const palette = {
  // Primary
  primaryLight: 'lightblue',
  primary: 'blue',
  primaryDark: 'darkBlue',

  // Secondary
  secondaryLight: 'lightgray',
  secondary: 'gray',
  secondaryDark: 'darkgray',

  // Danger
  dangerLight: 'lightred',
  danger: 'red',
  dangerDark: 'darkred',

  // Generic
  black: 'black',
  white: 'white',
  snow: 'rgb(220,220,220)',
  clear: 'transparent',
}

const tokens = {
  color: {
    mainBackground: palette.white,

    // Ghost button
    buttonGhostBackground: palette.clear,

    // Primary ghost button
    buttonGhostPrimaryBorder: palette.primaryLight,
    buttonGhostPrimaryBorderHover: palette.primary,
    buttonGhostPrimaryBorderPress: palette.primaryDark,

    // Secondary ghost button
    buttonGhostSecondaryBorder: palette.secondaryLight,
    buttonGhostSecondaryBorderHover: palette.secondary,
    buttonGhostSecondaryBorderPress: palette.secondaryDark,

    // Danger ghost button
    buttonGhostDangerBorder: palette.dangerLight,
    buttonGhostDangerBorderHover: palette.danger,
    buttonGhostDangerBorderPress: palette.dangerDark,

    // Primary solid button
    buttonSolidPrimaryBackground: palette.primaryLight,
    buttonSolidPrimaryBackgroundHover: palette.primary,
    buttonSolidPrimaryBackgroundPress: palette.primaryDark,

    // Secondary solid button
    buttonSolidSecondaryBackground: palette.secondaryLight,
    buttonSolidSecondaryBackgroundHover: palette.secondary,
    buttonSolidSecondaryBackgroundPress: palette.secondaryDark,

    // Danger solid button
    buttonSolidDangerBackground: palette.dangerLight,
    buttonSolidDangerBackgroundHover: palette.danger,
    buttonSolidDangerBackgroundPress: palette.dangerDark,
  },
  space: {
    xs: 6,
    s: 12,
    m: 18,
    l: 24,
    xl: 30,
  },
  fontSize: {
    xs: 6,
    s: 12,
    m: 18,
    l: 24,
    xl: 30,
  },
}

const variants = {
  button: {
    s: {
      padding: 's',
      fontSize: 's',
    },
    m: {
      padding: 'm',
      fontSize: 'm',
    },
    l: {
      padding: 'l',
      fontSize: 'l',
    },
    round: {
      borderRadius: 999,
    },
    ghostPrimary: {
      backgroundColor: 'buttonGhostBackground',
      borderColor: 'buttonGhostPrimaryBorder',
      borderWidth: 2,
      textColor: 'buttonGhostPrimaryText',
    },
    ghostPrimaryHover: {
      borderColor: 'buttonGhostPrimaryBorderHover',
    },
    ghostSecondary: {
      backgroundColor: 'buttonGhostBackground',
      borderColor: 'buttonGhostSecondaryBorder',
      borderWidth: 2,
      textColor: 'buttonGhostSecondaryText',
    },
    ghostDanger: {
      backgroundColor: 'buttonGhostBackground',
      borderColor: 'buttonGhostDangerBorder',
      borderWidth: 2,
      textColor: 'buttonGhostDangerText',
    },
    solidPrimary: {
      backgroundColor: 'buttonSolidPrimaryBackground',
      textColor: 'buttonSolidPrimaryText',
    },
    solidSecondary: {
      backgroundColor: 'buttonSolidSecondaryBackground',
      textColor: 'buttonSolidSecondaryText',
    },
    solidDanger: {
      backgroundColor: 'buttonSolidDangerBackground',
      textColor: 'buttonSolidDangerText',
    },
  },
}

const config = {
  tokens,
  variants,
}

const example = () => {
  return (
    <>
      <SolidButton variant='m' />
      <SolidButton variants={['m', 'secondary']} />
    </>
  )
}

const Card = ({ style }) => {
  return <View style={style}>{children}</View>
}

const PracticeCard = ({ style, variants, name, slogan }) => {
  return (
    <Card variants={variants}>
      <Img />
      <View>
        <Text>{name}</Text>
        <Text>{slogan}</Text>
      </View>
    </Card>
  )
}

const ButtonBase = ({}) => {
  return <Pressable></Pressable>
}

export const styledHOC = (getComponentProps, Component) => {
  return ({ children, ...passedProps }) => {}
}

export const interactableHOC = (getComponentProps, Component) => {
  return ({ children, ...passedProps }) => {}
}
