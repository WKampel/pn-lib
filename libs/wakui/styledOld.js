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

function flattenObject(obj) {
  let flatObject = {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key.endsWith('Style') || typeof obj[key] !== 'object' || obj[key] === null) {
        // If the key ends with "Style" or the value is not an object, add it to the flat object
        flatObject[key] = obj[key]
      } else {
        // Otherwise, recursively flatten the object
        const nestedFlatObject = flattenObject(obj[key])
        Object.assign(flatObject, nestedFlatObject)
      }
    }
  }

  return flatObject
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
      let styles = { ...componentConfigVariants } // start with all variants

      const unappliedVariants = Object.keys(styles).filter(variantName => !appliedVariants[variantName] && variantName !== 'base')
      const unappliedStates = Object.keys(states).filter(stateName => !states[stateName])
      const unappliedPlatforms = ['web', 'ios', 'android'].filter(item => Platform.OS !== item)

      const keysToDelete = [...unappliedVariants, ...unappliedStates, ...unappliedPlatforms]

      styles = deepDeleteKeys(styles, keysToDelete)
      styles = flattenObject(styles)

      styles = { ...styles, ...allProps.style }

      return styles
    }, [componentConfigVariants, allProps, states])

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
