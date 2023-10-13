import { useMemo, useState } from 'react'
import { useComponentVariants } from './themeProvider'

function deepDeleteKeys(obj, keysToDelete) {
  const objClone = JSON.parse(JSON.stringify(obj))

  function deleteKeys(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (keysToDelete.includes(key)) {
          delete obj[key]
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          deleteKeys(obj[key])
        }
      }
    }
  }

  deleteKeys(objClone)

  return objClone
}

const separateVariantsAndProps = props => {
  return Object.keys(props).reduce(
    (acc, key) => {
      if (key.startsWith('$')) {
        acc.appliedVariants[key.substring(1)] = true
        acc.spreadableVariants[key] = props[key]
      } else {
        acc.props[key] = props[key]
      }
      return acc
    },
    { appliedVariants: {}, spreadableVariants: {}, props: {} }
  )
}

const getObjectKeysInOrder = obj => Reflect.ownKeys(obj)
const stripOrderPrefix = key => key.replace(/^\(\-?\d+\)/, '')

const processKeys = (keys, callback) => {
  getObjectKeysInOrder(keys).forEach(key => {
    const sanitizedKey = stripOrderPrefix(key)
    callback(sanitizedKey, key)
  })
}

const getStylesOfVariant = (variant = {}, states = {}) => {
  const stateStyles = {}
  processKeys(variant, (key, originalKey) => {
    states[key] && Object.assign(stateStyles, variant[originalKey])
  })
  return { ...variant, ...stateStyles }
}

const getStylesOfAppliedVariants = (appliedVariants, allVariants, states) => {
  const appliedStyles = {}
  processKeys(allVariants, (key, originalKey) => {
    if (key in appliedVariants) Object.assign(appliedStyles, getStylesOfVariant(allVariants[originalKey], states))
  })
  return appliedStyles
}

const styled = (name, Component) => {
  return allProps => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const { appliedVariants, spreadableVariants, props } = useMemo(() => separateVariantsAndProps(allProps), [allProps])
    const componentConfigVariants = useComponentVariants(name)

    const states = {
      '@hovered': isHovered,
      '@focused': isFocused,
      '@pressed': isPressed,
      '@disabled': allProps.disabled,
    }

    const style = useMemo(() => {
      const mergedStyles = {
        ...getStylesOfVariant(componentConfigVariants.base, states),
        ...getStylesOfAppliedVariants(appliedVariants, componentConfigVariants, states),
        ...(allProps.style || {}),
      }

      return mergedStyles
    }, [appliedVariants, componentConfigVariants, states, allProps.style])

    const style2 = useMemo(() => {
      let styles = { ...componentConfigVariants } // start with all variants

      const unappliedVariantNames = Object.keys(styles).filter(variantName => !appliedVariants[variantName] && variantName !== 'base')
      const unappliedStateNames = Object.keys(states).filter(stateName => !states[stateName])
      const unappliedPlatformNames = ['web', 'ios', 'android'].filter(item => Platform.OS !== item)

      const keysToDelete = [...unappliedVariantNames, ...unappliedStateNames, ...unappliedPlatformNames]

      styles = deepDeleteKeys(styles, keysToDelete)
      const obj = {
        borderWidth: 2,
        fontSize: 19,
        zIndex: 5,
        obj: {
          fontSize: 10,
          color: 'blue',
          sub: {
            fontSize: 9,
          },
        },
        someStyles: {
          backgroundColor: 'yellow',
          stuff: {
            borderWidth: 9,
            moreStyles: {
              color: 'pink',
            },
          },
        },
        level1: {
          level2: {
            level3: {
              zIndex: 9,
            },
          },
        },
      }

      const obj = {
        borderWidth: 2,
        color: 'blue',
        fontSize: 9,
        someStyles: {
          backgroundColor: 'yellow',
          borderWidth: 9,
          moreStyles: {
            color: 'pink',
          },
        },
        zIndex: 9,
      }
      return styles
    }, [componentConfigVariants, allProps, states])

    console.log(style2)

    const createEventHandler = (handlerFromProps, stateUpdater) => () => {
      handlerFromProps && handlerFromProps()
      stateUpdater()
    }

    const handleOnMouseEnter = createEventHandler(allProps.onMouseEnter, setIsHovered.bind(null, true))
    const handleOnMouseLeave = createEventHandler(allProps.onMouseLeave, setIsHovered.bind(null, false))
    const handleOnFocus = createEventHandler(allProps.onFocus, setIsFocused.bind(null, true))
    const handleOnBlur = createEventHandler(allProps.onBlur, setIsFocused.bind(null, false))
    const handleOnPressIn = createEventHandler(allProps.onPressIn, setIsPressed.bind(null, true))
    const handleOnPressOut = createEventHandler(allProps.onPressOut, setIsPressed.bind(null, false))

    return (
      <Component
        {...props}
        style={style}
        variants={spreadableVariants}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
        isFocused={isFocused}
        isHovered={isHovered}
        isPressed={isPressed}
      >
        {allProps.children}
      </Component>
    )
  }
}

export default styled
