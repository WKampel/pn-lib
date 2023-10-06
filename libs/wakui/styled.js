import { useMemo, useState } from 'react'
import useVariants from './useVariants'

/**
 * Separate variants from props based on '$' prefix
 *
 * @param {Object} props
 * @returns Object
 */
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

const getVariantStyles = (appliedVariants, allVariantsObject, states = {}) => {
  const regExp = new RegExp(`(${Object.keys(states).join('|')})$`)
  return getObjectKeysInOrder(allVariantsObject).reduce((acc, key) => {
    const baseKey = key.replace(regExp, '')
    const stateSuffix = key.slice(baseKey.length)

    if (appliedVariants[baseKey] && (!stateSuffix || states[stateSuffix])) {
      Object.assign(acc, allVariantsObject[key])
    }

    return acc
  }, {})
}

const styled = (name, middleware, Component) => {
  if (!Component) {
    Component = middleware
    middleware = undefined
  }

  return rawProps => {
    // Middleware allows for modification of props. This is useful if you want to add variants based on the state of a component. For instance, if disabled={true} is passed to a button, you can use middleware to add the $middleware varaint automatically. This prevents having to pass both disabled={true} and $disabled by the caller.
    const allProps = useMemo(() => (middleware ? middleware(rawProps) : rawProps), [rawProps, middleware])

    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const { appliedVariants, spreadableVariants, props } = useMemo(() => separateVariantsAndProps(allProps), [allProps])
    const componentConfigVariants = useVariants(name)

    const style = useMemo(() => {
      const states = {
        Hovered: isHovered,
        Focused: isFocused,
        Pressed: isPressed,
      }

      return {
        ...getVariantStyles({ ...appliedVariants, base: true }, componentConfigVariants, states), // All styles
        ...(allProps.style || {}), // Style overrides
      }
    }, [appliedVariants, componentConfigVariants, isHovered, isFocused, isPressed, allProps.style])

    const handleOnMouseEnter = () => {
      if (props.onMouseEnter) props.onMouseEnter()
      setIsHovered(true)
    }

    const handleOnMouseLeave = () => {
      if (props.onMouseLeave) props.onMouseLeave()
      setIsHovered(false)
    }

    const handleOnFocus = () => {
      if (props.onFocus) props.onFocus()
      setIsFocused(true)
    }

    const handleOnBlur = () => {
      if (props.onBlur) props.onBlur()
      setIsFocused(false)
    }

    const handleOnPressIn = () => {
      if (props.onPressIn) props.onPressIn()
      setIsPressed(true)
    }

    const handleOnPressOut = () => {
      if (props.onPressOut) props.onPressOut()
      setIsPressed(false)
    }

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
        {props.children}
      </Component>
    )
  }
}

export default styled
