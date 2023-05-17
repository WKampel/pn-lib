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
        backgroundColor: 'rgb(230, 230, 240)',
        borderWidth: 1,
        borderColor: 'rgb(200, 200, 220)',
        borderStyle: 'solid',
        borderRadius: 10,
        fontSize: 12,
        padding: 5,
        minHeight: 40,
        flex: 1,
        paddingLeft: 10,
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
        textTransform: 'uppercase',
        paddingLeft: 15,
        paddingRight: 15,
      },
      text: {
        style: {},
      },
      disabled: {
        style: {
          backgroundColor: 'gray',
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
          paddingTop: 60,
          paddingLeft: 15,
          paddingBottom: 15,
          marginBottom: 10,
        },
        practiceName: {
          style: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
          },
        },
        practiceSlogan: {
          style: {
            color: 'rgb(220, 220, 220)',
            fontSize: 14,
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
    },
    profileCard: {
      style: {
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
<<<<<<< HEAD
=======
        flexDirection: 'row',
>>>>>>> 6b928fa97f686ce2356514626a3446a3ebb5bdc1
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
<<<<<<< HEAD
=======
    calendar: {
      style: {
        color: 'white',
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
      },
      event: {
        style: {
          color: 'white',
          marginBottom: 2,
          borderRadius: 3,
          padding: 2,
          fontSize: 10,
          textAlign: 'left',
          backgroundColor: primaryColor,
        },
      },
    },
>>>>>>> 6b928fa97f686ce2356514626a3446a3ebb5bdc1
  }

  return <Context.Provider value={styles}>{props.children}</Context.Provider>
}
