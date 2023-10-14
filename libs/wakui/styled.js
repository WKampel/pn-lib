import { useMemo, useState } from 'react'
import { Platform } from 'react-native'
import { useComponentVariants } from './themeProvider'
import { deepFilterKeys, deepMerge } from './utils'

const separateVariantsAndProps = props =>
  Object.keys(props).reduce(
    (acc, key) => {
      if (key.startsWith('$')) {
        if (props[key]) {
          acc.appliedVariants.push(key.substring(1))
          acc.spreadableVariants[key] = props[key]
        }
      } else {
        acc.props[key] = props[key]
      }
      return acc
    },
    { appliedVariants: [], spreadableVariants: {}, props: {} }
  )

const processPlatformSpecificStyles = (styleObject, currentPlatform) => {
  const keepKey = key => key.startsWith(`(${currentPlatform})`) || !key.match(/^\((web|android|ios)\)/)

  const relevantStyles = deepFilterKeys(styleObject, keepKey)

  // Remove remaining (web) / (android) / (ios) from the object
  return JSON.parse(JSON.stringify(relevantStyles).replace(/\((web|android|ios)\)/g, ''))
}

const getStylesFromVariant = (variant, states) => {
  if (!variant) return
  const { ['@hovered']: hoveredStyle, ['@pressed']: pressedStyle, ['@focused']: focusedStyle, ['@disabled']: disabledStyle, ...style } = variant

  const baseStyle = evaluateStyleProps(style)

  const stateStyles = [
    states.hovered && evaluateStyleProps(hoveredStyle),
    states.pressed && evaluateStyleProps(pressedStyle),
    states.focused && evaluateStyleProps(focusedStyle),
    states.disabled && evaluateStyleProps(disabledStyle),
  ]

  // Use deepMerge to combine baseStyle and stateStyles
  return stateStyles.reduce((acc, stateStyle) => deepMerge(acc, stateStyle || {}), baseStyle)
}

const evaluateStyleProps = style => {
  if (!style) return
  let styleCopy = JSON.parse(JSON.stringify(style))

  styleCopy = processPlatformSpecificStyles(styleCopy, Platform.OS)
  styleCopy = spreadDesignatedKeys(styleCopy)

  return styleCopy
}

const spreadDesignatedKeys = style => {
  const result = { ...style }
  for (let [key, value] of Object.entries(style)) {
    if (key.startsWith('...')) {
      Object.assign(result, value)
      delete result[key]
    }
  }
  return result
}

const styled = (name, Component) => {
  return allProps => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const { appliedVariants, spreadableVariants, props } = useMemo(() => separateVariantsAndProps(allProps), [allProps])
    const { base, ...other } = useComponentVariants(name)

    const states = {
      hovered: isHovered,
      focused: isFocused,
      pressed: isPressed,
      disabled: allProps.disabled,
    }

    const style = useMemo(() => {
      let styles = { ...getStylesFromVariant(base, states) }

      // Add variants
      appliedVariants.forEach(variant => {
        styles = deepMerge(styles, getStylesFromVariant(other[variant], states))
      })

      Object.assign(styles, allProps.style || {})

      return styles
    }, [other, base, allProps, states])

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
