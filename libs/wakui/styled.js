import { useMemo, useState } from 'react'
import StyleProvider from './styleProvider'

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
        acc.appliedVariants.push(key.substring(1))
        acc.spreadableVariants[key] = props[key]
      } else {
        acc.props[key] = props[key]
      }
      return acc
    },
    { appliedVariants: [], spreadableVariants: {}, props: {} }
  )
}

const getVariantStyles = (appliedVariants, componentConfigVariants, stateSuffix = '') => {
  const variantKeys = appliedVariants.map(variant => `${variant}${stateSuffix}`)
  return variantKeys.reduce((acc, variant) => ({ ...acc, ...componentConfigVariants[variant] }), {})
}

const styled = (name, Component) => {
  return allProps => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const { appliedVariants, spreadableVariants, props } = useMemo(() => separateVariantsAndProps(allProps), [allProps])
    const componentConfigVariants = useMemo(() => useVariants(name), [name])

    const style = useMemo(() => {
      const baseStyle = getVariantStyles(appliedVariants, componentConfigVariants)
      const focusedStyle = isFocused ? getVariantStyles(appliedVariants, componentConfigVariants, 'Focused') : {}
      const hoveredStyle = isHovered ? getVariantStyles(appliedVariants, componentConfigVariants, 'Hovered') : {}
      const pressedStyle = isPressed ? getVariantStyles(appliedVariants, componentConfigVariants, 'Pressed') : {}

      return { ...baseStyle, ...focusedStyle, ...hoveredStyle, ...pressedStyle, ...(props.style ?? {}) }
    }, [appliedVariants, componentConfigVariants, isFocused, isHovered, isPressed])

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
        spreadableVariants={spreadableVariants}
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
        <StyleProvider style={style}>{props.children}</StyleProvider>
      </Component>
    )
  }
}

export default styled
