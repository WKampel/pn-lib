import { createContext, useContext } from 'react'
import { Platform } from 'react-native'

const Context = createContext()

export const useBranding = () => useContext(Context)

export const BrandingProvider = props => {
  const primaryColor = props.style?.primaryColor || '#69b4f5'

  const styles = {
    primaryColor,
    input: {
      style: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgb(210,210,210)',
        borderStyle: 'solid',
        borderRadius: 7,
        fontSize: 12,
        padding: 5,
        minHeight: 40,
        flex: 1,
        paddingLeft: 15,
        ...(Platform.OS === 'web' && { outlineColor: primaryColor }),
      },
      text: {
        fontSize: 12,
      },
    },
    button: {
      style: {
        minHeight: 40,
        flex: Platform.OS === 'web' ? null : 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 500,
        textTransform: 'capitalize',
        paddingLeft: 50,
        paddingRight: 50,
      },
      text: {
        style: {
          fontWeight: 500,
          fontSize: 13,
        },
      },
      disabled: {
        style: {
          backgroundColor: 'gray',
        },
      },
      dangerous: {
        style: {
          backgroundColor: 'rgb(230, 50, 50)',
        },
      },
      primary: {
        style: {
          backgroundColor: primaryColor,
        },
        text: {
          style: {
            color: 'white',
          },
        },
      },
      secondary: {
        style: {
          borderColor: primaryColor,
          borderWidth: 2,
        },
        text: {
          style: {
            color: primaryColor,
            fontWeight: 'bold',
          },
        },
      },
    },
    link: {
      style: {
        color: primaryColor,
      },
    },
    homeTile: {
      style: {
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        height: 100,
        overflow: 'hidden',
        backgroundColor: primaryColor,
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
    sideNav: {
      style: {},
      header: {
        style: {
          backgroundColor: primaryColor,
          paddingTop: 50,
          paddingLeft: 20,
          paddingBottom: 25,
          marginBottom: 10,
        },
        practiceName: {
          style: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 5,
          },
        },
        practiceSlogan: {
          style: {
            color: 'rgb(220, 220, 220)',
            fontSize: 14,
          },
        },
        userName: {
          style: {
            color: 'white',
            borderWidth: 1,
            borderColor: 'white',
            fontSize: 12,
            borderRadius: 15,
            padding: 5,
            paddingLeft: 10,
            marginTop: 10,
          },
        },
        logo: {
          style: {
            width: 50,
            height: 50,
            marginRight: 15,
          },
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
          backgroundColor: primaryColor,
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
        backgroundColor: primaryColor,
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
          backgroundColor: primaryColor,
        },
        text: {
          style: {
            color: 'white',
            fontSize: 11,
          },
        },
      },
    },
  }

  return <Context.Provider value={styles}>{props.children}</Context.Provider>
}
