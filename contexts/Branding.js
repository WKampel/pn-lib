import { createContext, useContext, useMemo } from 'react'
import { Platform } from 'react-native'
import { deepMerge, mobileStyles } from '../libs/utils'
import { WakuiProvider } from '../libs/wakui'
import { adjustHue } from '../libs/wakui/utils'

const Context = createContext()

export const useBranding = (componentName, variants = []) => {
  const { baseStyles, variantStyles, colors } = useContext(Context)
  if (!componentName) return { colors }

  let componentStyles = baseStyles[componentName] || {}

  variants.forEach(variant => {
    if (variantStyles[variant]?.[componentName]) {
      componentStyles = deepMerge(componentStyles, variantStyles[variant][componentName])
    }
  })

  return { brandingStyles: componentStyles, colors }
}

export const BrandingProvider = props => {
  const colors = {
    primary: props.style?.primaryColor || '#69b4f5',
    secondary: 'rgb(175, 175, 175)',
    danger: 'red',
    warning: 'yellow',
    disabled: 'gray',
  }

  const baseStyles = {
    button: {
      container: {
        backgroundColor: colors.primary,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 25,
      },
      text: {
        fontSize: 12,
        color: 'white',
      },
    },
    textInput: {
      label: {
        fontSize: 12,
      },
      input: {
        outline: 'none',
        backgroundColor: 'rgb(240, 242, 246)',
        borderWidth: 1,
        borderColor: 'rgb(220,220,220)',
        borderRadius: 5,
        fontSize: 12,
        height: 40,
        paddingLeft: 15,
        paddingRight: 5,
        ...(Platform.OS === 'web' && { outlineColor: colors.primary }),
        borderStyle: 'solid',
        ...mobileStyles({
          backgroundColor: 'white',
        }),
      },
    },
    iconSelect: {
      backgroundColor: 'rgb(240, 242, 246)',
      borderWidth: 1,
      borderColor: 'rgb(220,220,220)',
      borderRadius: 5,
      fontSize: 12,
      height: 40,
      ...(Platform.OS === 'web' && { outlineColor: colors.primary }),
      ...mobileStyles({
        backgroundColor: 'white',
      }),
    },
    barSwitcher: {
      container: {
        height: 40,
        gap: 3,
      },
      item: {
        borderBottomWidth: 2,
        borderColor: 'black',
        opacity: 0.3,
        paddingHorizontal: 15,
      },
      text: {
        color: 'black',
        fontSize: 13,
      },
    },
    yesNoInput: {
      container: {
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(220,220,220)',
        borderRadius: 5,
        backgroundColor: 'white',
      },
    },
    checkBox: {
      backgroundColor: 'lightgray',
      borderRadius: 3,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    message: {
      container: {
        backgroundColor: colors.primary,
        borderRadius: 10,
      },
      text: {
        color: 'white',
      },
    },
    section: {
      gap: 25,
    },
  }

  const variantStyles = {
    small: {
      button: {
        container: {
          height: 30,
          borderRadius: 8,
        },
        text: {
          fontSize: 10,
        },
      },
      textInput: {
        input: {
          fontSize: 10,
        },
      },
      title: {
        fontSize: 16,
      },
    },
    big: {
      button: {
        container: {
          height: 50,
          borderRadius: 12,
        },
        text: {
          fontSize: 14,
        },
      },
      title: {
        fontSize: 26,
      },
    },
    round: {
      button: {
        container: {
          borderRadius: 999,
        },
      },
      textInput: {
        input: {
          borderRadius: 999,
        },
      },
      iconSelect: {
        borderRadius: 999,
      },
      checkBox: {
        borderRadius: 999,
      },
    },
    danger: {
      button: {
        container: {
          backgroundColor: colors.danger,
        },
        text: {
          color: 'black',
        },
      },
    },
    disabled: {
      button: {
        container: {
          backgroundColor: colors.disabled,
        },
      },
    },
    secondary: {
      button: {
        container: {
          borderColor: colors.primary,
          borderWidth: 2,
          backgroundColor: 'white',
        },
        text: {
          color: colors.primary,
          fontWeight: 'bold',
        },
      },
    },
    narrow: {
      textInput: {
        input: {
          width: 150,
        },
      },
      button: {
        container: {
          paddingHorizontal: 10,
        },
      },
    },
    focused: {
      textInput: {
        input: {
          borderColor: colors.primary,
        },
      },
    },
    checked: {
      checkBox: {
        backgroundColor: colors.primary,
      },
    },
    centered: {
      textInput: {
        input: {
          paddingLeft: baseStyles.textInput.input.paddingRight,
        },
      },
    },
    tight: {
      section: {
        gap: 10,
      },
    },
  }

  const primaryColor = props.style?.primaryColor || '#69b4f5'

  const baseTintColor = '#F0F2F5'
  const primaryLightTint = adjustHue(baseTintColor, primaryColor)

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

  const tokens = useMemo(() => tokens(palette), [palette])
  const variants = useMemo(() => variants(tokens), [tokens])

  const config = {
    tokens,
    variants,
  }

  return (
    <Context.Provider value={{ baseStyles, variantStyles, colors }}>
      <WakuiProvider config={config}>{props.children}</WakuiProvider>
    </Context.Provider>
  )
}
