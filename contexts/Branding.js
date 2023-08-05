import { createContext, useContext } from 'react'
import { Platform } from 'react-native'
import { deepMerge } from '../libs/utils'

const Context = createContext()

export const useBranding = (componentName, variants = []) => {
  if (!componentName) return null
  const { baseStyles, variantStyles, colors } = useContext(Context)

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
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 3,
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
  }

  return <Context.Provider value={{ baseStyles, variantStyles, colors }}>{props.children}</Context.Provider>
}

/*



    input: {
      style: {
        borderWidth: 1,
        borderColor: 'rgb(220,220,220)',
        borderStyle: 'solid',
        borderRadius: 5,
        fontSize: 12,
        height: 40,
        paddingLeft: 15,
        paddingRight: 5,
        ...(Platform.OS === 'web' && { outlineColor: colors.primary }),
      },
      label: {
        style: {
          fontSize: 12,
        },
      },
    },
    link: {
      style: {
        color: colors.primary,
      },
    },
    homeTile: {
      style: {
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        height: 100,
        overflow: 'hidden',
        backgroundColor: colors.primary,
      },

      title: {
        style: {
          color: 'white',
          textAlign: 'center',
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 12,
          textTransform: 'uppercase',
        },
      },
    },
   
    message: {
      style: {
        marginRight: 'auto',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        maxWidth: '75%',
      },
      text: {
        style: {
          color: 'black',
        },
      },
      mine: {
        style: {
          marginLeft: 'auto',
          marginRight: 0,
          backgroundColor: colors.primary,
        },
        text: {
          style: {
            color: 'white',
          },
        },
      },
      server: {
        style: {
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'transparent',
          textAlign: 'center',
        },
        text: {
          style: {
            color: 'black',
          },
        },
      },
    },
    profileCard: {
      style: {
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: colors.primary,
      },
      title: {
        style: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
        },
      },
      subtitle: {
        style: {
          color: 'rgb(220, 220, 220)',
          fontSize: 13,
        },
      },
    },
    calendar: {
      event: {
        style: {
          marginBottom: 2,
          borderRadius: 3,
          padding: 2,
          textAlign: 'left',
          backgroundColor: colors.primary,
        },
        text: {
          style: {
            color: 'white',
            fontSize: 11,
          },
        },
      },
    },
    */
