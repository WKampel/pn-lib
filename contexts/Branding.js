import { createContext, useContext, useMemo } from 'react'
import { Platform } from 'react-native'
import generateTokens from '../config/tokens'
import generateVariants from '../config/variants'
import { deepMerge, mobileStyles } from '../libs/utils'
import { WakuiProvider } from '../libs/wakui'
import { adjustBrightness, adjustSaturation, copyHue } from '../libs/wakui/utils'

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

  const primary = props.style?.primaryColor || '#69b4f5'

  const brightnessAdjustment = 20
  const saturationAdjustment = 20

  // This makes sure brightness is adjusted before saturation. The order matters; the output changes based on the order.
  const adjustColor = (color, brightnessAmount, saturationAmount) => {
    const tempColor = adjustBrightness(color, brightnessAmount)
    return adjustSaturation(tempColor, saturationAmount)
  }

  const palette = {
    // Primary
    primaryLight: adjustBrightness(primary, brightnessAdjustment),
    primary,
    primaryDark: adjustBrightness(primary, -brightnessAdjustment),

    // Saturated
    primarySaturatedLight: adjustColor(primary, brightnessAdjustment, saturationAdjustment),
    primarySaturated: adjustSaturation(primary, saturationAdjustment),
    primarySaturatedDark: adjustColor(primary, -brightnessAdjustment, saturationAdjustment),

    // Desaturated
    primaryDesaturatedLight: adjustColor(primary, brightnessAdjustment, -saturationAdjustment),
    primaryDesaturated: adjustSaturation(primary, -saturationAdjustment),
    primaryDesaturatedDark: adjustColor(primary, -brightnessAdjustment, -saturationAdjustment),

    snowPrimaryTint: copyHue('#F0F2F5', primary),

    // Secondary
    secondaryLight: 'rgb(220,220,220)',
    secondary: 'rgb(200,200,200)',
    secondaryDark: 'rgb(180,180,180)',

    // Danger
    dangerLight: 'lightred',
    danger: 'red',
    dangerDark: 'darkred',

    // Generic
    black: 'black',
    white: 'white',
    snowLight: 'rgb(245,245,245)',
    snow: 'rgb(240,240,240)',
    snowDark: 'rgb(235,235,235)',
    clear: 'transparent',
  }

  const tokens = useMemo(() => generateTokens(palette), [palette])
  const variants = useMemo(() => generateVariants(tokens), [tokens])

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
